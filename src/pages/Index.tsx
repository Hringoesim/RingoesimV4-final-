import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Globe, Check, Star, Shield, Zap, CheckCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const countries = [
  { code: 'AF', name: '🇦🇫 Afghanistan' },
  { code: 'AL', name: '🇦🇱 Albania' },
  { code: 'DZ', name: '🇩🇿 Algeria' },
  { code: 'AR', name: '🇦🇷 Argentina' },
  { code: 'AM', name: '🇦🇲 Armenia' },
  { code: 'AU', name: '🇦🇺 Australia' },
  { code: 'AT', name: '🇦🇹 Austria' },
  { code: 'AZ', name: '🇦🇿 Azerbaijan' },
  { code: 'BH', name: '🇧🇭 Bahrain' },
  { code: 'BD', name: '🇧🇩 Bangladesh' },
  { code: 'BY', name: '🇧🇾 Belarus' },
  { code: 'BE', name: '🇧🇪 Belgium' },
  { code: 'BR', name: '🇧🇷 Brazil' },
  { code: 'BG', name: '🇧🇬 Bulgaria' },
  { code: 'CA', name: '🇨🇦 Canada' },
  { code: 'CL', name: '🇨🇱 Chile' },
  { code: 'CN', name: '🇨🇳 China' },
  { code: 'CO', name: '🇨🇴 Colombia' },
  { code: 'HR', name: '🇭🇷 Croatia' },
  { code: 'CY', name: '🇨🇾 Cyprus' },
  { code: 'CZ', name: '🇨🇿 Czech Republic' },
  { code: 'DK', name: '🇩🇰 Denmark' },
  { code: 'EG', name: '🇪🇬 Egypt' },
  { code: 'EE', name: '🇪🇪 Estonia' },
  { code: 'FI', name: '🇫🇮 Finland' },
  { code: 'FR', name: '🇫🇷 France' },
  { code: 'GE', name: '🇬🇪 Georgia' },
  { code: 'DE', name: '🇩🇪 Germany' },
  { code: 'GH', name: '🇬🇭 Ghana' },
  { code: 'GR', name: '🇬🇷 Greece' },
  { code: 'HK', name: '🇭🇰 Hong Kong' },
  { code: 'HU', name: '🇭🇺 Hungary' },
  { code: 'IS', name: '🇮🇸 Iceland' },
  { code: 'IN', name: '🇮🇳 India' },
  { code: 'ID', name: '🇮🇩 Indonesia' },
  { code: 'IR', name: '🇮🇷 Iran' },
  { code: 'IQ', name: '🇮🇶 Iraq' },
  { code: 'IE', name: '🇮🇪 Ireland' },
  { code: 'IL', name: '🇮🇱 Israel' },
  { code: 'IT', name: '🇮🇹 Italy' },
  { code: 'JP', name: '🇯🇵 Japan' },
  { code: 'JO', name: '🇯🇴 Jordan' },
  { code: 'KZ', name: '🇰🇿 Kazakhstan' },
  { code: 'KE', name: '🇰🇪 Kenya' },
  { code: 'KW', name: '🇰🇼 Kuwait' },
  { code: 'LV', name: '🇱🇻 Latvia' },
  { code: 'LB', name: '🇱🇧 Lebanon' },
  { code: 'LT', name: '🇱🇹 Lithuania' },
  { code: 'LU', name: '🇱🇺 Luxembourg' },
  { code: 'MY', name: '🇲🇾 Malaysia' },
  { code: 'MT', name: '🇲🇹 Malta' },
  { code: 'MX', name: '🇲🇽 Mexico' },
  { code: 'MD', name: '🇲🇩 Moldova' },
  { code: 'MA', name: '🇲🇦 Morocco' },
  { code: 'NL', name: '🇳🇱 Netherlands' },
  { code: 'NZ', name: '🇳🇿 New Zealand' },
  { code: 'NG', name: '🇳🇬 Nigeria' },
  { code: 'MK', name: '🇲🇰 North Macedonia' },
  { code: 'NO', name: '🇳🇴 Norway' },
  { code: 'OM', name: '🇴🇲 Oman' },
  { code: 'PK', name: '🇵🇰 Pakistan' },
  { code: 'PE', name: '🇵🇪 Peru' },
  { code: 'PH', name: '🇵🇭 Philippines' },
  { code: 'PL', name: '🇵🇱 Poland' },
  { code: 'PT', name: '🇵🇹 Portugal' },
  { code: 'QA', name: '🇶🇦 Qatar' },
  { code: 'RO', name: '🇷🇴 Romania' },
  { code: 'RU', name: '🇷🇺 Russia' },
  { code: 'SA', name: '🇸🇦 Saudi Arabia' },
  { code: 'RS', name: '🇷🇸 Serbia' },
  { code: 'SG', name: '🇸🇬 Singapore' },
  { code: 'SK', name: '🇸🇰 Slovakia' },
  { code: 'SI', name: '🇸🇮 Slovenia' },
  { code: 'ZA', name: '🇿🇦 South Africa' },
  { code: 'KR', name: '🇰🇷 South Korea' },
  { code: 'ES', name: '🇪🇸 Spain' },
  { code: 'LK', name: '🇱🇰 Sri Lanka' },
  { code: 'SE', name: '🇸🇪 Sweden' },
  { code: 'CH', name: '🇨🇭 Switzerland' },
  { code: 'TW', name: '🇹🇼 Taiwan' },
  { code: 'TH', name: '🇹🇭 Thailand' },
  { code: 'TR', name: '🇹🇷 Turkey' },
  { code: 'UA', name: '🇺🇦 Ukraine' },
  { code: 'AE', name: '🇦🇪 United Arab Emirates' },
  { code: 'GB', name: '🇬🇧 United Kingdom' },
  { code: 'US', name: '🇺🇸 United States' },
  { code: 'UY', name: '🇺🇾 Uruguay' },
  { code: 'VE', name: '🇻🇪 Venezuela' },
  { code: 'VN', name: '🇻🇳 Vietnam' },
  { code: 'OTHER', name: '🌍 Other' },
];

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (!country) {
      toast({
        title: "Country required",
        description: "Please select your country",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Send confirmation email via Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('waitlist_complete_2025_11_26_19_00', {
        body: {
          email: email,
          country: country,
          type: 'waitlist'
        }
      });

      if (error) {
        throw error;
      }
      
      setIsSuccess(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "Check your email for confirmation. We'll be in touch soon!",
      });
      
      setTimeout(() => {
        setIsWaitlistOpen(false);
        setIsSuccess(false);
        setEmail("");
        setCountry("");
      }, 3000);
      
    } catch (error) {
      console.error('Waitlist submission error:', error);
      
      // More detailed error logging
      if (error && typeof error === 'object') {
        console.error('Full error object:', JSON.stringify(error, null, 2));
        if ('message' in error) {
          console.error('Error message:', error.message);
        }
      }
      
      // Check if it's a network error or API error
      let errorMessage = "Please try again later or contact us directly at info@ringoesim.com";
      if (error && typeof error === 'object' && 'message' in error) {
        if (error.message.includes('Failed to fetch')) {
          errorMessage = "Network error. Please check your connection and try again.";
        } else if (error.message.includes('email')) {
          errorMessage = "Email service error. Please try again or contact info@ringoesim.com";
        }
      }
      
      toast({
        title: "Something went wrong",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlanClick = (planName: string) => {
    const subject = `Interest in ${planName} Subscription`;
    const body = `Hi Ringo team,\n\nI'm interested in learning more about the ${planName} subscription plan.\n\nPlease send me more details.\n\nBest regards`;
    window.location.href = `mailto:info@ringoesim.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage="home" onWaitlistOpen={() => setIsWaitlistOpen(true)} />

      {/* Waitlist Dialog */}
      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
          </DialogHeader>
          {isSuccess ? (
            <div className="text-center space-y-4 py-6">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="text-lg font-semibold text-green-800">Thank you!</h3>
              <p className="text-green-700">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <main className="flex-1">
        {/* Simplified Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
              {/* Left Column - Content */}
              <div className="text-white space-y-8">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  🚀 Early Access Available
                </Badge>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    One Number. One Plan. Everywhere.
                  </h1>
                  
                  <p className="text-xl text-orange-100 max-w-lg leading-relaxed">
                    Ringo adds a global connectivity layer to your existing phone number. 
                    No new SIM cards, no complicated setup - just seamless connectivity wherever you travel.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        size="lg" 
                        className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-6 text-lg"
                      >
                        Join Waitlist
                      </Button>
                    </DialogTrigger>
                  </Dialog>

                </div>
              </div>
              
              {/* Right Column - Visual */}
              <div className="relative">
                <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Your Number</h3>
                        <p className="text-orange-100 text-sm">Keep it everywhere</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Global Coverage</h3>
                        <p className="text-orange-100 text-sm">180+ countries</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">No Surprises</h3>
                        <p className="text-orange-100 text-sm">Transparent pricing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600">Simple, transparent pricing for global connectivity</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Day Pass */}
              <Card className="bg-white border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 cursor-pointer h-full flex flex-col" onClick={() => handlePlanClick('Day Pass')}>
                <CardContent className="p-6 text-center flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Day Pass</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">€3.50</span>
                      <span className="text-gray-600">/day</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited data
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        25 min voice calls
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        20 SMS messages
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full text-sm mt-auto">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              {/* Week Explorer */}
              <Card className="bg-white border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 cursor-pointer h-full flex flex-col" onClick={() => handlePlanClick('Week Explorer')}>
                <CardContent className="p-6 text-center flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Week Explorer</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">€24.90</span>
                      <span className="text-gray-600">/week</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited data
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        120 min voice calls
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        50 SMS messages
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full text-sm mt-auto">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              {/* Nomad */}
              <Card className="bg-white border-2 border-orange-500 relative scale-105 shadow-xl cursor-pointer h-full flex flex-col" onClick={() => handlePlanClick('Nomad')}>
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
                <CardContent className="p-6 text-center flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Nomad</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">€39.90</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited data
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        300 min voice calls
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited SMS
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Number portability
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-sm mt-auto">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              {/* Business Pro */}
              <Card className="bg-white border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 cursor-pointer h-full flex flex-col" onClick={() => handlePlanClick('Business Pro')}>
                <CardContent className="p-6 text-center flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Pro</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">€69.90</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited data
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        800 min voice calls
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Unlimited SMS
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        Number portability
                      </li>
                      <li className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        24/7 priority support
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full text-sm mt-auto">
                    Get Started
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

export default Index;