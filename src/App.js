import React, { useState } from 'react';


import CarbonFootprintForm from './component/CarbonFootprintForm';
import CarbonFootprintResult from './component/CarbonFootprintResult';

const App = () => {
  const [result, setResult] = useState(null);

  const calculateCarbonFootprint = (data) => {
    const electricityFactor = 0.233; // kg CO2 per kWh
    const gasFactor = 5.3; // kg CO2 per therm
    const waterFactorGallons = 0.002; // kg CO2 per gallon
    const waterFactorLiters = 0.000528; // kg CO2 per liter
    const travelFactor = 0.411; // kg CO2 per mile

    const electricityCO2 = data.electricity * electricityFactor;
    const gasCO2 = data.gas * gasFactor;
    const waterCO2 = data.water * (data.waterUnit === 'gallons' ? waterFactorGallons : waterFactorLiters);
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
    <div className="App md:w-[40%] mx-auto mt-16 shadow-lg border-[1px] border-gray-100 p-4">
      <h1  className='font-bold text-xl md:text-2xl text-center mb-4'>Carbon Footprint Calculator</h1>
      <CarbonFootprintForm onCalculate={calculateCarbonFootprint} />
      {result && <CarbonFootprintResult result={result} />}
    </div>
  );
};

export default App;
