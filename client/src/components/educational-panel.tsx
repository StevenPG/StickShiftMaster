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
