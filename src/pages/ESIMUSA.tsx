import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flag, Wifi, Phone, Map, Check, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";

const ESIMUSA = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Best eSIM for USA: Travel Data, Calls & SMS | Ringo"
                description="Stay connected in the USA with Ringo. High-speed 5G/4G data on AT&T and T-Mobile. Includes a real US phone number for calls and texts. Instant activation."
                canonical="/esim-usa"
                breadcrumbs={[
                    { name: "Home", item: "/" },
                    { name: "USA eSIM", item: "/esim-usa" }
                ]}
                faq={[
                    {
                        question: "Which networks does the USA eSIM use?",
                        answer: "Ringo connects you to the best available 5G and 4G networks in the USA, primarily AT&T and T-Mobile."
                    },
                    {
                        question: "Does the USA eSIM include a local phone number?",
                        answer: "Yes, every USA plan includes a real US phone number, which is essential for local calls, SMS, and services like Uber or Yelp."
                    },
                    {
                        question: "How quickly can I activate my USA eSIM?",
                        answer: "Activation is immediate. You'll receive a QR code via email instantly after purchase and can be online in less than a minute."
                    }
                ]}
                rating={{ value: 4.8, count: 620 }}
                product={{
                    name: "Ringo USA eSIM",
                    description: "Unlimited Data & Calls in the USA",
                    image: "/images/ringo-og-image.png",
                    price: "39.90",
                    currency: "EUR"
                }}
            />
            <Navigation currentPage="pricing" />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-red-600 to-blue-800 text-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            The Best eSIM for USA Travel
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Premium 5G/4G coverage on AT&T and T-Mobile. Includes a real US phone number.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/pricing">
                                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-6 text-lg">
                                    Get USA Coverage
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="border-t-4 border-red-500">
                                <CardHeader>
                                    <Wifi className="h-10 w-10 text-red-500 mb-2" />
                                    <CardTitle>Top Tier Networks</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Don't settle for slow speeds. Ringo connects you to AT&T and T-Mobile, the best networks in America.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-t-4 border-blue-500">
                                <CardHeader>
                                    <Phone className="h-10 w-10 text-blue-500 mb-2" />
                                    <CardTitle>US Phone Number</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Essential for calling Ubers, making restaurant reservations, or contacting hotels. Most travel eSIMs don't offer this.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-t-4 border-white shadow-lg bg-gray-900 text-white">
                                <CardHeader>
                                    <Map className="h-10 w-10 text-white mb-2" />
                                    <CardTitle className="text-white">Coast to Coast</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300">
                                        From NYC to LA, and everywhere in between. Reliable coverage in cities and national parks.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Pricing Grid Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-max">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
                            <p className="text-xl text-gray-600">Simple, transparent pricing for global connectivity</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {/* Day Pass */}
                            <Card className="card-elegant relative h-full flex flex-col">
                                <CardHeader className="text-center pb-4 flex-none">
                                    <CardTitle className="text-2xl font-semibold">Day Pass</CardTitle>
                                    <div className="mt-4">
                                        <span className="text-3xl font-bold">€3.50</span>
                                        <span className="text-muted-foreground text-lg">/day</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">Unlimited data</p>
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
                                        <Link to="/pricing?join-waitlist=true">Get Started</Link>
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
                                        <Link to="/pricing?join-waitlist=true">Get Started</Link>
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
                                        <Link to="/pricing?join-waitlist=true">Get Started</Link>
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
                                        <Link to="/pricing?join-waitlist=true">Get Started</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQSection
                    className="bg-warm-gradient"
                    faqs={[
                        {
                            question: "Which networks does the USA eSIM use?",
                            answer: "Ringo connects you to the best available 5G and 4G networks in the USA, primarily AT&T and T-Mobile."
                        },
                        {
                            question: "Does the USA eSIM include a local phone number?",
                            answer: "Yes, every USA plan includes a real US phone number, which is essential for local calls, SMS, and services like Uber or Yelp."
                        },
                        {
                            question: "Will this eSIM work in National Parks?",
                            answer: "Yes, Ringo uses top-tier networks that provide extensive coverage across the United States, including many National Park areas."
                        }
                    ]}
                />

                {/* Internal Linking / Other Destinations */}
                <section className="section-padding bg-gray-50 border-t">
                    <div className="container-max text-center">
                        <h2 className="text-2xl font-bold mb-8">Explore More Regions</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Link to="/esim-europe" className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                <h3 className="font-bold">Europe</h3>
                                <p className="text-sm text-gray-500">30+ countries</p>
                            </Link>
                            <Link to="/global-esim" className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                <h3 className="font-bold">Global Plan</h3>
                                <p className="text-sm text-gray-500">180+ countries</p>
                            </Link>
                            <Link to="/pricing" className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                <h3 className="font-bold">View Plans</h3>
                                <p className="text-sm text-gray-500">Flexible options</p>
                            </Link>
                            <Link to="/use-cases" className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                <h3 className="font-bold">Use Cases</h3>
                                <p className="text-sm text-gray-500">Who it's for</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ESIMUSA;
