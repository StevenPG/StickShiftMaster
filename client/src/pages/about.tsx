import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, ArrowLeft, Car, Cog, Calculator } from "lucide-react";
import { Link } from "wouter";

export default function About() {
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
              <Info className="text-2xl auto-orange" />
              <h1 className="text-xl font-bold auto-navy">About</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Car className="w-6 h-6 text-auto-orange" />
                <span>About StickShift Master</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  StickShift Master is designed to help automotive enthusiasts and students understand 
                  the intricate workings of manual transmissions. Through interactive simulations and 
                  educational content, we make complex mechanical concepts accessible and engaging.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">What You'll Learn</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Cog className="w-6 h-6 text-auto-orange mt-1" />
                    <div>
                      <h4 className="font-semibold">Gear Ratios</h4>
                      <p className="text-gray-600 text-sm">Understand how different gear ratios affect performance and efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calculator className="w-6 h-6 text-auto-orange mt-1" />
                    <div>
                      <h4 className="font-semibold">RPM Calculations</h4>
                      <p className="text-gray-600 text-sm">Learn the mathematical relationships between speed, gears, and engine RPM.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Interactive RPM gauge with real-time calculations</li>
                  <li>Customizable gear ratios for different transmission types</li>
                  <li>Adjustable vehicle parameters (speed, axle ratio, tire size)</li>
                  <li>Educational content explaining transmission mechanics</li>
                  <li>Visual feedback to understand gear selection impact</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">Perfect For</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Students</h4>
                    <p className="text-gray-600 text-sm">Automotive engineering and mechanics students</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Enthusiasts</h4>
                    <p className="text-gray-600 text-sm">Car enthusiasts wanting to understand their vehicles better</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Educators</h4>
                    <p className="text-gray-600 text-sm">Teachers looking for interactive learning tools</p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}