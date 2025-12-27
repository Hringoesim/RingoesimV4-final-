import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Globe, Check, Star, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WaitlistDialog } from "@/components/WaitlistDialog";

import SEO from "@/components/SEO";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { toast } = useToast();

  const handlePlanClick = (planName: string) => {
    const subject = `Interest in ${planName} Subscription`;
    const body = `Hi Ringo team,\n\nI'm interested in learning more about the ${planName} subscription plan.\n\nPlease send me more details.\n\nBest regards`;
    window.location.href = `mailto:info@ringoesim.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Ringo - One Number. One Plan. Everywhere."
        description="Voice-enabled travel eSIM for digital nomads. Make calls, receive SMS, stay connected in 180+ countries. Keep your existing number."
        canonical="/"
      />
      <Navigation currentPage="home" onWaitlistOpen={() => setIsWaitlistOpen(true)} />
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />

      <main className="flex-1">
        {/* Simplified Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
              {/* Left Column - Content */}
              <div className="text-white space-y-8">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  🚀 Early Access Available
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    One Number. One Plan. Everywhere.
                  </h1>

                  <p className="text-xl text-orange-100 max-w-lg leading-relaxed">
                    Ringo adds a global connectivity layer to your existing phone number.
                    No new SIM cards, no complicated setup - just seamless connectivity wherever you travel.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-6 text-lg"
                    data-waitlist-trigger
                  >
                    <Link to="?join-waitlist=true">Join Waitlist</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Visual */}
              <div className="relative">
                <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Your Number</h3>
                        <p className="text-orange-100 text-sm">Keep it everywhere</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Global Coverage</h3>
                        <p className="text-orange-100 text-sm">180+ countries</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">No Surprises</h3>
                        <p className="text-orange-100 text-sm">Transparent pricing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600">Simple, transparent pricing for global connectivity</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Day Pass */}
              <Card className="bg-white border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 cursor-pointer h-full flex flex-col" onClick={() => handlePlanClick('Day Pass')}>
                <CardContent className="p-6 text-center flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Day Pass</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">€3.50</span>
                      <span className="text-gray-600">/day</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited data
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        25 min voice calls
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        20 SMS messages
                      </li>
                    </ul>
                  </div>
                  <Button className="btn-primary w-full text-sm mt-auto">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Week Explorer */}
              <Card className="bg-white border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 cursor-pointer h-full flex flex-col" onClick={() => handlePlanClick('Week Explorer')}>
                <CardContent className="p-6 text-center flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Week Explorer</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">€24.90</span>
                      <span className="text-gray-600">/week</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited data
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        120 min voice calls
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        50 SMS messages
                      </li>
                    </ul>
                  </div>
                  <Button className="btn-primary w-full text-sm mt-auto">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Nomad */}
              <Card className="bg-white border-2 border-orange-500 relative scale-105 shadow-xl cursor-pointer h-full flex flex-col" onClick={() => handlePlanClick('Nomad')}>
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
                <CardContent className="p-6 text-center flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Nomad</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">€39.90</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited data
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited calls
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited SMS
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Number portability
                      </li>
                    </ul>
                  </div>
                  <Button className="btn-primary w-full text-sm mt-auto">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Business Pro */}
              <Card className="bg-white border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 cursor-pointer h-full flex flex-col" onClick={() => handlePlanClick('Business Pro')}>
                <CardContent className="p-6 text-center flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Pro</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">€69.90</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited data
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited voice calls
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited SMS
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Number portability
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        24/7 priority support
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Connect to your CRM
                      </li>
                    </ul>
                  </div>
                  <Button className="btn-primary w-full text-sm mt-auto">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;