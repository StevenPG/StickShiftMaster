import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Construction, Lightbulb, CheckCircle, AlertTriangle, Gauge } from "lucide-react";

export default function EducationalPanel() {
  
  const loadScenario = (scenario: string) => {
    // This would update the main component state with predefined values
    console.log(`Loading ${scenario} scenario`);
  };

  return (
    <div className="space-y-6">
      {/* Learning Module */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <GraduationCap className="auto-blue text-xl mr-3" />
            <h2 className="text-lg font-semibold">Quick Lesson</h2>
          </div>
          <div className="space-y-4 text-sm">
            <div className="p-3 auto-grey rounded-lg">
              <h3 className="font-semibold mb-2">Understanding RPM</h3>
              <p className="text-gray-700">RPM (Revolutions Per Minute) measures how fast your engine crankshaft spins. Higher gears reduce RPM at the same speed for better fuel economy.</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Gear Selection Tips</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• 1st gear: Starting and very slow speeds</li>
                <li>• 2nd-3rd: City driving (15-35 mph)</li>
                <li>• 4th-5th: Highway speeds (35-65 mph)</li>
                <li>• 6th+: High-speed cruising for efficiency</li>
              </ul>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold mb-2">RPM Zones</h3>
              <ul className="text-gray-700 space-y-1">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-auto-green rounded-full mr-2"></span>
                  Green: 1,000-3,000 RPM (Optimal)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-auto-yellow rounded-full mr-2"></span>
                  Yellow: 3,000-5,000 RPM (Caution)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-auto-orange rounded-full mr-2"></span>
                  Red: 5,000+ RPM (Avoid)
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practice Scenarios */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Construction className="auto-orange text-xl mr-3" />
            <h2 className="text-lg font-semibold">Practice Scenarios</h2>
          </div>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full p-3 text-left bg-gray-50 hover:auto-grey border-none justify-start h-auto"
              onClick={() => loadScenario('city')}
            >
              <div className="flex items-center justify-between w-full">
                <div>
                  <h3 className="font-medium">City Driving</h3>
                  <p className="text-xs text-gray-600">25 mph in residential area</p>
                </div>
                <div className="auto-orange">→</div>
              </div>
            </Button>
            
            <Button
              variant="outline"
              className="w-full p-3 text-left bg-gray-50 hover:auto-grey border-none justify-start h-auto"
              onClick={() => loadScenario('highway')}
            >
              <div className="flex items-center justify-between w-full">
                <div>
                  <h3 className="font-medium">Highway Cruising</h3>
                  <p className="text-xs text-gray-600">65 mph on interstate</p>
                </div>
                <div className="auto-orange">→</div>
              </div>
            </Button>
            
            <Button
              variant="outline"
              className="w-full p-3 text-left bg-gray-50 hover:auto-grey border-none justify-start h-auto"
              onClick={() => loadScenario('mountain')}
            >
              <div className="flex items-center justify-between w-full">
                <div>
                  <h3 className="font-medium">Mountain Climbing</h3>
                  <p className="text-xs text-gray-600">35 mph uphill grade</p>
                </div>
                <div className="auto-orange">→</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Performance Tips */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Lightbulb className="auto-yellow text-xl mr-3" />
            <h2 className="text-lg font-semibold">Pro Tips</h2>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-3 p-2 bg-green-50 rounded">
              <CheckCircle className="auto-green mt-0.5 flex-shrink-0" size={16} />
              <div>
                <p className="font-medium">Smooth Shifting</p>
                <p className="text-gray-600">Shift when RPM reaches 2,000-3,000 for most efficient driving.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-2 bg-yellow-50 rounded">
              <AlertTriangle className="auto-yellow mt-0.5 flex-shrink-0" size={16} />
              <div>
                <p className="font-medium">Engine Lugging</p>
                <p className="text-gray-600">Avoid RPM below 1,500 under load - downshift instead.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-2 bg-orange-50 rounded">
              <Gauge className="auto-orange mt-0.5 flex-shrink-0" size={16} />
              <div>
                <p className="font-medium">Rev Matching</p>
                <p className="text-gray-600">Blip throttle during downshifts for smoother transitions.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
