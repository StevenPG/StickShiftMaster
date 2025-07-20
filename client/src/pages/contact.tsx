import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowLeft, MessageSquare, Github, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
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
              <Mail className="text-2xl auto-orange" />
              <h1 className="text-xl font-bold auto-navy">Contact</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-auto-orange" />
                <span>Get In Touch</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <p className="text-gray-700 mb-6">
                  We'd love to hear from you! Whether you have questions about manual transmissions, 
                  feedback about the simulator, or suggestions for improvements, don't hesitate to reach out.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-4">Ways to Contact Us</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Mail className="w-6 h-6 text-auto-orange mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Email Support</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        For technical questions, bug reports, or general inquiries
                      </p>
                      <a 
                        href="mailto:support@stickshiftmaster.com" 
                        className="text-auto-orange hover:underline text-sm"
                      >
                        support@stickshiftmaster.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Github className="w-6 h-6 text-auto-orange mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">GitHub Issues</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Report bugs or request features on our GitHub repository
                      </p>
                      <a 
                        href="https://github.com/stickshiftmaster/issues" 
                        className="text-auto-orange hover:underline text-sm inline-flex items-center space-x-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Open an Issue</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-4">What We'd Love to Hear About</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-auto-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span>Bug reports and technical issues</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-auto-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span>Feature requests and improvements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-auto-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span>Educational content suggestions</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-auto-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span>User experience feedback</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-auto-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span>Questions about manual transmissions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-auto-orange rounded-full mt-2 flex-shrink-0"></span>
                      <span>Partnership opportunities</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-4">Response Time</h3>
                <p className="text-gray-700">
                  We typically respond to emails within 24-48 hours during business days. 
                  For urgent technical issues, please include "URGENT" in your subject line.
                </p>
              </section>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Before You Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Please check our FAQ section first - you might find the answer you're looking for there!
              </p>
              <Link href="/faq" className="inline-flex items-center px-4 py-2 bg-auto-orange text-white rounded-lg hover:bg-opacity-90 transition-colors">
                View FAQ
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}