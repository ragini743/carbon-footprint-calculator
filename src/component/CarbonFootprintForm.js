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
    <form onSubmit={handleSubmit} className="my-auto">
      <div className="grid  grid-cols-1 md:grid-cols-2 md:items-center justify-center">
        <div
          className="
        p-2 mb-2 input-container relative flex items-center flex-col md:flex-row "
        >
          <label className="font-bold w-[40%] text-center md:text-sm lg:text-[1rem]">
            Electricity Usage (kWh):
          </label>
          <input
            placeholder="Electricity used in a month"
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
          <label className="font-bold w-[40%] text-center md:text-sm lg:text-[1rem]">
            Water Usage ({formData.waterUnit}) :
          </label>
          <div className="flex rounded-lg w-[60%] md:text-sm lg:text-[1rem]">
          <input
            placeholder="water used in a Liter or Gallons"
            className="outline-none relative  p-2 w-[80%] rounded-tl-lg rounded-bl-lg"
            type="number"
            name="water"
            value={formData.water}
            onChange={handleChange}
          />
          <select
            className=" py-2 w-[20%] outline-none rounded-tr-lg rounded-br-lg"
            name="waterUnit"
            value={formData.waterUnit}
            onChange={handleChange}
          >
            <option value="gallons">Gallons</option>
            <option value="liters">Liters</option>
          </select>
          </div>
         
        </div>
        <div
          className="
        p-2 mb-2 input-container relative flex justify-center items-center "
        >
          <label className="font-bold w-[36%] text-center md:text-sm lg:text-[1rem]">
            LPG ({formData.lpgUnit}) :
          </label>
          <div className="flex rounded-lg w-[60%] ">
          <input
            placeholder="LPG used in a Liters or kilograms "
            className="outline-none relative  p-2 w-[80%] rounded-tl-lg rounded-bl-lg"
            type="number"
            name="lpg"
            value={formData.lpg}
            onChange={handleChange}
          />
          <select
            className=" py-2 w-[20%] outline-none rounded-tr-lg rounded-br-lg"
            name="lpgUnit "
            value={formData.lpgUnit}
            onChange={handleChange}
          >
            <option value="kilograms">Kg</option>
            <option value="liters">Liters</option>
          </select>
          </div>
         
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
          <label className="font-bold w-[40%] text-center md:text-sm lg:text-[1rem]">
            Petrol (litres):
          </label>
          <input
            placeholder="Petrol used in Litres"
            className="outline-none relative  p-2 w-[60%] rounded-lg md:text-sm lg:text-[1rem]"
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
          <label className="font-bold w-[40%] text-center md:text-sm lg:text-[1rem]">
            Diesel (litres):
          </label>
          <input
            placeholder="Diesel used in Litres"
            className="outline-none relative  p-2 w-[60%] rounded-lg md:text-sm lg:text-[1rem]"
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
          <label className="font-bold w-[40%] text-center md:text-sm lg:text-[1rem]">
            Auto LPG (kg):
          </label>
          <input
            placeholder="Auto LPG used in Kg"
            className="outline-none relative  p-2 w-[60%] rounded-lg md:text-sm lg:text-[1rem]"
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
          <label className="font-bold w-[40%] text-center md:text-sm lg:text-[1rem]">Taxis (km):</label>
          <input
            placeholder="Distance traveled by Taxis in Km"
            className="outline-none relative  p-2 w-[60%] rounded-lg md:text-sm lg:text-[1rem]"
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
          <label className="font-bold w-[40%] text-center md:text-sm lg:text-[1rem]">
            Local Bus (km):
          </label>
          <input
            placeholder="Distance traveled by Local Bus in Km"
            className="outline-none relative  p-2 w-[60%] rounded-lg md:text-sm lg:text-[1rem]"
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
          <label className="font-bold w-[40%] text-center md:text-sm lg:text-[1rem]">
            Autorickshaw (km):
          </label>
          <input
            placeholder="Distance traveled by Autorickshaw in Km"
            className="outline-none relative  p-2 w-[60%] rounded-lg md:text-sm lg:text-[1rem]"
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
          <label className="font-bold w-[40%] text-center md:text-sm lg:text-[1rem]">
            Local Train (km):
          </label>
          <input
            placeholder="Distance traveled by Local Train in Km"
            className="outline-none relative  p-2 w-[60%] rounded-lg md:text-sm lg:text-[1rem]"
            type="number"
            name="train"
            value={formData.train}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-4 rounded-md px-8 my-6 mx-auto w-[50%]"
      >
        Calculate
      </button>
      </div>
 
    </form>
  );
};

export default CarbonFootprintForm;
