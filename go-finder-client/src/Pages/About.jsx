import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-[#00BAE3] mb-6">
        About Go Finder
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Go Finder is your ultimate companion to discover nearby places like
        restaurants, mosques, hotels, and historical attractions — all with just
        a few clicks!
      </p>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-600">
          Our mission is to simplify your travel and exploration experience.
          Whether you're in a new city or your hometown, Go Finder helps you
          explore your surroundings effortlessly using real-time geolocation and
          trusted APIs.
        </p>
      </div>

      <div className="py-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Why Go Finder?
        </h2>
        <ul className="list-disc ml-5 text-gray-600 space-y-2">
          <li>Real-time location detection</li>
          <li>Instant access to nearby essential places</li>
          <li>User-friendly interface</li>
          <li>Powered by reliable APIs like LocationIQ and Overpass</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Meet the Developer
        </h2>
        <p className="text-gray-600">
          Hi, I’m <strong>Mohammad Imran Sheikh</strong>, a passionate web
          developer dedicated to building useful, real-world applications. Go
          Finder is one of my projects designed to help people easily discover
          places around them using modern web technologies.
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-500">
          Want to collaborate or have feedback? Reach out at:{" "}
          <a
            href="mailto:imransheikh1246@gmail.com"
            className="text-blue-600 underline"
          >
            imransheikh1246@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
