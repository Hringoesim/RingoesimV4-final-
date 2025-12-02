import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Phone, MessageSquare, Wifi } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ESIMvsCompetitors = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Ringo vs Airalo vs Holafly - The Best Travel eSIM | Ringo"
                description="Compare Ringo with Airalo and Holafly. Only Ringo offers Voice Calls, SMS, and Unlimited Data in one package. Keep your number active."
                canonical="/compare-esim"
            />
            <Navigation currentPage="use-cases" />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Not All eSIMs Are Created Equal
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Why settle for data-only when you can have it all?
                        </p>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="w-[250px] text-lg font-bold">Feature</TableHead>
                                        <TableHead className="text-lg font-bold text-orange-600 bg-orange-50">Ringo</TableHead>
                                        <TableHead className="text-lg font-bold text-gray-600">Airalo</TableHead>
                                        <TableHead className="text-lg font-bold text-gray-600">Holafly</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium flex items-center gap-2">
                                            <Wifi className="h-4 w-4" /> Data
                                        </TableCell>
                                        <TableCell className="bg-orange-50 font-bold text-green-600">Unlimited</TableCell>
                                        <TableCell>Capped (Usually)</TableCell>
                                        <TableCell className="text-green-600">Unlimited</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium flex items-center gap-2">
                                            <Phone className="h-4 w-4" /> Voice Calls
                                        </TableCell>
                                        <TableCell className="bg-orange-50 font-bold text-green-600">YES (Real Number)</TableCell>
                                        <TableCell className="text-red-500"><X className="h-5 w-5 inline" /> Data Only</TableCell>
                                        <TableCell className="text-red-500"><X className="h-5 w-5 inline" /> Data Only*</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium flex items-center gap-2">
                                            <MessageSquare className="h-4 w-4" /> SMS
                                        </TableCell>
                                        <TableCell className="bg-orange-50 font-bold text-green-600">YES (Receive OTPs)</TableCell>
                                        <TableCell className="text-red-500"><X className="h-5 w-5 inline" /> No</TableCell>
                                        <TableCell className="text-red-500"><X className="h-5 w-5 inline" /> No</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Keep Your Number</TableCell>
                                        <TableCell className="bg-orange-50 font-bold text-green-600"><Check className="h-5 w-5 inline" /> Yes</TableCell>
                                        <TableCell><Check className="h-5 w-5 inline" /> Yes</TableCell>
                                        <TableCell><Check className="h-5 w-5 inline" /> Yes</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <p className="p-4 text-sm text-gray-500 bg-gray-50">
                                *Some competitors offer limited calling on specific plans, but Ringo offers full voice capabilities on all plans.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Ringo Difference */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">The Ringo Difference</h2>

                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-3 flex items-center">
                                    <Phone className="h-6 w-6 text-orange-500 mr-2" />
                                    Real Phone Calls
                                </h3>
                                <p className="text-gray-600">
                                    Data-only eSIMs are great until you need to call a restaurant, hotel, or Uber driver.
                                    Ringo gives you a real number so you're never cut off.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-3 flex items-center">
                                    <MessageSquare className="h-6 w-6 text-blue-500 mr-2" />
                                    SMS & OTPs
                                </h3>
                                <p className="text-gray-600">
                                    Need to receive a bank verification code while abroad? Ringo handles SMS perfectly.
                                    Don't get locked out of your accounts.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Upgrade to a Complete eSIM</h2>
                        <Link to="/pricing">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 text-lg">
                                Get Ringo Now
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ESIMvsCompetitors;
