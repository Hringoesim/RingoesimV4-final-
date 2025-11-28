import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b">
        <div className="container-max">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-sunset">Ringo</span>
            </Link>

            <div className="hidden md:flex md:items-center md:space-x-4">
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
          <div className="container-max max-w-4xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-500 mr-2" />
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
              </div>
              <p className="text-muted-foreground">
                Last updated: November 28, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Ringo ("we," "our," or "us"), we are committed to protecting your privacy and personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
                  our eSIM services and related applications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Email address and contact information</li>
                      <li>Phone number for service activation</li>
                      <li>Payment information (processed securely by third-party providers)</li>
                      <li>Account credentials and preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Usage Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Data usage statistics and connection logs</li>
                      <li>Device information and network performance data</li>
                      <li>Location data (only when necessary for service provision)</li>
                      <li>App usage analytics and crash reports</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide and maintain our eSIM connectivity services</li>
                  <li>Process payments and manage your account</li>
                  <li>Send service-related communications and updates</li>
                  <li>Improve our services and develop new features</li>
                  <li>Ensure network security and prevent fraud</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>With network partners to provide connectivity services</li>
                  <li>With payment processors for transaction processing</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your information, including encryption,
                  secure data transmission, and regular security audits. However, no method of transmission over the
                  internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information</li>
                  <li>Restrict or object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. International Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own.
                  We ensure appropriate safeguards are in place to protect your information in accordance
                  with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Email Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Legal and privacy-related emails sent to us are deleted instantly upon receipt.
                  We do not retain copies of such communications for any purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material
                  changes by posting the new policy on our website and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="font-medium">Ringo Privacy Team</p>
                  <p className="text-muted-foreground">Email: info@ringoesim.com</p>
                </div>
              </section>
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

export default Privacy;