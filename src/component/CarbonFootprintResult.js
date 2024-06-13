// src/CarbonFootprintResult.js
import React from "react";

const CarbonFootprintResult = ({ result, onClose, showResult }) => {
  console.log("result", result);
  return (
    <div className="">
      <div className="bg-gradient-to-r from-slate-500 to-gray-900 absolute z-10 top-0 bottom-0 right-0 left-0  opacity-95  overflow-hidden">

      </div>
      <div className="bg-white  md:w-[40%] fixed top-1/4 overflow-y-auto   md:absolute  md:top-1/4 z-10 pb-4 shadow-2xl mx-auto left-0 right-0 p-4  rounded-lg border-gray-800 ">
        <table>
          <div className="flex md:justify-between items-center mb-2 md:mb-4">
            <div className="w-[80%] md:w-[50%]">
              <h2 className="font-bold  lg:text-2xl text-center mb-4 text-[1rem]">
                Your Carbon Footprint
              </h2>
            </div>
            <div className="w-[20%] md:w-[50%] flex justify-end">
              <div
                className=" w-[50%] md:w-[12%]  border-2 p-2 border-gray-950 rounded-full"
                onClick={onClose}
              >
                <img src="./cross-image4.jpg" alt="" className="w-full"></img>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm ">
            <div className=" bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">{result.electricity} kg CO2</p>
              <p className="text-sm">electricity</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">{result.water} kg CO2</p>
              <p className="text-sm"> Water</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">{result.lpg} kg CO2</p>
              <p className="text-sm">LPG</p>
            </div>

            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">{result.petrol} kg CO2</p>
              <p className="text-sm"> Petrol</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">{result.diesel} kg CO2</p>
              <p className="text-sm">Diesel</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">{result.autoLpg} kg CO2</p>
              <p className="text-sm">AutoLPG</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">{result.taxis} kg CO2</p>
              <p className="text-sm"> Taxis</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">{result.autorickshaw} kg CO2</p>
              <p className="text-sm">Autorickshaw</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">{result.bus} kg CO2</p>
              <p className="text-sm"> Bus</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">{result.train} kg CO2</p>
              <p className="text-sm"> Train</p>
            </div>
          </div>
              <div className=" md:w-[50%] mt-2 rounded-lg m-auto px-2 font-bold ml-8 flex py-2 md:text-[1.5rem] text-sm items-center">
              <p className="mr-2 ">Total : 
              </p>
              <p className=" font-bold bg-red-600 text-white p-2 rounded-lg">  {result.total} kg CO2</p>
            
            </div>
        </table>
      </div>
  
    </div>
  );
};

export default CarbonFootprintResult;
