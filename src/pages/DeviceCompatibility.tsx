import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Smartphone, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const DeviceCompatibility = () => {
  const compatibleDevices = [
    {
      brand: "Apple",
      models: [
        "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
        "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
        "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13",
        "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12",
        "iPhone SE (3rd generation)", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
        "iPhone XS Max", "iPhone XS", "iPhone XR"
      ]
    },
    {
      brand: "Google",
      models: [
        "Pixel 8 Pro", "Pixel 8", "Pixel 7a", "Pixel 7 Pro", "Pixel 7",
        "Pixel 6a", "Pixel 6 Pro", "Pixel 6", "Pixel 5a", "Pixel 5",
        "Pixel 4a (5G)", "Pixel 4 XL", "Pixel 4", "Pixel 3a XL", "Pixel 3a", "Pixel 3 XL", "Pixel 3"
      ]
    },
    {
      brand: "Samsung",
      models: [
        "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23",
        "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22", "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21",
        "Galaxy S20 Ultra", "Galaxy S20+", "Galaxy S20", "Galaxy Note 20 Ultra", "Galaxy Note 20",
        "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Fold 3", "Galaxy Z Fold 2",
        "Galaxy Z Flip 5", "Galaxy Z Flip 4", "Galaxy Z Flip 3"
      ]
    }
  ];

  const partiallyCompatible = [
    "OnePlus 11", "OnePlus 10 Pro", "OnePlus 9 Pro", "OnePlus 8T",
    "Xiaomi 13 Pro", "Xiaomi 12 Pro", "Huawei P50 Pro", "Oppo Find X5 Pro"
  ];

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
              <Link to="/faq" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
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
                <Smartphone className="h-3 w-3 mr-1" />
                Device Compatibility
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Check Your <span className="text-sunset">Device</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ringo works with most modern smartphones that support eSIM technology. Check if your device is compatible below.
              </p>
            </div>
            
            {/* Compatibility Checker */}
            <div className="max-w-2xl mx-auto mb-16">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-center">Quick Compatibility Check</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    The easiest way to check if your device supports eSIM:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-mono text-sm">
                      <strong>iPhone:</strong> Settings → General → About → Look for "Digital SIM"<br />
                      <strong>Android:</strong> Settings → Network & Internet → SIMs → "Add SIM" option
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If you see these options, your device supports eSIM and works with Ringo!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Compatible Devices */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  <Check className="inline h-8 w-8 text-green-500 mr-2" />
                  Fully Compatible Devices
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {compatibleDevices.map((brand) => (
                    <Card key={brand.brand} className="card-elegant">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          {brand.brand}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {brand.models.map((model) => (
                            <li key={model} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                              {model}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Partially Compatible */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  <div className="inline-flex items-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-sm">!</span>
                    </div>
                    Partially Compatible Devices
                  </div>
                </h2>
                
                <Card className="card-elegant max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>Limited eSIM Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      These devices have eSIM capability but may have regional restrictions or require carrier approval:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {partiallyCompatible.map((device) => (
                        <div key={device} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></div>
                          {device}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Contact our support team to verify compatibility for your specific region and carrier.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Not Compatible */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  <X className="inline h-8 w-8 text-red-500 mr-2" />
                  Not Compatible
                </h2>
                
                <Card className="card-elegant max-w-2xl mx-auto">
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-center text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                        Devices without eSIM support (older smartphones)
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                        Basic phones and feature phones
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                        Tablets and smartwatches (coming soon)
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                        Carrier-locked devices in some regions
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="section-padding bg-warm-gradient">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">System Requirements</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>iOS Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span>iOS 12.1 or later</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span>eSIM-compatible iPhone</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span>Unlocked or carrier-approved device</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span>Active internet connection for setup</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Android Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span>Android 9.0 or later</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span>eSIM-compatible Android device</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span>Unlocked or carrier-approved device</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span>Google Play Services enabled</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Device Compatible?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the waitlist and we'll help you get set up when Ringo launches
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/">
                  <Button className="btn-sunset px-8 py-6 text-lg">
                    Join Waitlist
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Ask About Your Device
                  </Button>
                </Link>
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

export default DeviceCompatibility;