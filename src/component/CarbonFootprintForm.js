// src/CarbonFootprintForm.js
import React, { useState } from 'react';

const CarbonFootprintForm = ({ onCalculate }) => {
   
  const [formData, setFormData] = useState({
    electricity: '',
    gas: '',
    water: '',
    waterUnit: 'liters',
    lpg:"",
    lpgUnit: 'kilograms',
    travel: ''
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  console.log("onCalculate",formData)

  return (
    <form onSubmit={handleSubmit} >
      <div className='border-[2px]
       border-gray-100 p-4 mb-4 input-container relative'>
        <label className='font-bold'>Electricity Usage (kWh):</label>
        <input className='outline-none relative ml-4'
          type="number"
          name="electricity"
          value={formData.electricity}
          onChange={handleChange}
          
        />
        <p className='hover-message'>Electricity used in a month</p>
      </div>
     
     
      <div className='border-[2px]
       border-gray-100 p-4 mb-4 input-container relative '>
        <label className='font-bold'>Water Usage ({formData.waterUnit}):</label>
        <input className='outline-none ml-4'
          type="number"
          name="water"
          value={formData.water}
          onChange={handleChange}
          
        />
         <select name="waterUnit" value={formData.waterUnit} onChange={handleChange}>
          <option value="gallons">Gallons</option>
          <option value="liters">Liters</option>
        </select>
        <p className='hover-message'>water used in a Liter or Gallons</p>
        
      </div>
      <div  className='border-[2px]
       border-gray-100 p-4 mb-4 input-container relative'>
      <label className='font-bold'>LPG ({formData.lpgUnit}):</label>
        <input className='outline-none ml-4'
          type="number"
          name="lpg"
          value={formData.lpg}
          onChange={handleChange}
        
        />
             <select name="lpgUnit" value={formData.lpgUnit} onChange={handleChange}>
          <option value="kilograms">Kilograms</option>
          <option value="liters">Liters</option>
        </select>
        <p className='hover-message'> LPG used in a Liters or kilograms</p>
       
      </div>
      <div className='border-[2px]
       border-gray-100 p-4 mb-4 input-container relative'>
        <label className='font-bold'>Travel (miles):</label>
        <input className='outline-none ml-4'
          type="number"
          name="travel"
          value={formData.travel}
          onChange={handleChange}
        
        />
          <p className='hover-message'> LPG used in a Liters or kilograms</p>
        
      </div>
      <button type="submit" className='bg-blue-500 text-white font-bold p-2 rounded-md'>Calculate</button>
    </form>
  );
};

export default CarbonFootprintForm;
