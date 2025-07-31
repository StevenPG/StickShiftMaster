import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {Cog, Car, HelpCircle} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GearRatios {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
  sixth: number;
  seventh: number;
  eighth: number;
  ninth: number;
  tenth: number;
}

interface InputPanelProps {
  gearRatios: GearRatios;
  setGearRatios: (ratios: GearRatios) => void;
  vehicleSpeed: number;
  setVehicleSpeed: (speed: number) => void;
  axleRatio: number;
  setAxleRatio: (ratio: number) => void;
  tireDiameter: number;
  setTireDiameter: (diameter: number) => void;
}

export default function InputPanel({
  gearRatios,
  setGearRatios,
  vehicleSpeed,
  setVehicleSpeed,
  axleRatio,
  setAxleRatio,
  tireDiameter,
  setTireDiameter
}: InputPanelProps) {
  
  const updateGearRatio = (gear: keyof GearRatios, value: number) => {
    setGearRatios({
      ...gearRatios,
      [gear]: value
    });
  };

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Transmission Gears Card */}
        <Card className="border-l-4 border-l-auto-orange">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Cog className="auto-orange text-xl mr-3" />
              <h2 className="text-lg font-semibold">Transmission Ratios</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium auto-navy mb-1">1st Gear</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={gearRatios.first}
                  onChange={(e) => updateGearRatio('first', parseFloat(e.target.value) || 0)}
                  className="focus:ring-2 focus:ring-auto-orange focus:border-transparent"
                />
              </div>
              <div>
                <Label className="text-sm font-medium auto-navy mb-1">2nd Gear</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={gearRatios.second}
                  onChange={(e) => updateGearRatio('second', parseFloat(e.target.value) || 0)}
                  className="focus:ring-2 focus:ring-auto-orange focus:border-transparent"
                />
              </div>
              <div>
                <Label className="text-sm font-medium auto-navy mb-1">3rd Gear</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={gearRatios.third}
                  onChange={(e) => updateGearRatio('third', parseFloat(e.target.value) || 0)}
                  className="focus:ring-2 focus:ring-auto-orange focus:border-transparent"
                />
              </div>
              <div>
                <Label className="text-sm font-medium auto-navy mb-1">4th Gear</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={gearRatios.fourth}
                  onChange={(e) => updateGearRatio('fourth', parseFloat(e.target.value) || 0)}
                  className="focus:ring-2 focus:ring-auto-orange focus:border-transparent"
                />
              </div>
              <div>
                <Label className="text-sm font-medium auto-navy mb-1">5th Gear</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={gearRatios.fifth}
                  onChange={(e) => updateGearRatio('fifth', parseFloat(e.target.value) || 0)}
                  className="focus:ring-2 focus:ring-auto-orange focus:border-transparent"
                />
              </div>
              <div>
                <Label className="text-sm font-medium auto-navy mb-1">6th Gear</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={gearRatios.sixth}
                  onChange={(e) => updateGearRatio('sixth', parseFloat(e.target.value) || 0)}
                  className="focus:ring-2 focus:ring-auto-orange focus:border-transparent"
                />
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-4 gap-2">
                  <div>
                    <Label className="text-xs font-medium auto-navy mb-1">7th</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={gearRatios.seventh}
                      onChange={(e) => updateGearRatio('seventh', parseFloat(e.target.value) || 0)}
                      className="text-sm focus:ring-1 focus:ring-auto-orange"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-medium auto-navy mb-1">8th</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={gearRatios.eighth}
                      onChange={(e) => updateGearRatio('eighth', parseFloat(e.target.value) || 0)}
                      className="text-sm focus:ring-1 focus:ring-auto-orange"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-medium auto-navy mb-1">9th</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={gearRatios.ninth}
                      onChange={(e) => updateGearRatio('ninth', parseFloat(e.target.value) || 0)}
                      className="text-sm focus:ring-1 focus:ring-auto-orange"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-medium auto-navy mb-1">10th</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={gearRatios.tenth}
                      onChange={(e) => updateGearRatio('tenth', parseFloat(e.target.value) || 0)}
                      className="text-sm focus:ring-1 focus:ring-auto-orange"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Parameters Card */}
        <Card className="border-l-4 border-l-auto-blue">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Car className="auto-blue text-xl mr-3" />
              <h2 className="text-lg font-semibold">Vehicle Parameters</h2>
            </div>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium auto-navy mb-1">Vehicle Speed (MPH)</Label>
                <div className="relative">
                  <Slider
                    value={[vehicleSpeed]}
                    onValueChange={(value) => setVehicleSpeed(value[0])}
                    max={120}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span className="font-semibold auto-orange">{vehicleSpeed} MPH</span>
                    <span>120</span>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium auto-navy mb-1">Axle Gear Ratio</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={axleRatio}
                  onChange={(e) => setAxleRatio(parseFloat(e.target.value) || 0)}
                  className="focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Common ratios: 3.08, 3.31, 3.73, 4.10</p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium auto-navy mb-1">Tire Diameter (inches)</Label>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <button className="inline-flex items-center justify-center">
                        <HelpCircle className="h-4 w-4 text-gray-500 hover:text-gray-700 cursor-help"/>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs">
                      <p>Calculate your tire size at: calculator.net/tire-size-calculator</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <Input
                  type="number"
                  step="0.1"
                  value={tireDiameter}
                  onChange={(e) => setTireDiameter(parseFloat(e.target.value) || 0)}
                  className="focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">P225/60R16 ≈ 26.7", P245/70R17 ≈ 29.5"</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </TooltipProvider>
  );
}
