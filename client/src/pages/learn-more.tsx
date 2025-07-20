import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowLeft, Cog, Zap, TrendingUp, Settings } from "lucide-react";
import { Link } from "wouter";

export default function LearnMore() {
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
              <BookOpen className="text-2xl auto-orange" />
              <h1 className="text-xl font-bold auto-navy">Learn More</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-auto-orange" />
                <span>Advanced Manual Transmission Concepts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Dive deeper into the world of manual transmissions with these advanced concepts and real-world applications.
              </p>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cog className="w-5 h-5 text-auto-orange" />
                  <span>Transmission Types</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">4-Speed Transmissions</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Traditional setup found in older vehicles. Simple, reliable, but limited gear range.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5-Speed Transmissions</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Most common modern setup. Fifth gear is typically an overdrive for highway cruising.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">6-Speed and Beyond</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Performance and efficiency focused. More gears allow keeping the engine in optimal RPM ranges.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-auto-orange" />
                  <span>Performance Applications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Racing Transmissions</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Close-ratio gears keep engines in the power band. Dog-leg patterns optimize shift sequences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sequential Gearboxes</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Used in motorsports. Gears are selected in sequence (1-2-3-4) rather than H-pattern.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dual-Clutch Systems</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Combines manual efficiency with automatic convenience. Two clutches handle odd/even gears.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-auto-orange" />
                  <span>Optimization Strategies</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Fuel Economy</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Use higher gears when possible. Keep RPM low during cruising. Anticipate traffic to minimize shifting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Performance Driving</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Keep engine in power band (typically 3000-6000 RPM). Use engine braking. Match RPM when downshifting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Longevity</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Avoid riding the clutch. Don't rest hand on shifter. Use proper shifting technique to reduce wear.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-auto-orange" />
                  <span>Technical Deep Dive</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Synchronizers</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Match gear speeds during shifting. Bronze or carbon construction. Enable smooth gear engagement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Helical vs Straight Cut</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Helical gears are quieter but create axial loads. Straight cut gears are stronger but noisier.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Limited Slip Differentials</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Work with transmissions to optimize power delivery. Mechanical, viscous, or electronic types available.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Real-World Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-3">Daily Driving</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Focus on smooth operation, fuel efficiency, and component longevity.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Gentle acceleration</li>
                    <li>• Early upshifts</li>
                    <li>• Engine braking in traffic</li>
                  </ul>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-3">Track Driving</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Maximize performance through optimal gear selection and timing.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Rev matching</li>
                    <li>• Heel-toe downshifting</li>
                    <li>• Power band management</li>
                  </ul>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-3">Off-Road</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Low-range gearing and precise control for challenging terrain.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Low-range transfer case</li>
                    <li>• Crawl ratios</li>
                    <li>• Differential locks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ready to Practice?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Now that you understand the theory, put your knowledge to practice with our interactive simulator!
              </p>
              <div className="flex space-x-4">
                <Link href="/" className="inline-flex items-center px-4 py-2 bg-auto-orange text-white rounded-lg hover:bg-opacity-90 transition-colors">
                  Try the Simulator
                </Link>
                <Link href="/tutorial" className="inline-flex items-center px-4 py-2 border border-auto-orange text-auto-orange rounded-lg hover:bg-auto-orange hover:text-white transition-colors">
                  View Tutorial
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}