import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, Car, Calculator, GraduationCap, Construction, Lightbulb } from "lucide-react";
import RPMGauge from "../components/rpm-gauge";
import InputPanel from "../components/input-panel";
import EducationalPanel from "../components/educational-panel";

export default function Home() {
  const [gearRatios, setGearRatios] = useState({
    first: 3.36,
    second: 1.93,
    third: 1.29,
    fourth: 1.00,
    fifth: 0.84,
    sixth: 0.56,
    seventh: 0.45,
    eighth: 0.38,
    ninth: 0.32,
    tenth: 0.28
  });

  const [vehicleSpeed, setVehicleSpeed] = useState(60);
  const [axleRatio, setAxleRatio] = useState(3.73);
  const [tireDiameter, setTireDiameter] = useState(26.7);
  const [selectedGear, setSelectedGear] = useState(4);

  const getCurrentGearRatio = () => {
    const gearMap = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
    return gearRatios[gearMap[selectedGear - 1] as keyof typeof gearRatios];
  };

  const calculateRPM = () => {
    const transmissionRatio = getCurrentGearRatio();
    return Math.round((axleRatio * vehicleSpeed * transmissionRatio * 336.13) / tireDiameter);
  };

  const currentRPM = calculateRPM();

  return (
    <div className="min-h-screen auto-grey">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-l-auto-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Cog className="text-2xl auto-orange" />
              <h1 className="text-xl font-bold auto-navy">Manual Transmission Simulator</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="auto-navy text-sm">Manual Transmission Learning Tool</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
          
          {/* Input Panel */}
          <div className="lg:col-span-4">
            <InputPanel
              gearRatios={gearRatios}
              setGearRatios={setGearRatios}
              vehicleSpeed={vehicleSpeed}
              setVehicleSpeed={setVehicleSpeed}
              axleRatio={axleRatio}
              setAxleRatio={setAxleRatio}
              tireDiameter={tireDiameter}
              setTireDiameter={setTireDiameter}
            />
          </div>

          {/* RPM Gauge Display */}
          <div className="lg:col-span-5">
            <RPMGauge
              currentRPM={currentRPM}
              selectedGear={selectedGear}
              setSelectedGear={setSelectedGear}
            />
            
            {/* Current Calculation Card */}
            <Card className="border-l-4 border-l-auto-yellow mt-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calculator className="auto-yellow text-xl mr-3" />
                  <h2 className="text-lg font-semibold">Current Calculation</h2>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Selected Gear:</span>
                    <span className="font-semibold auto-orange">{selectedGear}th ({getCurrentGearRatio().toFixed(2)})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Formula:</span>
                    <span className="text-xs text-gray-600">[(AR × VS × TR × 336.13) / TD]</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-xs text-gray-600 mb-1">
                      [({axleRatio} × {vehicleSpeed} × {getCurrentGearRatio().toFixed(2)} × 336.13) / {tireDiameter}]
                    </div>
                    <div className="text-lg font-bold auto-orange">
                      = {currentRPM.toLocaleString()} RPM
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Educational Panel - Quick Lesson and Pro Tips */}
        <div className="mt-12">
          <EducationalPanel />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-auto-navy text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Master Manual Transmission</h3>
            <p className="text-gray-300 text-sm mb-4">Learn stick shift driving with interactive simulations and expert guidance</p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="text-gray-300">Interactive Manual Transmission Simulator</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
