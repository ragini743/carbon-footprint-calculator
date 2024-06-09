// src/CarbonFootprintResult.js
import React from 'react';

const CarbonFootprintResult = ({ result }) => {
    console.log("result1234",result)
  return (
    <div> 
      <h2>Your Carbon Footprint</h2>
      <p>Electricity: {result.electricity} kg CO2</p>
      <p>LPG: {result.lpg} kg CO2</p>
      <p>Water: {result.water} kg CO2</p>
      <p>Travel: {result.travel} kg CO2</p>
      <h3>Total: {result.total} kg CO2</h3>
    </div>
  );
};

export default CarbonFootprintResult;
