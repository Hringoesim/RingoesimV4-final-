import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shield, Zap, Phone, MessageSquare, Wifi } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";

const GlobalESIM = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Global eSIM for Voice, SMS & Unlimited Data | Ringo"
                description="One global eSIM for 180+ countries. Unlimited data, voice calls, and SMS. Keep your number while traveling. Simple 60-second setup."
                canonical="/global-esim"
                breadcrumbs={[
                    { name: "Home", item: "/" },
                    { name: "Global eSIM", item: "/global-esim" }
                ]}
                faq={[
                    {
                        question: "How many countries does the Global eSIM cover?",
                        answer: "Ringo's Global eSIM provides coverage in over 180 countries across Europe, Asia, the Americas, and Oceania."
                    },
                    {
                        question: "Does the Global eSIM include a phone number?",
                        answer: "Yes, Ringo lets you keep and port your existing phone number, allowing you to stay connected with voice and SMS just like you would at home."
                    },
                    {
                        question: "How do I activate my Global eSIM?",
                        answer: "Activation is instant. Simply scan the QR code provided after purchase, and your eSIM will be ready to use in under 60 seconds."
                    }
                ]}
                rating={{ value: 4.8, count: 850 }}
                product={{
                    name: "Ringo Global eSIM",
                    description: "Unlimited Data, Voice, and SMS in 180+ countries",
                    image: "/images/ringo-og-image.png",
                    price: "39.90",
                    currency: "EUR"
                }}
            />
            <Navigation currentPage="pricing" />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 bg-hero-sunset text-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Global eSIM for Voice, SMS & Unlimited Data
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            One number. One plan. Coverage in 180+ countries. Stop buying local SIMs and start traveling freely.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/pricing">
                                <Button size="lg" className="btn-sunset font-semibold px-8 py-6 text-lg">
                                    Get Global Coverage
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose a Global eSIM?</h2>
                            <p className="text-xl text-gray-600">Travel without boundaries or bill shock.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader>
                                    <Globe className="h-12 w-12 text-blue-600 mb-4" />
                                    <CardTitle>180+ Countries</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        From Paris to Tokyo, New York to Sydney. Your Ringo eSIM works automatically wherever you land.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <Phone className="h-12 w-12 text-green-600 mb-4" />
                                    <CardTitle>Real Phone Number</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Unlike data-only eSIMs, Ringo lets you port your number to allow seamless connectivity
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <Zap className="h-12 w-12 text-yellow-500 mb-4" />
                                    <CardTitle>Instant Activation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Scan a QR code and you're online. No stores, no plastic, no waiting.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Coverage Map Teaser */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Coverage Everywhere You Go</h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                            We partner with top-tier local networks (AT&T, Vodafone, Orange, SoftBank) to ensure you get the fastest speeds and best reliability.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
                            {['United States', 'United Kingdom', 'France', 'Germany', 'Japan', 'Australia', 'Canada', 'China'].map((country) => (
                                <div key={country} className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
                                    <Globe className="h-5 w-5 text-gray-400" />
                                    <span className="font-medium">{country}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12">
                            <Link to="/use-cases">
                                <Button variant="outline" size="lg">View All Countries</Button>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* FAQ Section */}
                <FAQSection
                    className="bg-warm-gradient"
                    faqs={[
                        {
                            question: "How many countries does the Global eSIM cover?",
                            answer: "Ringo's Global eSIM provides coverage in over 180 countries across Europe, Asia, the Americas, and Oceania."
                        },
                        {
                            question: "Does the Global eSIM include a phone number?",
                            answer: "Yes, Ringo lets you keep and port your existing phone number, allowing you to stay connected with voice and SMS just like you would at home."
                        },
                        {
                            question: "How do I activate my Global eSIM?",
                            answer: "Activation is instant. Simply scan the QR code provided after purchase, and your eSIM will be ready to use in under 60 seconds."
                        }
                    ]}
                />

                {/* Internal Linking / Other Destinations */}
                <section className="section-padding bg-gray-50 border-t">
                    <div className="container-max text-center">
                        <h2 className="text-2xl font-bold mb-8">Travel Other Regions</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Link to="/esim-usa" className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                <h3 className="font-bold">USA</h3>
                                <p className="text-sm text-gray-500">AT&T/T-Mobile</p>
                            </Link>
                            <Link to="/esim-europe" className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                <h3 className="font-bold">Europe</h3>
                                <p className="text-sm text-gray-500">30+ countries</p>
                            </Link>
                            <Link to="/pricing" className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                <h3 className="font-bold">All Plans</h3>
                                <p className="text-sm text-gray-500">View pricing</p>
                            </Link>
                            <Link to="/how-it-works" className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                <h3 className="font-bold">How it Works</h3>
                                <p className="text-sm text-gray-500">Set up guide</p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gray-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Travel Smarter?</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join thousands of digital nomads and travelers who trust Ringo.
                        </p>
                        <Link to="/pricing">
                            <Button size="lg" className="btn-sunset font-bold px-8 py-4 text-lg">
                                Get Your Global eSIM Now
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default GlobalESIM;
