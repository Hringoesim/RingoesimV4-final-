import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Globe, Shield, Zap, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WaitlistDialog } from "@/components/WaitlistDialog";

import SEO from "@/components/SEO";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="How Ringo Works - Keep Your Number Abroad | Global eSIM"
        description="Learn how Ringo ports your number to a global eSIM. No apps required, works with your native dialer. Simple setup in 60 seconds."
        canonical="/how-it-works"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "How It Works", item: "/how-it-works" }
        ]}
        faq={[
          {
            question: "How does the number porting work?",
            answer: "We use standard telecommunications protocols to transfer your number to our global network. It remains your number, but it's now accessible anywhere."
          },
          {
            question: "Do I need a special app to make calls?",
            answer: "No. Ringo works with your phone's native dialer. You make and receive calls just like you do at home."
          }
        ]}
      />
      <Navigation currentPage="about" onWaitlistOpen={() => setIsWaitlistOpen(true)} />
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">How Ringo Works</h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Revolutionizing global connectivity by letting you keep your existing phone number everywhere
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Ringo Works</h2>
              <p className="text-xl text-gray-600">Simple technology, powerful results</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">1. Port Your Number</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We port your existing phone number to our global network. Keep the number your bank,
                    family, and clients know.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">2. Global Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our eSIM technology connects you to premium networks in 180+ countries.
                    No physical SIM swapping required.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">3. Instant Activation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Scan a QR code, activate your eSIM in 60 seconds. Start making calls and
                    sending SMS immediately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Technology Behind Ringo</h2>
              <p className="text-xl text-gray-600">Built on proven, reliable technology</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Number Porting Technology</h3>
                  <p className="text-gray-600">
                    Advanced number porting allows us to transfer your existing phone number to our global network,
                    maintaining all your existing contacts and services.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">eSIM & VoIP Integration</h3>
                  <p className="text-gray-600">
                    Our eSIM technology combined with Voice over IP (VoIP) provides crystal-clear calling
                    and messaging over data networks worldwide.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Keep your existing phone number globally</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Native calling experience, not app-based</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Works with all existing contacts and services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>No additional apps or setup required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ringo by the Numbers</h2>
              <p className="text-xl text-gray-600">Trusted by travelers worldwide</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">180+</div>
                <div className="text-gray-600">Countries Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-gray-600">Network Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">180+</div>
                <div className="text-gray-600">Countries Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At Ringo, we believe that staying connected shouldn't mean changing your identity.
                Your phone number is more than just digits—it's how your bank reaches you, how your family
                finds you, and how your business stays connected. We're building the future of global
                connectivity where your number travels with you, seamlessly and affordably.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <Card className="text-center">
                  <CardHeader>
                    <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <CardTitle>Customer First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Every decision we make puts our customers' needs first.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <CardTitle>Transparency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">No hidden fees, no surprises. Clear pricing, always.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Pushing the boundaries of what's possible in global connectivity.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Ringo?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join the revolution in global connectivity. Keep your number, travel everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-6 text-lg"
                asChild
              >
                <Link to="/#pricing">View Plans</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                asChild
              >
                <Link to="/use-cases">See Comparisons</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;