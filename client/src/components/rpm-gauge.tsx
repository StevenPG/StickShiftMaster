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
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">RPM x 1000</h2>

        {/* RPM Gauge SVG */}
        <div className="relative w-80 h-80 mb-6">
          <svg width="400" height="400" viewBox="0 0 400 400" className="absolute inset-0">
            {/* Outer gauge ring */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="#1f2937"
              strokeWidth="4"
            />

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
              d={createArcPath(-230, -42, 170)}
              fill="#22c55e"
              opacity="0.3"
            />
            
            {/* Yellow Zone (3000-5500 RPM) */}
            <path
              d={createArcPath(-42, 42, 170)}
              fill="#eab308"
              opacity="0.3"
            />
            
            {/* Orange Zone (5500-7000 RPM) */}
            <path
              d={createArcPath(42, 98, 170)}
              fill="#f97316"
              opacity="0.3"
            />
            
            {/* Red Zone (7000+ RPM) */}
            <path
              d={createArcPath(98, 140, 170)}
              fill="#ef4444"
              opacity="0.4"
            />

            {/* Major tick marks and numbers */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
              const angle = (value / 8) * 280 - 140; // 280 degrees total range
              const radian = (angle * Math.PI) / 180;
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
            
            {/* Minor tick marks (half increments) */}
            {[0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5].map((value) => {
              const angle = (value / 8) * 280 - 140;
              const radian = (angle * Math.PI) / 180;
              const x1 = 200 + Math.cos(radian) * 160;
              const y1 = 200 + Math.sin(radian) * 160;
              const x2 = 200 + Math.cos(radian) * 150;
              const y2 = 200 + Math.sin(radian) * 150;

              return (
                <line
                  key={value}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#374151"
                  strokeWidth="2"
                />
              );
            })}

            {/* Gauge Needle */}
            <g transform={`rotate(${needleAngle} 200 200)`}>
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
            <div className="bg-black/90 text-white rounded-lg px-6 py-3 mt-24 shadow-lg border border-gray-600">
              <div className="text-center">
                <div className={`text-3xl font-mono font-bold ${rpmColor}`}>
                  {Math.round(currentRPM).toLocaleString()}
                </div>
                <div className="text-xs text-gray-300 font-mono">RPM</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Current Status */}
        <div className="text-center mb-4">
          <div className="text-sm text-gray-600">Current Gear</div>
          <div className="text-3xl font-bold text-slate-800">{selectedGear}</div>
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
            <span>0-3k</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-yellow-400 opacity-60 rounded"></div>
            <span>3-5.5k</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-orange-400 opacity-60 rounded"></div>
            <span>5.5-7k</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-400 opacity-60 rounded"></div>
            <span>7k+</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
