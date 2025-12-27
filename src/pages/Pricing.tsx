import { useState, useEffect } from "react";
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

  // Fire Google Ads page view conversion when pricing page loads
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17765913455/GmTECOe2wMgbEO-muZdC'
      });
    }
  }, []);

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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600">Simple, transparent pricing for global connectivity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Day Pass */}
              {/* Day Pass */}
              <Card className="card-elegant relative h-full flex flex-col">
                <CardHeader className="text-center pb-4 flex-none">
                  <CardTitle className="text-2xl font-semibold">Day Pass</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">€3.50</span>
                    <span className="text-muted-foreground text-lg">/day</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <ul className="space-y-4 flex-1">
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Unlimited data</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>25 min voice calls</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>20 SMS messages</span>
                    </li>
                  </ul>
                  <Button className="btn-sunset w-full mt-auto" size="lg" asChild data-waitlist-trigger>
                    <Link to="?join-waitlist=true">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Week Explorer Plan */}
              <Card className="card-elegant relative h-full flex flex-col">
                <CardHeader className="text-center pb-4 flex-none">
                  <CardTitle className="text-2xl font-semibold">Week Explorer</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">€24.90</span>
                    <span className="text-muted-foreground text-lg">/week</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <ul className="space-y-4 flex-1">
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Unlimited data</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>120 min voice calls</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>50 SMS messages</span>
                    </li>
                  </ul>
                  <Button className="btn-sunset w-full mt-auto" size="lg" asChild data-waitlist-trigger>
                    <Link to="?join-waitlist=true">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Nomad Plan */}
              <Card className="card-elegant relative ring-2 ring-primary scale-105 shadow-xl z-10 h-full flex flex-col">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
                <CardHeader className="text-center pb-4 flex-none">
                  <CardTitle className="text-2xl font-semibold">Nomad</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">€39.90</span>
                    <span className="text-muted-foreground text-lg">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <ul className="space-y-4 flex-1">
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Unlimited data</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Unlimited calls</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Unlimited SMS</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Number portability</span>
                    </li>
                  </ul>
                  <Button className="btn-sunset w-full mt-auto" size="lg" asChild data-waitlist-trigger>
                    <Link to="?join-waitlist=true">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Business Pro */}
              <Card className="card-elegant relative h-full flex flex-col">
                <CardHeader className="text-center pb-4 flex-none">
                  <CardTitle className="text-2xl font-semibold">Business Pro</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">€69.90</span>
                    <span className="text-muted-foreground text-lg">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <ul className="space-y-4 flex-1">
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Unlimited data</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Unlimited voice calls</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Unlimited SMS</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Number portability</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>24/7 priority support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Connect to your CRM</span>
                    </li>
                  </ul>
                  <Button className="btn-sunset w-full mt-auto" size="lg" asChild data-waitlist-trigger>
                    <Link to="?join-waitlist=true">Get Started</Link>
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
                    Early pilot members receive extended trial periods and grandfather pricing protection against future increases.
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
                asChild
                data-waitlist-trigger
              >
                <Link to="?join-waitlist=true">Join Waitlist Now</Link>
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