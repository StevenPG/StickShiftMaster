import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Car, Settings } from "lucide-react";
import vehiclesData from "@/data/vehicles.json";

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

interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: string;
  transmission: string;
  gearRatios: GearRatios;
  axleRatio: number;
  tireDiameter: number;
  tireSize: string;
}

interface CommonVehiclesProps {
  onVehicleSelect: (vehicle: Vehicle) => void;
}

export default function CommonVehicles({ onVehicleSelect }: CommonVehiclesProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleVehicleSelect = (vehicle: Vehicle) => {
    onVehicleSelect(vehicle);
    setIsDialogOpen(false);
  };

  return (
    <Card className="border-l-4 border-l-auto-green">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Car className="auto-green text-xl mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Common Vehicles</h2>
              <p className="text-sm text-gray-600">Load preset vehicle configurations</p>
            </div>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="border-auto-green text-auto-green hover:bg-auto-green hover:text-white"
              >
                <Settings className="w-4 h-4 mr-2" />
                Select Vehicle
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="flex items-center">
                  <Car className="auto-green text-xl mr-3" />
                  Select a Common Vehicle
                </DialogTitle>
              </DialogHeader>
              
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-3">
                  {vehiclesData.vehicles.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => handleVehicleSelect(vehicle)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">
                            {vehicle.make} {vehicle.model}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {vehicle.year} • {vehicle.transmission}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Gear Ratios:</span>
                              <div className="text-xs text-gray-600 mt-1">
                                1st: {vehicle.gearRatios.first} • 2nd: {vehicle.gearRatios.second} • 3rd: {vehicle.gearRatios.third}
                                <br />
                                4th: {vehicle.gearRatios.fourth} • 5th: {vehicle.gearRatios.fifth} • 6th: {vehicle.gearRatios.sixth}
                                {vehicle.gearRatios.seventh > 0 && (
                                  <>
                                    <br />
                                    7th: {vehicle.gearRatios.seventh}
                                  </>
                                )}
                              </div>
                            </div>
                            <div>
                              <div className="mb-2">
                                <span className="font-medium">Axle Ratio:</span>
                                <span className="ml-2 text-auto-orange">{vehicle.axleRatio}</span>
                              </div>
                              <div className="mb-2">
                                <span className="font-medium">Tire:</span>
                                <span className="ml-2 text-auto-blue">{vehicle.tireSize}</span>
                              </div>
                              <div>
                                <span className="font-medium">Diameter:</span>
                                <span className="ml-2 text-auto-blue">{vehicle.tireDiameter}"</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          size="sm" 
                          className="ml-4 bg-auto-green hover:bg-auto-green/90"
                        >
                          Select
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}