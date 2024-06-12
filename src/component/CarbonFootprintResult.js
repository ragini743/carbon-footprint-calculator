// src/CarbonFootprintResult.js
import React from "react";

const CarbonFootprintResult = ({ result, onClose, showResult }) => {
    console.log("result",result)
  return (
    <div className="">
      <div className="bg-gradient-to-r from-slate-500 to-gray-900 absolute z-10 top-0 bottom-0 right-0 left-0  opacity-95  overflow-hidden"></div>
      <div className="bg-white absolute md:w-[40%]  top-1/4 z-10 pb-8 shadow-2xl mx-auto left-0 right-0 p-4 md:pl-8 rounded-lg border-gray-800 overflow-hidden ">
        <table >
          <div className="flex justify-between items-center mb-4">
            <thead className="w-[50%]">
              <h2 className="font-bold  text-2xl text-center mb-4">
                Your Carbon Footprint
              </h2>
            </thead>
            <div className="w-[50%] flex justify-end">
            <div
              className=" w-[12%]  border-2 p-2 border-gray-950 rounded-full"
              onClick={onClose}
            >
              <img src="./cross-image4.jpg" alt=""></img>
            </div>

            </div>
         
          </div>
          <div className="md:grid md:grid-cols-3 gap-4">
            <div className=" bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">
              {result.electricity} kg CO2
                
              </p>
              <p className="text-sm">electricity</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">
              {result.water} kg CO2
                
              </p>
              <p className="text-sm"> Water</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">
              {result.lpg} kg CO2  
              </p>
              <p className="text-sm">LPG</p>
            </div>
           
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">
              {result.petrol} kg CO2
                
              </p>
              <p className="text-sm"> Petrol</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">
              {result.diesel} kg CO2
                
              </p>
              <p className="text-sm">Diesel</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">
              {result.autoLpg} kg CO2</p>
              <p className="text-sm">AutoLPG</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">
              {result.taxis} kg CO2
                
              </p>
              <p className="text-sm"> Taxis</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">
              {result.autorickshaw} kg CO2
                
              </p>
              <p className="text-sm" >Autorickshaw</p>
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">
              {result.bus} kg CO2
                
              </p>
              <p className="text-sm"> Bus</p>
              
            </div>
            <div className="bg-blue-700 text-white rounded-lg m-auto px-2 py-[1px]">
              <p className=" font-bold">
              {result.train} kg CO2
                
              </p>
              <p className="text-sm"> Train</p>
            </div>

          </div>
        </table>
      </div>
      <div>
        
      </div>
      
    </div>
  );
};

export default CarbonFootprintResult;
