import React, { useEffect, useState } from "react";

const Home = () => {
  const [range, setRange] = useState(50);
  const [selectedType, setSelectedType] = useState("");
  const [myLocation, setMyLocation] = useState("");
  const [coords, setCoords] = useState(null);
  const [results, setResults] = useState([]);

  const handleRange = (e) => {
    setRange(Number(e.target.value));
  };

  const handleSelect = (e) => {
    setSelectedType(e.target.value);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setCoords({ latitude, longitude });
    });
  }, []);

  useEffect(() => {
    const getMyLocation = async () => {
      if (coords) {
        try {
          const res = await fetch(
            `https://us1.locationiq.com/v1/reverse?key=${
              import.meta.env.VITE_LOCATIONIQ_TOKEN
            }&lat=${coords.latitude}&lon=${coords.longitude}&format=json`
          );
          const data = await res.json();
          setMyLocation(data.display_name);
        } catch (err) {
          console.error("Error fetching my location:", err);
        }
      }
    };
    getMyLocation();
  }, [coords]);

  const getEachLocation = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://us1.locationiq.com/v1/reverse?key=${
          import.meta.env.VITE_LOCATIONIQ_TOKEN
        }&lat=${lat}&lon=${lon}&format=json`
      );
      const data = await res.json();
      return data.display_name;
    } catch {
      return "Location not available";
    }
  };

  const handleFind = () => {
    if (!coords || !selectedType) return;

    const { latitude, longitude } = coords;
    const [tagType, tagValue] = selectedType.split(":");

    const query = `
      [out:json];
      (
        node["${tagType}"="${tagValue}"](around:${
      range * 1000
    },${latitude},${longitude});
        way["${tagType}"="${tagValue}"](around:${
      range * 1000
    },${latitude},${longitude});
        relation["${tagType}"="${tagValue}"](around:${
      range * 1000
    },${latitude},${longitude});
      );
      out center;
    `;

    fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query,
    })
      .then((res) => res.json())
      .then(async (data) => {
        const enrichedResults = await Promise.all(
          data.elements.slice(0, 10).map(async (place) => {
            const lat = place.lat || place.center?.lat;
            const lon = place.lon || place.center?.lon;
            const locationName = await getEachLocation(lat, lon);
            return { ...place, locationName };
          })
        );
        setResults(enrichedResults);
      })
      .catch((err) => console.error("Nearby places fetch error:", err));
  };

  return (
    <div className="w-[80%] shadow-2xl rounded-sm my-5 py-5 h-auto mx-auto">
      <h2 className="text-2xl font-bold text-center">Visit with Go Finder</h2>
      <p className="text-center text-gray-500">
        My Location: {myLocation || "Fetching..."}
      </p>

      <div className="text-center py-5">
        <select
          defaultValue=""
          onChange={handleSelect}
          className="select select-info"
        >
          <option value="" disabled>
            Pick a Place
          </option>
          <option value="amenity:restaurant">Restaurant</option>
          <option value="amenity:place_of_worship">Mosque</option>
          <option value="tourism:hotel">Hotel</option>
          <option value="tourism:attraction">Historical Place</option>
        </select>
      </div>

      <div className="text-center">
        <input
          type="range"
          min={1}
          max={100}
          value={range}
          onChange={handleRange}
          className="range range-info"
        />
        <p className="mt-2">Current Range: {range} km</p>
      </div>

      <div className="text-center py-5">
        <button
          onClick={handleFind}
          className="btn w-[220px] btn-info text-white"
        >
          Find
        </button>
      </div>

      {/* ✅ রেজাল্ট দেখানো */}
      {results.length > 0 && (
        <div className="px-5">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Found Places:
          </h3>
          <ul className="space-y-2">
            {results.map((place, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded">
                {place.tags?.name || "Unnamed Place"} <br />
                {place.locationName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
