// src/CarbonFootprintResult.js
import React from "react";

const CarbonFootprintResult = ({ result, onClose, showResult }) => {
  return (
    <div className="overflow-hidden h-[100vh]  z-40">
      <div className="bg-gradient-to-r from-slate-500 to-gray-900 absolute z-40   top-0 bottom-0 right-0 left-0  opacity-95 h-[100vh] overflow-hidden">

      </div>

      <div className="bg-white absolute md:w-[30%]  top-0 z-10 pb-8 shadow-2xl mx-auto left-0 right-0 pl-4 md:pl-8 rounded-lg border-gray-800 overflow-hidden ">
        <div className="mt-4 flex justify-end mr-8">
          <div
            className=" w-[10%]  border-2 p-2 border-gray-950 rounded-full"
            onClick={onClose}
          >
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
          Petrol : <span className="font-bold">{result.petrol} kg CO2</span>
        </h3>
        <h3 className="mb-2">
          Diesel : <span className="font-bold">{result.diesel} kg CO2</span>
        </h3>
        <h3 className="mb-2">
          AutoLPG : <span className="font-bold">{result.autoLPG} kg CO2</span>
        </h3>
        <h3 className="mb-2">
          Taxis : <span className="font-bold">{result.taxis} kg CO2</span>
        </h3>
        <h3 className="mb-2">
          Bus : <span className="font-bold">{result.bus} kg CO2</span>
        </h3>
        <h3 className="mb-2">
          Autorickshaw :{" "}
          <span className="font-bold">{result.autorickshaw} kg CO2</span>
        </h3>
        <h3 className="mb-2">
          Train : <span className="font-bold">{result.train} kg CO2</span>
        </h3>
        <h3 className="mb-2">
          Total : <span className="font-bold">{result.total} kg CO2</span>
        </h3>
      </div>
    </div>
  );
};

export default CarbonFootprintResult;
