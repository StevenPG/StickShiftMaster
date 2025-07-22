import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RPMGaugeProps {
  currentRPM: number;
  selectedGear: number;
  setSelectedGear: (gear: number) => void;
}

export default function RPMGauge({ currentRPM, selectedGear, setSelectedGear }: RPMGaugeProps) {
  
  // Calculate needle rotation based on RPM (0-7000 RPM range)
  const getNeedleRotation = (rpm: number) => {
    const maxRPM = 7000;
    const minAngle = -135; // Start angle (pointing left)
    const maxAngle = 135;  // End angle (pointing right)
    const clampedRPM = Math.min(Math.max(rpm, 0), maxRPM);
    const angle = (clampedRPM / maxRPM) * (maxAngle - minAngle) + minAngle;
    return angle;
  };

  const needleAngle = getNeedleRotation(currentRPM);

  // Determine RPM zone color
  const getRPMZoneColor = (rpm: number) => {
    if (rpm < 3000) return 'text-green-500';
    if (rpm < 5000) return 'text-yellow-500';
    return 'text-red-500';
  };

  const rpmColor = getRPMZoneColor(currentRPM);

  return (
    <Card className="flex flex-col min-h-[400px]">
      <CardContent className="p-6 flex flex-col items-center justify-center flex-1">
        <h2 className="text-xl font-bold auto-navy mb-4 text-center">Engine RPM Gauge</h2>
        
        {/* RPM Gauge SVG */}
        <div className="relative w-64 h-64 mb-6">
          <svg width="256" height="256" viewBox="0 0 320 320" className="absolute inset-0">
            {/* Outer Ring */}
            <circle
              cx="160"
              cy="160"
              r="150"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            
            {/* Green Zone (0-3000 RPM) - 135 degrees */}
            <path
              d="M 160 160 L 160 10 A 150 150 0 0 1 267.28 52.72 Z"
              fill="hsl(145, 63%, 42%)"
              opacity="0.3"
            />
            
            {/* Yellow Zone (3000-5000 RPM) - 60 degrees */}
            <path
              d="M 160 160 L 267.28 52.72 A 150 150 0 0 1 309.28 202.72 Z"
              fill="hsl(48, 100%, 63%)"
              opacity="0.3"
            />
            
            {/* Red Zone (5000+ RPM) - 45 degrees */}
            <path
              d="M 160 160 L 309.28 202.72 A 150 150 0 0 1 267.28 267.28 Z"
              fill="hsl(14, 100%, 60%)"
              opacity="0.3"
            />
            
            {/* RPM Markers */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => {
              const angle = (value / 7) * 270 - 135; // 270 degrees total range
              const radian = (angle * Math.PI) / 180;
              const x1 = 160 + Math.cos(radian) * 130;
              const y1 = 160 + Math.sin(radian) * 130;
              const x2 = 160 + Math.cos(radian) * 120;
              const y2 = 160 + Math.sin(radian) * 120;
              const labelX = 160 + Math.cos(radian) * 105;
              const labelY = 160 + Math.sin(radian) * 105;
              
              return (
                <g key={value}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#374151"
                    strokeWidth="2"
                  />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-semibold"
                    fill="#374151"
                  >
                    {value}
                  </text>
                </g>
              );
            })}
            
            {/* Gauge Needle */}
            <line
              x1="160"
              y1="160"
              x2="160"
              y2="40"
              stroke="hsl(220, 23%, 13%)"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${needleAngle} 160 160)`}
              className="gauge-needle"
            />
            
            {/* Center Circle */}
            <circle
              cx="160"
              cy="160"
              r="8"
              fill="hsl(220, 23%, 13%)"
            />
          </svg>
          
          {/* Central RPM Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-900 text-white rounded-lg px-4 py-2 mt-16 shadow-lg">
              <div className="text-center">
                <div className={`text-2xl font-bold ${rpmColor}`}>
                  {currentRPM.toLocaleString()}
                </div>
                <div className="text-xs text-gray-300">RPM</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gear Selector */}
        <div className="flex space-x-2 mb-6 flex-wrap justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((gear) => (
            <Button
              key={gear}
              variant={selectedGear === gear ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedGear(gear)}
              className={`
                ${selectedGear === gear 
                  ? 'bg-auto-orange text-white shadow-lg transform scale-105' 
                  : 'hover:bg-auto-orange hover:text-white'
                } 
                transition-all
              `}
            >
              {gear}
            </Button>
          ))}
        </div>
        
        {/* Status Indicator */}
        <div className="flex items-center space-x-4 text-sm flex-wrap justify-center gap-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-auto-green rounded-full mr-2"></div>
            <span>Optimal Range</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-auto-yellow rounded-full mr-2"></div>
            <span>Caution Zone</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-auto-orange rounded-full mr-2"></div>
            <span>Redline</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
