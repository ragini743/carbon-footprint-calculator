// src/CarbonFootprintForm.js
import React, { useState } from 'react';

const CarbonFootprintForm = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    electricity: '',
    gas: '',
    water: '',
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

  return (
    <form onSubmit={handleSubmit} >
      <div className='border-[2px]
       border-gray-100 p-4 mb-4 input-container relative'>
        <label className='font-bold'>Electricity Usage (kWh):</label>
        <input className='outline-none relative'
          type="number"
          name="electricity"
          value={formData.electricity}
          onChange={handleChange}
          required
        />
        <p className='hover-message'>Electricity used in a month</p>
      </div>
     
      <div className='border-[2px]
       border-gray-100 p-2 mb-4'>
        <label className='font-bold'>Gas Usage (therms):</label>
        <input className='outline-none'
          type="number"
          name="gas"
          value={formData.gas}
          onChange={handleChange}
          required
        />
      </div>
      <div className='border-[2px]
       border-gray-100 p-2 mb-4 '>
        <label className='font-bold'>Water Usage ({formData.waterUnit}):</label>
        <input className='outline-none'
          type="number"
          name="water"
          value={formData.water}
          onChange={handleChange}
          required
        />
         <select name="waterUnit" value={formData.waterUnit} onChange={handleChange}>
          <option value="gallons">Gallons</option>
          <option value="liters">Liters</option>
        </select>
      </div>
      <div  className='border-[2px]
       border-gray-100 p-2 mb-4'>
      <label className='font-bold'>LPG ():</label>
        <input className='outline-none'
          type="number"
          name="lpg"
          value={formData.lpg}
          onChange={handleChange}
          required
        />
             <select name="waterUnit" value={formData.waterUnit} onChange={handleChange}>
          <option value="gallons">Kilograms</option>
          <option value="liters">Liters</option>
        </select>
      </div>
      <div className='border-[2px]
       border-gray-100 p-2 mb-4'>
        <label className='font-bold'>Travel (miles):</label>
        <input className='outline-none'
          type="number"
          name="travel"
          value={formData.travel}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className='bg-blue-500 text-white font-bold p-2 rounded-md'>Calculate</button>
    </form>
  );
};

export default CarbonFootprintForm;
