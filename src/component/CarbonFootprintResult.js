// src/CarbonFootprintResult.js
import React from "react";

const CarbonFootprintResult = ({ result }) => {
  console.log("result1234", result);
  return (
    <div>
      <div className="bg-gradient-to-r from-slate-500 to-gray-900  absolute  top-0 bottom-0 right-0 left-0  opacity-95"></div>

      <div className="bg-white absolute md:w-[30%]  top-1/4 z-10 pb-8 shadow-2xl mx-auto left-0 right-0 pl-4 md:pl-8 rounded-lg border-gray-800">
        <div className="mt-4 flex justify-end mr-8">
          <div className=" w-[10%]  border-2 p-2 border-gray-950 rounded-full">
            <img src="./cross-image4.jpg" alt=""></img>
          </div>
        </div>
        <h2 className="font-bold  text-2xl text-center mb-4">
          Your Carbon Footprint
        </h2>
        <p className="mb-2">
          Electricity :{" "}
          <span className="font-bold"> {result.electricity} kg CO2</span>
        </p>
        <p className="mb-2">
          LPG : <span className="font-bold">{result.lpg} kg CO2</span>
        </p>
        <p className="mb-2">
          Water : <span className="font-bold"> {result.water} kg CO2</span>
        </p>
        <p className="mb-2">
          Travel : <span className="font-bold">{result.travel} kg CO2</span>
        </p>
        <h3 className="mb-2">
          Total : <span className="font-bold">{result.total} kg CO2</span>
        </h3>
      </div>
    </div>
  );
};

export default CarbonFootprintResult;
