import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "What is a manual transmission?",
      answer: "A manual transmission is a type of transmission that requires the driver to manually select and engage gears using a clutch pedal and gear shifter. It allows direct control over the gear ratios used to transfer power from the engine to the wheels."
    },
    {
      question: "How do gear ratios affect performance?",
      answer: "Gear ratios determine the relationship between engine speed and wheel speed. Lower gears (higher ratios) provide more torque multiplication for acceleration and climbing hills, while higher gears (lower ratios) allow for higher speeds with lower engine RPM, improving fuel efficiency."
    },
    {
      question: "What does the axle ratio represent?",
      answer: "The axle ratio (also called final drive ratio) is the gear reduction that occurs in the differential. It's the ratio between the drive shaft rotation and the wheel rotation. A higher axle ratio provides more torque but limits top speed."
    },
    {
      question: "How does tire diameter affect RPM calculations?",
      answer: "Larger tires cover more ground per revolution, which means the engine doesn't need to spin as fast to maintain the same vehicle speed. Conversely, smaller tires require higher engine RPM to achieve the same speed."
    },
    {
      question: "Why is understanding RPM important?",
      answer: "Understanding RPM helps you choose the right gear for different driving conditions. It affects fuel economy, engine wear, performance, and driving comfort. Keeping the engine in its optimal RPM range ensures efficient operation."
    },
    {
      question: "Can I use this simulator for real-world applications?",
      answer: "Yes! The calculations used in this simulator are based on real automotive engineering principles. You can input your actual vehicle's specifications to understand how your transmission behaves in different scenarios."
    },
    {
      question: "What's the difference between close-ratio and wide-ratio transmissions?",
      answer: "Close-ratio transmissions have smaller gaps between gear ratios, providing smoother acceleration and keeping the engine in its power band. Wide-ratio transmissions have larger gaps, offering better fuel economy and a wider range of speeds."
    },
    {
      question: "How do I interpret the RPM gauge?",
      answer: "The RPM gauge shows your calculated engine speed. Green typically indicates efficient cruising RPM, yellow suggests moderate load, and red indicates high RPM that should be avoided for extended periods to prevent engine damage."
    }
  ];

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
              <HelpCircle className="text-2xl auto-orange" />
              <h1 className="text-xl font-bold auto-navy">FAQ</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HelpCircle className="w-6 h-6 text-auto-orange" />
                <span>Frequently Asked Questions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{item.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openItems.includes(index) && (
                      <div className="px-4 pb-3 text-gray-700 border-t border-gray-200">
                        <p className="pt-3">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Still Have Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you couldn't find the answer you're looking for, feel free to reach out to us.
              </p>
              <Link href="/contact" className="inline-flex items-center px-4 py-2 bg-auto-orange text-white rounded-lg hover:bg-opacity-90 transition-colors">
                Contact Us
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}