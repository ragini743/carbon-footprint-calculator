// src/CarbonFootprintForm.js
import React, { useState } from "react";

const CarbonFootprintForm = ({ onCalculate, formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="
        p-2 mb-2 input-container relative flex items-center "
      >
        <label className="font-bold w-[40%] text-center">Electricity Usage (kWh):</label>
        <input placeholder="Electricity used in a month"
          className="outline-none relative  p-2 w-[60%] rounded-lg"
          type="number"
          name="electricity"
          value={formData.electricity}
          onChange={handleChange}
        />
       
      </div>

      <div
        className="
        p-2 mb-2 input-container relative flex  items-center "
      >
        <label className="font-bold w-[36%] text-center">Water Usage ({formData.waterUnit}) :</label>
        <input placeholder="water used in a Liter or Gallons" 
          className="outline-none relative  p-2  rounded-lg w-[53%]"
          type="number"
          name="water"
          value={formData.water}
          onChange={handleChange}
        />
        <select className=" py-2 w-[11%] ml-4 flex  outline-none rounded-lg justify-end"
          name="waterUnit"
          value={formData.waterUnit}
          onChange={handleChange}
        >
          <option value="gallons">Gallons</option>
          <option value="liters">Liters</option>
        </select>
       
      </div>
      <div
        className="
        p-2 mb-2 input-container relative flex justify-center items-center "
      >
        <label className="font-bold w-[36%] text-center">LPG ({formData.lpgUnit}) :</label>
        <input placeholder="LPG used in a Liters or kilograms"
       className="outline-none relative  p-2  rounded-lg w-[53%]"
          type="number"
          name="lpg"
          value={formData.lpg}
          onChange={handleChange}
        />
        <select className=" py-2 w-[11%] ml-4 flex  outline-none rounded-lg justify-end" name="lpgUnit" value={formData.lpgUnit} onChange={handleChange}>
          <option value="kilograms">Kg</option>
          <option value="liters">Liters</option>
        </select>
      
      </div>
      {/* <div
        className="
        p-4 mb-4 input-container relative flex justify-center items-center "
      >
        <label className="font-bold">Travel (miles):</label>
        <input
         className="outline-none relative ml-4 p-2 w-[60%] rounded-lg"
          type="number"
          name="travel"
          value={formData.travel}
          onChange={handleChange}
        />
        <p className="hover-message"> LPG used in a Liters or kilograms</p>
      </div> */}
      <div
        className="
        p-2 mb-2 input-container relative flex justify-center items-center "
      >
        <label className="font-bold w-[40%] text-center">Petrol (litres):</label>
        <input placeholder="Petrol used in Litres"
        className="outline-none relative  p-2 w-[60%] rounded-lg"
          type="number"
          name="petrol"
          value={formData.petrol}
          onChange={handleChange}
        />
       
      </div>

      <div
        className="
        p-2 mb-2 input-container relative flex justify-center items-center "
      >
        <label className="font-bold w-[40%] text-center">Diesel (litres):</label>
        <input placeholder="Diesel used in Litres"
         className="outline-none relative  p-2 w-[60%] rounded-lg"
          type="number"
          name="diesel"
          value={formData.diesel}
          onChange={handleChange}
        />
   
      </div>

      <div
        className="
        p-2 mb-2 input-container relative flex justify-center items-center "
      >
        <label className="font-bold w-[40%] text-center">Auto LPG (kg):</label>
        <input placeholder="Auto LPG used in Kg"
        className="outline-none relative  p-2 w-[60%] rounded-lg"
          type="number"
          name="autoLpg"
          value={formData.autoLpg}
          onChange={handleChange}
        />
        
      </div>

      <div
        className="
        p-2 mb-2 input-container relative flex justify-center items-center "
      >
        <label className="font-bold w-[40%] text-center">Taxis (km):</label>
        <input placeholder="Distance traveled by Taxis in Km"
          className="outline-none relative  p-2 w-[60%] rounded-lg"
          type="number"
          name="taxis"
          value={formData.taxis}
          onChange={handleChange}
        />
     
      </div>
      <div
        className="
        p-2 mb-2 input-container relative flex justify-center items-center "
      >
        <label className="font-bold w-[40%] text-center">Local Bus (km):</label>
        <input placeholder="Distance traveled by Local Bus in Km"
         className="outline-none relative  p-2 w-[60%] rounded-lg"
          type="number"
          name="bus"
          value={formData.bus}
          onChange={handleChange}
        />
       
      </div>

      <div
        className="
        p-2 mb-2 input-container relative flex justify-center items-center "
      >
        <label className="font-bold w-[40%] text-center">Autorickshaw (km):</label>
        <input placeholder="Distance traveled by Autorickshaw in Km"
         className="outline-none relative  p-2 w-[60%] rounded-lg"
          type="number"
          name="autorickshaw"
          value={formData.autorickshaw}
          onChange={handleChange}
        />
    
      </div>
      <div
        className="
        p-2 mb-2 input-container relative flex justify-center items-center "
      >
        <label className="font-bold w-[40%] text-center">Local Train (km):</label>
        <input placeholder="Distance traveled by Local Train in Km"
        className="outline-none relative  p-2 w-[60%] rounded-lg"
          type="number"
          name="train"
          value={formData.train}
          onChange={handleChange}
        />
       
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold p-2 rounded-md ml-16 mb-6"
      >
        Calculate
      </button>
    </form>
  );
};

export default CarbonFootprintForm;
