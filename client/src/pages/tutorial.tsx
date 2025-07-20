import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Tutorial() {
  return (
    <div className="min-h-screen auto-grey">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-l-auto-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2 text-auto-navy hover:text-auto-orange transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Simulator</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <GraduationCap className="text-2xl auto-orange" />
              <h1 className="text-xl font-bold auto-navy">Tutorial</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="w-6 h-6 text-auto-orange" />
                <span>Manual Transmission Tutorial</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">Getting Started</h3>
                <p className="text-gray-700 mb-4">
                  Welcome to the Manual Transmission Simulator! This interactive tool helps you understand 
                  how gear ratios, vehicle speed, and engine RPM work together in a manual transmission.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Understanding the Controls</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Vehicle Speed:</strong> Adjust the current speed of your vehicle</li>
                  <li><strong>Gear Selection:</strong> Choose which gear you're currently in</li>
                  <li><strong>Axle Ratio:</strong> The final drive ratio in your differential</li>
                  <li><strong>Tire Diameter:</strong> The overall diameter of your tires</li>
                  <li><strong>Gear Ratios:</strong> Individual ratios for each gear in the transmission</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">How It Works</h3>
                <p className="text-gray-700 mb-4">
                  The simulator calculates engine RPM using the formula:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  RPM = (Axle Ratio × Speed × Gear Ratio × 336.13) ÷ Tire Diameter
                </div>
                <p className="text-gray-700 mt-4">
                  This helps you understand how different gears affect engine speed at various vehicle speeds.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Tips for Learning</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Start with lower gears and observe how RPM changes</li>
                  <li>Notice how higher gears reduce engine RPM at the same speed</li>
                  <li>Experiment with different axle ratios to see their effect</li>
                  <li>Try different tire sizes and observe the impact on RPM</li>
                </ul>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}