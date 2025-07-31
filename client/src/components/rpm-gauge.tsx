import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RPMGaugeProps {
  currentRPM: number;
  selectedGear: number;
  setSelectedGear: (gear: number) => void;
}

export default function RPMGauge({ currentRPM, selectedGear, setSelectedGear }: RPMGaugeProps) {
  
  // Calculate needle rotation based on RPM (0-8000 RPM range)
  const getNeedleRotation = (rpm: number) => {
    const maxRPM = 8000;
    const startAngle = -140; // Start at bottom-left
    const endAngle = 140;    // End at bottom-right
    const totalAngle = endAngle - startAngle; // 280 degrees total
    const clampedRPM = Math.min(Math.max(rpm, 0), maxRPM);
    const angle = (clampedRPM / maxRPM) * totalAngle + startAngle;
    return angle;
  };

  const needleAngle = getNeedleRotation(currentRPM);

  // Determine RPM zone color
  const getRPMZoneColor = (rpm: number) => {
    if (rpm < 3000) return 'text-green-400';
    if (rpm < 5500) return 'text-yellow-400';
    if (rpm < 7000) return 'text-orange-400';
    return 'text-red-400';
  };

  const rpmColor = getRPMZoneColor(currentRPM);

  // Create arc path for colored zones
  const createArcPath = (startAngle: number, endAngle: number, radius: number) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const startX = 200 + radius * Math.cos(startRad);
    const startY = 200 + radius * Math.sin(startRad);
    const endX = 200 + radius * Math.cos(endRad);
    const endY = 200 + radius * Math.sin(endRad);

    return `M 200 200 L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
  };

  return (
    <Card className="flex flex-col min-h-[500px]">
      <CardContent className="p-6 flex flex-col items-center justify-center flex-1">
        <h2 className="text-2xl font-bold text-slate-800 text-center">RPM Simulation</h2>

        {/* RPM Gauge SVG */}
        <div className="relative w-80 h-80">
          <svg width="320" height="320" viewBox="0 0 400 400" className="absolute inset-0">

            {/* Inner gauge ring */}
            <circle
              cx="200"
              cy="200"
              r="160"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
            />
            
            {/* Green Zone (0-3000 RPM) */}
            <path
              d={createArcPath(-230, -89, 160)}
              fill="#22c55e"
              opacity="0.3"
            />
            
            {/* Yellow Zone (4000-5500 RPM) */}
            <path
              d={createArcPath(-89, -36, 160)}
              fill="#eab308"
              opacity="0.3"
            />
            
            {/* Red Zone (5500+ RPM) */}
            <path
              d={createArcPath(-36, 53, 160)}
              fill="#ef4444"
              opacity="0.4"
            />

            {/* Major tick marks and numbers */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
              const angle = (value / 8) * 270 - 220; // 280 degrees total range, start at -140
              const radian = (angle * Math.PI) / 171.5; // Convert to radians
              const x1 = 200 + Math.cos(radian) * 160;
              const y1 = 200 + Math.sin(radian) * 160;
              const x2 = 200 + Math.cos(radian) * 140;
              const y2 = 200 + Math.sin(radian) * 140;
              const labelX = 200 + Math.cos(radian) * 125;
              const labelY = 200 + Math.sin(radian) * 125;

              return (
                <g key={value}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#1f2937"
                    strokeWidth="3"
                  />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-lg font-bold fill-slate-800"
                  >
                    {value}
                  </text>
                </g>
              );
            })}

            {/* Gauge Needle */}
            <g transform={`rotate(${needleAngle} 202 202)`}>
              {/* Needle shadow */}
              <line
                x1="200"
                y1="200"
                x2="200"
                y2="50"
                stroke="#00000040"
                strokeWidth="6"
                strokeLinecap="round"
                transform="translate(2, 2)"
              />
              {/* Main needle */}
              <line
                x1="200"
                y1="200"
                x2="200"
                y2="50"
                stroke="#dc2626"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Needle tip */}
              <circle
                cx="200"
                cy="50"
                r="3"
                fill="#dc2626"
              />
            </g>

            {/* Center hub */}
            <circle
              cx="200"
              cy="200"
              r="15"
              fill="#1f2937"
              stroke="#374151"
              strokeWidth="2"
            />

            {/* Center dot */}
            <circle
              cx="200"
              cy="200"
              r="5"
              fill="#6b7280"
            />
          </svg>
          
          {/* Digital RPM Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/90 text-white rounded-lg px-4 py-2 mt-24 shadow-lg border border-gray-600">
              <div className="text-center">
                <div className={`text-2xl font-mono font-bold ${rpmColor}`}>
                  {Math.round(currentRPM).toLocaleString()}
                </div>
                <div className="text-xs text-gray-300 font-mono">RPM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gear Selector */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((gear) => (
            <Button
              key={gear}
              variant={selectedGear === gear ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedGear(gear)}
              className={`
                ${selectedGear === gear 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "hover:bg-blue-50"
                }
                min-w-[40px] h-10 font-semibold
              `}
            >
              {gear}
            </Button>
          ))}
        </div>
        
        {/* RPM Zone Legend */}
        <div className="flex space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-400 opacity-60 rounded"></div>
            <span>0-4k</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-yellow-400 opacity-60 rounded"></div>
            <span>4-5.5k</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 opacity-60 rounded"></div>
            <span>5.5k+</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
