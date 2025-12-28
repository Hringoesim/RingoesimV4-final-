import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Globe, Calculator, AlertTriangle, ExternalLink, Phone, MessageSquare, CreditCard, CheckCircle, X, TrendingUp, Zap, Shield, Users, DollarSign, MapPin, Clock, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { WaitlistDialog } from "@/components/WaitlistDialog";

// Country and carrier data
const EU_COUNTRIES = [
  { code: "DE", name: "Germany", carriers: ["Deutsche Telekom", "Vodafone", "O2"] },
  { code: "FR", name: "France", carriers: ["Orange", "SFR", "Bouygues"] },
  { code: "ES", name: "Spain", carriers: ["Movistar", "Vodafone", "Orange"] },
  { code: "IT", name: "Italy", carriers: ["TIM", "Vodafone", "WindTre"] },
  { code: "NL", name: "Netherlands", carriers: ["KPN", "Vodafone", "T-Mobile"] }
];

const NON_EU_COUNTRIES = [
  { code: "US", name: "USA", carriers: ["Verizon", "AT&T", "T-Mobile"] },
  { code: "UK", name: "United Kingdom", carriers: ["EE", "Vodafone", "O2"] },
  { code: "CA", name: "Canada", carriers: ["Rogers", "Bell", "Telus"] },
  { code: "AU", name: "Australia", carriers: ["Telstra", "Optus", "Vodafone"] }
];

const DESTINATIONS = [
  { code: "ES", name: "Spain", region: "EU", popular: true },
  { code: "FR", name: "France", region: "EU", popular: true },
  { code: "IT", name: "Italy", region: "EU", popular: true },
  { code: "US", name: "USA", region: "Non-EU", popular: true },
  { code: "TH", name: "Thailand", region: "Non-EU", popular: true },
  { code: "AE", name: "UAE", region: "Non-EU", popular: true },
  { code: "UK", name: "United Kingdom", region: "Non-EU", popular: true }
];

// Roaming rates (simplified for calculator)
const ROAMING_RATES = {
  "Deutsche Telekom": { dataPerGB: 9.90, voicePerMin: 2.99, dailyPass: 4.99, basePlan: 40 },
  "Orange": { dataPerGB: 10.24, voicePerMin: 2.50, dailyPass: 8.00, basePlan: 45 },
  "Movistar": { dataPerGB: 8.50, voicePerMin: 2.20, dailyPass: 6.00, basePlan: 38 },
  "Verizon": { dataPerGB: 18.40, voicePerMin: 9.20, dailyPass: 11, basePlan: 64 },
  "AT&T": { dataPerGB: 9.20, voicePerMin: 9.20, dailyPass: 11, basePlan: 60 },
  "EE": { dataPerGB: 11.50, voicePerMin: 6.90, dailyPass: 7, basePlan: 47 }
};

// eSIM Provider data
const ESIM_PROVIDERS = [
  {
    provider: "Airalo",
    price: 13,
    data: "10GB",
    voice: false,
    sms: false,
    keepNumber: false,
    euNumber: false,
    addData: "Buy new eSIM"
  },
  {
    provider: "Holafly",
    price: 64.90,
    data: "Unlimited",
    voice: false,
    sms: false,
    keepNumber: false,
    euNumber: false,
    addData: "Buy new eSIM"
  },
  {
    provider: "Google Fi",
    price: 60,
    data: "22GB",
    voice: true,
    sms: true,
    keepNumber: "US only",
    euNumber: false,
    addData: "$10/GB"
  },
  {
    provider: "Ringo",
    price: 39.90,
    data: "Unlimited",
    voice: true,
    sms: true,
    keepNumber: "60+ countries",
    euNumber: "5 countries",
    addData: "Included",
    highlight: true
  }
];

// Fun facts data
const FUN_FACTS = [
  {
    stat: "746 Million",
    description: "International arrivals to/from Europe annually",
    source: "UNWTO World Tourism Barometer 2024",
    icon: "🌍"
  },
  {
    stat: "Spain #1",
    description: "Most visited European country (85.1M visitors/year)",
    source: "Eurostat Tourism Statistics 2024",
    icon: "🇪🇸"
  },
  {
    stat: "€842 Average",
    description: "Amount Europeans spend on roaming per year",
    source: "European Commission Consumer Survey 2023",
    icon: "💸"
  },
  {
    stat: "73% of Travelers",
    description: "Experience 'roaming anxiety' when traveling",
    source: "Booking.com Travel Confidence Index 2024",
    icon: "😰"
  },
  {
    stat: "1 Billion+",
    description: "eSIM-capable devices in use globally",
    source: "GSMA Intelligence Mobile Economy Report 2024",
    icon: "📱"
  },
  {
    stat: "€6 Per Minute",
    description: "Average cost of international roaming calls in Europe",
    source: "BEREC Roaming Benchmark Report 2024",
    icon: "💰"
  },
  {
    stat: "35 Million",
    description: "Digital nomads worldwide (up from 15M in 2020)",
    source: "Nomad List Global Digital Nomad Report 2024",
    icon: "🚀"
  },
  {
    stat: "4-10 Countries",
    description: "Average countries visited per year by digital nomads",
    source: "Remote Year State of Remote Work 2024",
    icon: "⏱️"
  }
];

const UseCases = () => {
  // Calculator state
  const [userRegion, setUserRegion] = React.useState("EU");
  const [homeCountry, setHomeCountry] = React.useState("DE");
  const [destination, setDestination] = React.useState("ES");
  const [tripLength, setTripLength] = React.useState([7]);
  const [dataNeeded, setDataNeeded] = React.useState([10]);
  const [callMinutes, setCallMinutes] = React.useState([60]);
  const [currentCarrier, setCurrentCarrier] = React.useState("Deutsche Telekom");
  const [hasRoamingPass, setHasRoamingPass] = React.useState(false);
  const [animatedSavings, setAnimatedSavings] = React.useState(0);
  const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);

  // Get available carriers based on home country
  const getAvailableCarriers = () => {
    if (userRegion === "EU") {
      const country = EU_COUNTRIES.find(c => c.code === homeCountry);
      return country ? country.carriers : [];
    } else {
      const country = NON_EU_COUNTRIES.find(c => c.code === homeCountry);
      return country ? country.carriers : [];
    }
  };

  // Get available destinations based on user region
  const getAvailableDestinations = () => {
    if (userRegion === "EU") {
      // EU users should see non-EU destinations for roaming costs
      return DESTINATIONS.filter(d => d.region === "Non-EU");
    } else {
      // Non-EU users can see all destinations
      return DESTINATIONS;
    }
  };

  // Calculate costs
  const calculateCosts = () => {
    const days = tripLength[0];
    const data = dataNeeded[0];
    const minutes = callMinutes[0];

    const carrierRates = ROAMING_RATES[currentCarrier] || ROAMING_RATES["Deutsche Telekom"];

    // Traditional carrier cost
    let carrierCost = carrierRates.basePlan; // Base monthly plan

    if (hasRoamingPass && carrierRates.dailyPass) {
      // With daily pass
      carrierCost += carrierRates.dailyPass * days;
    } else {
      // Pay per use
      carrierCost += (data * carrierRates.dataPerGB) + (minutes * carrierRates.voicePerMin);
    }

    // Ringo cost
    let ringoCost;
    if (days <= 3) {
      ringoCost = 3.50 * days; // Day pass
    } else if (days <= 7) {
      ringoCost = 24.90; // Week explorer
    } else {
      ringoCost = 39.90; // Nomad monthly
    }

    const savings = carrierCost - ringoCost;

    return {
      carrierCost: carrierCost.toFixed(2),
      ringoCost: ringoCost.toFixed(2),
      savings: savings.toFixed(2),
      carrierBreakdown: {
        basePlan: carrierRates.basePlan,
        roamingCost: carrierCost - carrierRates.basePlan
      }
    };
  };

  const costs = calculateCosts();

  // Animate savings counter
  React.useEffect(() => {
    const targetSavings = parseFloat(costs.savings);
    const duration = 1000; // 1 second
    const steps = 50;
    const increment = targetSavings / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetSavings) {
        setAnimatedSavings(targetSavings);
        clearInterval(timer);
      } else {
        setAnimatedSavings(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [costs.savings]);

  // Get fun comparison based on savings
  const getFunComparison = (savings: string) => {
    const amount = parseFloat(savings);
    if (amount > 200) return "That's enough for 15 tapas dinners in Barcelona!";
    if (amount > 100) return "That's enough for 8 tapas dinners in Barcelona!";
    if (amount > 50) return "That's enough for 4 tapas dinners in Barcelona!";
    return "That's enough for 2 tapas dinners in Barcelona!";
  };

  const handleRegionChange = (newRegion: string) => {
    setUserRegion(newRegion);
    const newCountries = newRegion === "EU" ? EU_COUNTRIES : NON_EU_COUNTRIES;
    const defaultCountry = newCountries[0];
    setHomeCountry(defaultCountry.code);
    const defaultCarrier = defaultCountry.carriers[0];
    setCurrentCarrier(defaultCarrier);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <SEO
        title="Ringo Use Cases - Compare vs Roaming & Local SIMs"
        description="See how Ringo compares to traditional roaming, Airalo, Holafly, and Google Fi. Calculate your savings with our interactive tool."
        canonical="/use-cases"
      />
      <Navigation currentPage="use-cases" onWaitlistOpen={() => setIsWaitlistOpen(true)} />
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Stop Overpaying for Roaming</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Calculate your real savings with our upcoming pilot program
            </p>
          </div>
        </section>

        {/* Interactive Savings Calculator */}
        <section className="py-20 bg-white" id="calculator">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                <Calculator className="h-10 w-10 mr-4 text-orange-500" />
                Interactive Savings Calculator
              </h2>

              {/* Important explanation */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg max-w-4xl mx-auto mb-12">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-500 text-xl">ℹ️</div>
                  <p className="text-blue-800 text-left">
                    <strong>For Europeans traveling inside the EU</strong>, roaming is usually charged at domestic rates ("Roam Like at Home").
                    This calculator shows the real savings when you travel <strong>outside the EU</strong>, or when <strong>non-EU residents travel into Europe</strong>.
                  </p>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Calculator Inputs */}
                  <div className="space-y-8">
                    {/* Step 1: Where are you from? */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                        Where are you from?
                      </h3>
                      <RadioGroup value={userRegion} onValueChange={handleRegionChange} className="flex space-x-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="EU" id="eu" />
                          <Label htmlFor="eu">I live in the EU</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Non-EU" id="non-eu" />
                          <Label htmlFor="non-eu">I live outside the EU</Label>
                        </div>
                      </RadioGroup>

                      <Select value={homeCountry} onValueChange={(value) => {
                        setHomeCountry(value);
                        // Reset carrier when country changes
                        const countries = userRegion === "EU" ? EU_COUNTRIES : NON_EU_COUNTRIES;
                        const country = countries.find(c => c.code === value);
                        if (country && country.carriers.length > 0) {
                          setCurrentCarrier(country.carriers[0]);
                        }
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {(userRegion === "EU" ? EU_COUNTRIES : NON_EU_COUNTRIES).map(country => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Step 2: Where are you traveling? */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                        Where are you traveling?
                      </h3>
                      <Select value={destination} onValueChange={setDestination}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {getAvailableDestinations().map(dest => (
                            <SelectItem key={dest.code} value={dest.code}>
                              {dest.name} {dest.popular ? "⭐" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Step 3: Trip details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                        Trip details
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium">Trip length: {tripLength[0]} days</Label>
                          <Slider
                            value={tripLength}
                            onValueChange={setTripLength}
                            max={30}
                            min={1}
                            step={1}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label className="text-sm font-medium">Data needed: {dataNeeded[0]} GB</Label>
                          <Slider
                            value={dataNeeded}
                            onValueChange={setDataNeeded}
                            max={50}
                            min={1}
                            step={1}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label className="text-sm font-medium">Minutes of calls: {callMinutes[0]} min</Label>
                          <Slider
                            value={callMinutes}
                            onValueChange={setCallMinutes}
                            max={300}
                            min={0}
                            step={10}
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 4: Current operator */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
                        Current operator
                      </h3>

                      <Select value={currentCarrier} onValueChange={setCurrentCarrier}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {getAvailableCarriers().map(carrier => (
                            <SelectItem key={carrier} value={carrier}>
                              {carrier}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="roaming-pass"
                          checked={hasRoamingPass}
                          onChange={(e) => setHasRoamingPass(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="roaming-pass" className="text-sm">
                          I have a roaming pass / travel add-on
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Results Display */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center mb-8">Your Trip Cost Comparison</h3>

                    {/* Current Carrier Card */}
                    <Card className="border-red-200 bg-red-50">
                      <CardHeader>
                        <CardTitle className="text-red-800 flex items-center">
                          <Phone className="h-5 w-5 mr-2" />
                          {currentCarrier}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span>Base monthly bill:</span>
                            <span className="font-bold">€{costs.carrierBreakdown.basePlan}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{hasRoamingPass ? "Roaming pass/charges:" : "Pay-per-use charges:"}</span>
                            <span className="font-bold">€{costs.carrierBreakdown.roamingCost.toFixed(2)}</span>
                          </div>
                          <div className="border-t pt-3">
                            <div className="flex justify-between text-lg">
                              <span className="font-bold">Total Cost:</span>
                              <span className="font-bold text-red-600 text-2xl">€{costs.carrierCost}</span>
                            </div>
                            <p className="text-xs text-red-700 mt-2">This is all on top of your regular phone bill.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Ringo Card */}
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-green-800 flex items-center">
                          <Zap className="h-5 w-5 mr-2" />
                          Ringo
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span>Plan type:</span>
                            <span className="font-bold">
                              {tripLength[0] <= 3 ? "Day Pass" : tripLength[0] <= 7 ? "Week Explorer" : "Nomad Monthly"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Includes:</span>
                            <span className="font-bold">
                              {tripLength[0] <= 3
                                ? "Unlimited data + 25 min voice + 20 SMS"
                                : tripLength[0] <= 7
                                  ? "Unlimited data + 120 min voice + 50 SMS"
                                  : "Unlimited data + calls + SMS"}
                            </span>
                          </div>
                          <div className="border-t pt-3">
                            <div className="flex justify-between text-lg">
                              <span className="font-bold">Total Cost:</span>
                              <span className="font-bold text-green-600 text-2xl">€{costs.ringoCost}</span>
                            </div>
                            <p className="text-xs text-green-700 mt-2">Keep your existing number everywhere.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Savings Display */}
                    <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl">
                      <h4 className="text-lg font-bold mb-2">You save:</h4>
                      <div className="text-4xl font-bold mb-2">€{animatedSavings.toFixed(2)}</div>
                      <p className="text-blue-100 mb-4">{getFunComparison(costs.savings)}</p>
                      <p className="text-sm text-blue-100">
                        For EU-to-EU trips, savings mainly come from cancelling your home carrier and using Ringo as your primary number.
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3" asChild data-waitlist-trigger>
                        <Link to="?join-waitlist=true">
                          Join Waitlist – Lock In Best Pricing
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setTripLength([7]);
                          setDataNeeded([10]);
                          setCallMinutes([60]);
                          setHasRoamingPass(false);
                        }}
                      >
                        Try Another Trip
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Travel Solution Comparison */}
        <section className="py-16 bg-gray-50" id="comparisons">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Travel Connectivity Solutions Comparison</h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold">Airalo/Holafly</th>
                    <th className="px-6 py-4 text-center font-bold">Google Fi</th>
                    <th className="px-6 py-4 text-center font-bold">Traditional Carrier</th>
                    <th className="px-6 py-4 text-center font-bold">Local SIMs</th>
                    <th className="px-6 py-4 text-center font-bold bg-green-100">Ringo (YOU) ⭐</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">Voice Calls</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /><div className="text-xs mt-1">No</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">Yes (US)</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1">Yes (roaming)</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">Country-by-country</div></td>
                    <td className="px-6 py-4 text-center bg-green-50"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1 font-bold">Yes (global, EU/+ porting)</div></td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">SMS / 2FA</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /><div className="text-xs mt-1">No</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">Yes (US)</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1">Yes</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">Varies</div></td>
                    <td className="px-6 py-4 text-center bg-green-50"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1 font-bold">Yes</div></td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">Number</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /><div className="text-xs mt-1">No / temp</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">US number</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1">Your number</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">Local SIM number</div></td>
                    <td className="px-6 py-4 text-center bg-green-50"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1 font-bold">EU or Ported</div></td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">Data Coverage</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">Global / semi</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1">Global</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">Country-by-country</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">Country-by-country</div></td>
                    <td className="px-6 py-4 text-center bg-green-50"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1 font-bold">180+ countries data+voice+SMS</div></td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">Billing Predictability</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1">Yes (flat)</div></td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /><div className="text-xs mt-1">$ per GB</div></td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /><div className="text-xs mt-1">Hard to estimate</div></td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /><div className="text-xs mt-1">Hard to estimate</div></td>
                    <td className="px-6 py-4 text-center bg-green-50"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1 font-bold">Flat plans / add-ons</div></td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">Setup Hassle</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1">Low</div></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">Low/medium</div></td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-yellow-500 mx-auto" /><div className="text-xs mt-1">Medium (roaming setup)</div></td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /><div className="text-xs mt-1">High (buy SIM per country)</div></td>
                    <td className="px-6 py-4 text-center bg-green-50"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /><div className="text-xs mt-1 font-bold">Low</div></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Data sourced from official provider websites, checked on November 25, 2025.
            </p>
          </div>
        </section>

        {/* Traditional Carriers vs Ringo (Per-MB) */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Traditional Carriers vs Ringo (Per-MB)</h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-red-100 to-red-200">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Carrier</th>
                    <th className="px-6 py-4 text-center font-bold">Monthly Base Plan</th>
                    <th className="px-6 py-4 text-center font-bold">Per-GB Roaming</th>
                    <th className="px-6 py-4 text-center font-bold">Per-Min Calls</th>
                    <th className="px-6 py-4 text-center font-bold">Daily Pass</th>
                    <th className="px-6 py-4 text-center font-bold">7-Day Trip Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">Vodafone</td>
                    <td className="px-6 py-4 text-center">€45-65</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">€10.24/GB</td>
                    <td className="px-6 py-4 text-center">€2.50/min</td>
                    <td className="px-6 py-4 text-center">€6-8/day</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">€157</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">Orange</td>
                    <td className="px-6 py-4 text-center">€45-70</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">€9.22/GB</td>
                    <td className="px-6 py-4 text-center">€2.50/min</td>
                    <td className="px-6 py-4 text-center">€8/day</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">€161</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">AT&T/Verizon</td>
                    <td className="px-6 py-4 text-center">$65-70</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">$10-20/GB</td>
                    <td className="px-6 py-4 text-center">$10/min</td>
                    <td className="px-6 py-4 text-center">$12/day</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">$144</td>
                  </tr>
                  <tr className="border-t-4 border-green-500 bg-green-50">
                    <td className="px-6 py-4 font-bold text-green-800">Ringo</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">€0 (replaces base plan)</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">Unlimited Data</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">Unlimited</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">€3.50/day</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">€24.90</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-yellow-800 font-bold mb-2">Remember: all of these roaming fees are on top of your usual monthly phone bill.</p>
                  <p className="text-yellow-800">With Ringo, you can port your number and stop paying that base bill altogether.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50" id="fun-facts">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <Globe className="h-8 w-8 mr-3 text-blue-500" />
              Fun Facts About Travel & Roaming
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FUN_FACTS.map((fact, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{fact.icon}</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{fact.stat}</div>
                    <p className="text-gray-700 mb-3 text-sm leading-relaxed">{fact.description}</p>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {fact.source}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Shocking Truth Alert */}
        <section className="py-12 bg-red-50 border-t-4 border-red-500">
          <div className="max-w-6xl mx-auto px-4">
            <Card className="bg-white border-2 border-red-500 shadow-xl">
              <CardHeader className="bg-red-500 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <AlertTriangle className="h-8 w-8 mr-3" />
                  🚨 SHOCKING TRUTH: Traditional Carriers Charge Per-MB
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">When you roam outside the EU:</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• <strong>Vodafone:</strong> €10.24 PER MEGABYTE (not per gigabyte!)</li>
                      <li>• <strong>T-Mobile:</strong> €12.29 PER MEGABYTE</li>
                      <li>• <strong>Orange:</strong> €9.22 PER MEGABYTE</li>
                    </ul>

                    <h4 className="text-lg font-bold text-red-800 mt-6 mb-3">That means:</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• One Instagram photo (3MB) = <strong>€30.72 with Vodafone</strong></li>
                      <li>• One YouTube video (50MB) = <strong>€512 with Vodafone</strong></li>
                      <li>• Streaming 1 hour of Netflix (3GB) = <strong>€30,720!</strong></li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                    <h3 className="text-xl font-bold text-green-800 mb-4">With Ringo:</h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">€0.0007/MB</div>
                    <div className="text-lg text-green-700 mb-4">(€0.70/GB)</div>
                    <p className="text-green-800"><strong>No base bill required</strong></p>
                    <p className="text-sm text-green-600 mt-4">This is ON TOP of your €45-150/month phone bill</p>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-600 flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Source: BEREC International Roaming Benchmark Report 2024
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sources & Methodology */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Sources & Methodology</h2>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-700 mb-6">
                All pricing and statistics are sourced from official public sources and regulatory reports.
                Roaming and per-MB costs use BEREC and regulator reports where available.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Telco & Roaming Pricing</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• BEREC Roaming Benchmark Report 2024</li>
                    <li>• Official carrier price lists</li>
                    <li>• European Commission roaming studies</li>
                    <li>• Carrier official websites</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Travel & Tourism Stats</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• UNWTO World Tourism Barometer</li>
                    <li>• Eurostat Tourism Statistics</li>
                    <li>• Booking.com Travel Confidence Index</li>
                    <li>• European Commission Consumer Survey</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Mobile & eSIM Adoption</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• GSMA Intelligence Mobile Economy Report</li>
                    <li>• Nomad List Digital Nomad Report</li>
                    <li>• Remote Year State of Remote Work</li>
                    <li>• Official eSIM provider websites</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Disclaimer:</strong> All prices and figures are indicative and may change.
                  Ringo pricing shown is projected for our pilot program - final pricing may vary.
                  Always check your carrier's latest roaming terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LinkedIn Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stay Connected with Ringo</h2>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://www.linkedin.com/company/ringoesim/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Follow us on LinkedIn</div>
                <div className="text-sm text-gray-600">Company updates and insights</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Per MB Summary Footer */}
        <section className="py-12 bg-gray-100 border-t-2 border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Quick Cost Per MB Reference</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-lg font-bold text-red-600 mb-2">Traditional Roaming</div>
                  <div className="text-3xl font-bold text-red-700 mb-1">€9-12/MB</div>
                  <div className="text-sm text-gray-600">Outside EU (Vodafone, Orange, T-Mobile)</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-lg font-bold text-yellow-600 mb-2">eSIM Data-Only</div>
                  <div className="text-3xl font-bold text-yellow-700 mb-1">€0.001-0.006/MB</div>
                  <div className="text-sm text-gray-600">Airalo, Holafly, Nomad (data only)</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-lg font-bold text-blue-600 mb-2">Google Fi</div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">€0.003/MB</div>
                  <div className="text-sm text-gray-600">US-focused, limited porting</div>
                </CardContent>
              </Card>

              <Card className="text-center bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="text-lg font-bold text-green-600 mb-2">Ringo (Pilot)</div>
                  <div className="text-3xl font-bold text-green-700 mb-1">€0.0007/MB</div>
                  <div className="text-sm text-green-600 font-medium">Voice + SMS + Number Porting</div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Note:</strong> Ringo pricing is projected for our pilot program.
                Effective cost based on €34.90/month with 50GB usage.
              </p>
              <p className="text-xs text-gray-500">
                Traditional roaming rates from BEREC Report 2024. eSIM rates from official provider websites, November 2025.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Stop Overpaying for Roaming?</h2>
            <p className="text-xl text-orange-100 mb-8">Join our waitlist for early access to Ringo's global connectivity</p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 text-lg" asChild data-waitlist-trigger>
              <Link to="?join-waitlist=true">
                Join Waitlist Now
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;