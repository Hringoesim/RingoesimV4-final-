import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Euro, Smartphone, CheckCircle } from "lucide-react";
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
                                    Cross Borders Without Losing Signal
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Planning a Eurotrip? Ringo works seamlessly across borders. Drive from France to Italy to Switzerland without ever changing settings or swapping SIMs.
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

                {/* CTA */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Don't Pay Roaming Fees in Europe</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Carriers charge up to $10/day for international passes. Ringo starts at just €3.50.
                        </p>
                        <Link to="/pricing">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 text-lg">
                                Get Your Europe eSIM
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ESIMEurope;
