import React, { useState } from "react";

import CarbonFootprintForm from "./component/CarbonFootprintForm";
import CarbonFootprintResult from "./component/CarbonFootprintResult";

const App = () => {
  console.log("result,result");
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    electricity: "",
    gas: "",
    water: "",
    waterUnit: "liters",
    lpg: "",
    lpgUnit: "kilograms",
    travel: "",
    petrol: '',
    diesel: '',
    autoLpg: '',
    taxis: '',
    bus: '',
    autorickshaw: '',
    train: ''
  });

  const calculateCarbonFootprint = (data) => {
    console.log("data", data);
    const electricityFactor = 0.233; // kg CO2 per kWh
    
    const LPGFactorKg = 3.06;
    const LPGFactorLitre = 1.51;

    const waterFactorGallons = 0.002; // kg CO2 per gallon
    const waterFactorLiters = 0.000528; // kg CO2 per liter
    const travelFactor = 0.411; // kg CO2 per mile
    const petrolFactor = 2.31; // kg CO2 per liter
    const dieselFactor = 2.68; // kg CO2 per liter
    const autoLpgFactor = 1.51; // kg CO2 per liter (assuming same as LPG)
    const taxiFactor = 0.18; // kg CO2 per km
    const busFactor = 0.10; // kg CO2 per km
    const autorickshawFactor = 0.05; // kg CO2 per km
    const trainFactor = 0.06; // kg CO2 per km

    const electricityCO2 = data.electricity * electricityFactor;
    const LPGCO2 =
      data.lpg * (data.lpgUnit === "kilograms" ? LPGFactorKg : LPGFactorLitre);
    const waterCO2 =
      data.water *
      (data.waterUnit === "gallons" ? waterFactorGallons : waterFactorLiters);
    const travelCO2 = data.travel * travelFactor;
    const petrolCO2 = data.petrol * petrolFactor;
    const dieselCO2 = data.diesel * dieselFactor;
    const autoLpgCO2 = data.autoLpg * autoLpgFactor;
    const taxisCO2 = data.taxis * taxiFactor;
    const busCO2 = data.bus * busFactor;
    const autorickshawCO2 = data.autorickshaw * autorickshawFactor;
    const trainCO2 = data.train * trainFactor;

    const totalCO2 = electricityCO2 + LPGCO2 + waterCO2 + travelCO2 + petrolCO2 + dieselCO2 + autoLpgCO2 + taxisCO2 + busCO2 + autorickshawCO2 + trainCO2;

    setResult({
      electricity: electricityCO2.toFixed(2),
      lpg: LPGCO2.toFixed(2),
      water: waterCO2.toFixed(2),
      travel: travelCO2.toFixed(2),
      total: totalCO2.toFixed(2),
    });
    setShowResult(true);
  };

  const handleCloseResult = () => {
    setShowResult(false);
    console.log("Hello");
    setFormData({
      electricity: "",
      gas: "",
      water: "",
      waterUnit: "liters",
      lpg: "",
      lpgUnit: "kilograms",
      travel: "",
      petrol: '',
      diesel: '',
      autoLpg: '',
      taxis: '',
      bus: '',
      autorickshaw: '',
      train: ''
      
    });
  };



  return (
    <div className="App md:w-[40%] mx-auto pt-16 shadow-lg border-[1px] border-gray-400  bg-green-100 mb-10">
      <h1 className="font-bold text-xl md:text-2xl text-center mb-4">
        Carbon Footprint Calculator
      </h1>
      <CarbonFootprintForm
        onCalculate={calculateCarbonFootprint}
        formData={formData}
        setFormData={setFormData}
      />
      {showResult && (
        <CarbonFootprintResult
          result={result}
          onClose={handleCloseResult}
          showResult={showResult}
        />
      )}
    </div>
  );
};

export default App;
