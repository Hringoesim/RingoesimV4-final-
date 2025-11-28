import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Globe, Shield, Zap, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const HowItWorks = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage="about" onWaitlistOpen={() => setIsWaitlistOpen(true)} />
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Ringo</h1>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Ringo</h3>
              <p className="text-sm font-medium text-gray-300">One Number. One Plan. Everywhere.</p>
              <p className="text-gray-400 text-sm">
                Stay connected globally using your existing phone number.
              </p>
              <div className="flex items-center space-x-2 pt-4">
                <a
                  href="https://www.linkedin.com/company/ringoesim/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-105"
                  aria-label="Visit RingoESIM on LinkedIn"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <span className="text-sm text-gray-400">Follow us on LinkedIn</span>
              </div>
            </div>

            {/* Company Section */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <div className="space-y-2">
                <Link to="/how-it-works" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
                <Link to="/#pricing" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link to="/device-compatibility" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Device Compatibility
                </Link>
                <Link to="/contact" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Support Section */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Support</h4>
              <div className="space-y-2">
                <a href="mailto:info@ringoesim.com" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Email Support
                </a>
                <Link to="/device-compatibility" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Check Compatibility
                </Link>
              </div>
            </div>

            {/* Legal Section */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-xs text-gray-500">© 2025 Ringo. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a href="mailto:info@ringoesim.com" className="text-xs text-gray-500 hover:text-orange-500 transition-colors">
                  info@ringoesim.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;