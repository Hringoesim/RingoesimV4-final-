import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, AlertTriangle, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ESIMvsRoaming = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="eSIM vs Roaming - Stop Overpaying for Travel Data | Ringo"
                description="Compare eSIM vs International Roaming. See how much you can save by switching to Ringo. Avoid bill shock and hidden fees."
                canonical="/esim-vs-roaming"
            />
            <Navigation currentPage="use-cases" />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            eSIM vs. Roaming: The Truth
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Why pay $10/day to your carrier when you can pay $3.50/day with Ringo?
                        </p>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="w-[300px] text-lg font-bold">Feature</TableHead>
                                        <TableHead className="text-lg font-bold text-orange-600">Ringo eSIM</TableHead>
                                        <TableHead className="text-lg font-bold text-gray-600">Carrier Roaming</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">Cost per Day</TableCell>
                                        <TableCell className="text-green-600 font-bold">From €3.50</TableCell>
                                        <TableCell className="text-red-600">$10 - $15</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Data Limit</TableCell>
                                        <TableCell className="text-green-600 font-bold">Unlimited</TableCell>
                                        <TableCell>Often Capped / Throttled</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Keep Your Number</TableCell>
                                        <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell>
                                        <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Bill Shock Risk</TableCell>
                                        <TableCell className="text-green-600 font-bold">Zero (Prepaid)</TableCell>
                                        <TableCell className="text-red-600">High (Postpaid)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Setup Time</TableCell>
                                        <TableCell>2 Minutes (QR Code)</TableCell>
                                        <TableCell>Automatic (but expensive)</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </section>

                {/* The "Bill Shock" Section */}
                <section className="py-20 bg-orange-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <AlertTriangle className="h-16 w-16 text-orange-500 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What is "Bill Shock"?</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            It's that sinking feeling when you return from vacation and open a $400 phone bill.
                            Carriers often charge exorbitant rates for data usage abroad if you forget to buy a pass.
                        </p>
                        <p className="text-lg text-gray-700 font-medium">
                            With Ringo, you pay upfront. No hidden fees. No surprises.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Start Saving Today</h2>
                        <Link to="/pricing">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 text-lg">
                                See Our Plans
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ESIMvsRoaming;
