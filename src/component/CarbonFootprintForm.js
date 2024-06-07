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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Electricity Usage (kWh):</label>
        <input
          type="number"
          name="electricity"
          value={formData.electricity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Gas Usage (therms):</label>
        <input
          type="number"
          name="gas"
          value={formData.gas}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Water Usage (gallons):</label>
        <input
          type="number"
          name="water"
          value={formData.water}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Travel (miles):</label>
        <input
          type="number"
          name="travel"
          value={formData.travel}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default CarbonFootprintForm;
