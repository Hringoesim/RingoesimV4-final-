import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const Pricing = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Ringo Pricing - Transparent Global eSIM Plans"
        description="Simple, transparent pricing. Day passes from €3.50, monthly plans from €39.90. Unlimited data and voice calls. No hidden fees."
        canonical="/pricing"
      />

      <Navigation currentPage="pricing" onWaitlistOpen={() => setIsWaitlistOpen(true)} />
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />

      <main className="flex-1">
        <section className="py-8">
          <div className="container-max">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <Badge className="mb-4">💰 Pilot Program Pricing</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Simple, <span className="text-sunset">Transparent</span> Pricing
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that fits your travel needs. All pilot program members get special early-bird pricing and benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Freemium Plan */}
              <Card className="card-elegant relative">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-semibold">Freemium</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">€0</span>
                    <span className="text-muted-foreground text-lg">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Perfect for trying Ringo</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>0GB Data</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Inbound calls only</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Receive SMS</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Basic app features</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" size="lg" onClick={() => setIsWaitlistOpen(true)}>
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>

              {/* Week Explorer Plan */}
              <Card className="card-elegant relative ring-2 ring-primary scale-105">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-semibold">Week Explorer</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">€24.90</span>
                    <span className="text-muted-foreground text-lg">/7 days</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Ideal for short trips</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>10GB High-speed data</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>120 minutes calls</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Unlimited SMS</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Voicemail-to-Text</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Priority email support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Travel insurance discount</span>
                    </li>
                  </ul>
                  <Button className="btn-primary w-full" size="lg" onClick={() => setIsWaitlistOpen(true)}>
                    Choose Explorer
                  </Button>
                </CardContent>
              </Card>

              {/* Nomad Plan */}
              <Card className="card-elegant relative">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-semibold">Nomad</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">€39.90</span>
                    <span className="text-muted-foreground text-lg">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">For digital nomads</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>50GB High-speed data</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>300 minutes calls</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Unlimited SMS</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Voicemail-to-Text</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Call Recording</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>24/7 Chat support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>VPN included</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Priority network access</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" size="lg" onClick={() => setIsWaitlistOpen(true)}>
                    Choose Nomad
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center space-x-4 p-6 bg-blue-50 rounded-xl max-w-2xl">
                <div className="text-3xl">💡</div>
                <div className="text-left">
                  <p className="font-semibold text-blue-900 text-lg">Pilot Program Benefits</p>
                  <p className="text-blue-700">
                    Early pilot members receive 50% off first 3 months, extended trial periods, and grandfather pricing protection against future increases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start with our free plan and upgrade when you're ready to travel
              </p>

              <Button
                className="btn-sunset px-8 py-6 text-lg"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join Waitlist Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;