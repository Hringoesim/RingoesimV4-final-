import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flag, Wifi, Phone, Map } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ESIMUSA = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="eSIM for USA - Travel Data & Calls | Ringo"
                description="Best eSIM for USA travel. Connect to AT&T and T-Mobile networks. Includes a US phone number for calls and texts. Instant delivery."
                canonical="/esim-usa"
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
                            Stay Connected in the USA
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

                {/* CTA */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Visiting the States?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Avoid expensive roaming charges from your home carrier.
                        </p>
                        <Link to="/pricing">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg">
                                View USA Plans
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ESIMUSA;
