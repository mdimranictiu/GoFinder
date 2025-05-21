import React, { useState } from 'react';

const Home = () => {
    const [range,setRange]=useState(50)
    const hanldeRange=(e)=>{
     e.preventDefault();
     setRange(Number(e.target.value))
    }
    return (
        <div className='w-[80%] shadow-2xl rounded-sm my-5 py-5 h-[320px] mx-auto'>
           <div>
            <h2 className='text-2xl font-bold text-center max-sm:text-xl'>Visit with Go Finder</h2>
            <div className='text-center py-5  max-w-[400px] rounded-sm mx-auto'>
        <select defaultValue="Pick a Place" className="select select-info">
  <option disabled={true}>Pick a Place</option>
  <option value="restaurant">Restaurant</option>
  <option value="mosque">Mosque</option>
  <option value="hotel">Hotel</option>
  <option value="tourist_attraction">Historical Place</option>
</select>
            </div>
                <div className="text-center">
      <input
        type="range"
        min={0}
        max={100}
        value={range}
        onChange={hanldeRange}
        className="range range-info"
      />
      <p className="mt-2">Current Range: {range} km</p>
    </div>
<div className='text-center  py-5'>
    <button className="btn w-[220px] btn-active text-white cursor-pointer btn-info">Find</button>
</div>
           </div>
        </div>
    );
};

export default Home;