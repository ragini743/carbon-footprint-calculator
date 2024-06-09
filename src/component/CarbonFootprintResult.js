// src/CarbonFootprintResult.js
import React from "react";

const CarbonFootprintResult = ({ result }) => {
  console.log("result1234", result);
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 to-amber-900 absolute top-0 bottom-0 right-0 left-0  opacity-55"></div>

      <div  className="bg-white absolute md:w-[30%]  top-1/4 z-10 py-16 shadow-2xl mx-auto left-0 right-0 pl-4 md:pl-8 rounded-lg border-gray-800">
        <h2 className="font-bold  text-2xl text-center mb-4">Your Carbon Footprint</h2>
        <p className="mb-2">Electricity : <span className="font-bold"> {result.electricity} kg CO2</span></p>
        <p className="mb-2">LPG : <span className="font-bold">{result.lpg} kg CO2</span></p>
        <p className="mb-2">Water : <span className="font-bold"> {result.water} kg CO2</span></p>
        <p className="mb-2">Travel  : <span className="font-bold">{result.travel} kg CO2</span></p>
        <h3 className="mb-2">Total : <span className="font-bold">{result.total} kg CO2</span></h3>
        <div className="mt-4">
        <button className="font-bold  bg-blue-900 px-6 rounded-lg py-2 text-white ">Back</button>
      </div>
      </div>
    
    </div>
  );
};

export default CarbonFootprintResult;
