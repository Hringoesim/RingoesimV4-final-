import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Euro, Smartphone, CheckCircle, Check, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ESIMEurope = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="eSIM for Europe - Unlimited Data & Calls | Ringo"
                description="The best eSIM for Europe travel. Coverage in 30+ countries including France, Germany, Italy, Spain, and UK. No roaming fees."
                canonical="/esim-europe"
                product={{
                    name: "Ringo Europe eSIM",
                    description: "Unlimited Data & Calls in 30+ European Countries",
                    image: "/images/ringo-og-image.png",
                    price: "39.90",
                    currency: "EUR"
                }}
            />
            <Navigation currentPage="pricing" />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            The Best eSIM for Europe Travel
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-50 mb-8 max-w-3xl mx-auto">
                            One eSIM covers 30+ countries. France, Italy, Spain, Germany, UK, and more.
                            Unlimited data and local calls.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/pricing">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg">
                                    View Europe Plans
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Ringo for Europe */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Keep Your Number & Call Worldwide
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    With Ringo, you keep your existing phone number active. Make and receive calls worldwide without swapping SIMs or losing touch with friends and family.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Works in 30+ EU/EEA countries + UK",
                                        "Keep your WhatsApp number",
                                        "Includes a real European phone number",
                                        "Unlimited data options available"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center text-gray-700">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gray-100 rounded-2xl p-8">
                                <h3 className="font-bold text-xl mb-4">Popular Destinations Included:</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {['France 🇫🇷', 'Germany 🇩🇪', 'Italy 🇮🇹', 'Spain 🇪🇸', 'United Kingdom 🇬🇧', 'Netherlands 🇳🇱', 'Switzerland 🇨🇭', 'Portugal 🇵🇹'].map((country) => (
                                        <div key={country} className="bg-white p-3 rounded shadow-sm font-medium">
                                            {country}
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-6 text-sm text-gray-500 text-center">And 25+ more countries...</p>
                            </div>
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
            </main>

            <Footer />
        </div>
    );
};

export default ESIMEurope;
