// src/App.js
import React, { useState } from 'react';
import CarbonFootprintForm from './component/CarbonFootprintForm';
import CarbonFootprintResult from './component/CarbonFootprintResult';


const App = () => {
  const [result, setResult] = useState(null);

  const calculateCarbonFootprint = (data) => {
    const electricityFactor = 0.233; // kg CO2 per kWh
    const gasFactor = 5.3; // kg CO2 per therm
    const waterFactor = 0.002; // kg CO2 per gallon
    const travelFactor = 0.411; // kg CO2 per mile

    const electricityCO2 = data.electricity * electricityFactor;
    const gasCO2 = data.gas * gasFactor;
    const waterCO2 = data.water * waterFactor;
    const travelCO2 = data.travel * travelFactor;

    const totalCO2 = electricityCO2 + gasCO2 + waterCO2 + travelCO2;

    setResult({
      electricity: electricityCO2.toFixed(2),
      gas: gasCO2.toFixed(2),
      water: waterCO2.toFixed(2),
      travel: travelCO2.toFixed(2),
      total: totalCO2.toFixed(2)
    });
  };

  return (
    <div className="App">
      <h1>Carbon Footprint Calculator</h1>
      <CarbonFootprintForm onCalculate={calculateCarbonFootprint} />
      {result && <CarbonFootprintResult result={result} />}
    </div>
  );
};

export default App;
