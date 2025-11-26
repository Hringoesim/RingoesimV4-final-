import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b">
        <div className="container-max">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-sunset">Ringo</span>
            </Link>
            
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                How It Works
              </Link>
              <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                Pricing
              </Link>
              <Link to="/faq" className="text-sm font-medium transition-colors hover:text-primary text-primary">
                FAQ
              </Link>
              <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                Contact
              </Link>
            </div>
            
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/">
                <Button className="btn-sunset">Join Waitlist</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

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
              <Badge className="mb-4">
                <HelpCircle className="h-3 w-3 mr-1" />
                Frequently Asked Questions
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Got <span className="text-sunset">Questions?</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find answers to the most common questions about Ringo eSIM service
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Do I need to change my phone number or carrier?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      No! That's the beauty of Ringo. You keep your existing phone number and carrier plan exactly as they are. 
                      Ringo works alongside your current setup, adding global connectivity without any changes to your existing service.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Which devices support Ringo eSIM?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-muted-foreground space-y-2">
                      <p>Ringo works with most modern smartphones that support eSIM technology:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>iPhone XS, XR, and all newer models</li>
                        <li>Google Pixel 3 and newer</li>
                        <li>Samsung Galaxy S20 and newer</li>
                        <li>Most recent Android devices with eSIM support</li>
                      </ul>
                      <p>Check our device compatibility page for a complete list.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How fast is the setup process?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The entire setup takes less than 5 minutes. Once you receive your QR code, simply scan it with your phone's camera, 
                      and the eSIM will activate automatically in about 60 seconds. No technical knowledge required!
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    What countries does Ringo cover?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Ringo provides coverage in over 150 countries worldwide, including all major travel destinations in Europe, 
                      Asia, Americas, and Oceania. We partner with premium local carriers to ensure you get the best possible connection wherever you go.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Can I use Ringo for business travel?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Absolutely! Ringo is perfect for business travelers. You can expense the service, keep your business number active for calls, 
                      and use Ringo's data for emails, video calls, and productivity apps. Our Nomad plan includes features like call recording and priority support.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    What happens if I run out of data?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      We'll notify you when you reach 80% and 95% of your data limit. If you exceed your limit, your data speed will be reduced, 
                      but you'll never be completely cut off. You can always upgrade your plan or purchase additional data through the app.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Is my data secure with Ringo?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, security is our top priority. All data is encrypted end-to-end, and we comply with international privacy standards including GDPR. 
                      We never store your personal communications and use enterprise-grade security protocols to protect your information.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Can I cancel anytime?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, you can cancel your Ringo subscription at any time with no cancellation fees. 
                      Your service will continue until the end of your current billing period, and you can reactivate whenever you need it again.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    How does billing work?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Monthly plans are billed on the same date each month that you signed up. Weekly plans are perfect for short trips and bill every 7 days. 
                      We accept all major credit cards and PayPal. No hidden fees - the price you see is exactly what you pay.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    What support is available?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-muted-foreground space-y-2">
                      <p>We offer multiple support channels:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>24/7 email support for all plans</li>
                        <li>Live chat support for Nomad plan subscribers</li>
                        <li>Comprehensive help center and tutorials</li>
                        <li>Video setup guides</li>
                        <li>Community forum</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Are prices subject to change?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-muted-foreground space-y-2">
                      <p className="font-semibold text-orange-600">Yes, prices are subject to change at all times.</p>
                      <p>
                        Ringo is currently a launching product in its pilot phase. As we continue to develop and improve our service, 
                        pricing may be adjusted to reflect new features, market conditions, and operational costs.
                      </p>
                      <p>
                        We will always notify existing customers in advance of any pricing changes, and early adopters will receive 
                        special consideration and advance notice of any updates.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still have questions section */}
        <section className="section-padding bg-warm-gradient">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our support team is here to help you get connected
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button className="btn-sunset px-8 py-6 text-lg">
                    Contact Support
                  </Button>
                </Link>
                <a href="mailto:info@ringoesim.com">
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container-max section-padding">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs text-muted-foreground">© 2025 Ringo. All rights reserved.</p>
          <a href="mailto:info@ringoesim.com" className="text-xs text-muted-foreground hover:text-primary">
            info@ringoesim.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;