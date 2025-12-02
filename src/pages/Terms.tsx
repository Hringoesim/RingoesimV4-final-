import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Terms of Service - Ringo"
        description="Read Ringo's Terms of Service. Understand your rights and responsibilities when using our global eSIM services."
        canonical="/terms"
      />
      <Navigation currentPage="terms" />

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
                <FileText className="h-8 w-8 text-blue-500 mr-2" />
                <h1 className="text-4xl font-bold">Terms of Service</h1>
              </div>
              <p className="text-muted-foreground">
                Last updated: January 16, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Ringo's eSIM services ("Service"), you agree to be bound by these Terms of Service ("Terms").
                  If you do not agree to these Terms, you may not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ringo provides global eSIM connectivity services that allow you to maintain your existing phone number
                  while adding international data and communication capabilities. Our Service includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>eSIM profile provisioning and management</li>
                  <li>Global data connectivity through partner networks</li>
                  <li>Voice and SMS services in supported regions</li>
                  <li>Mobile application for service management</li>
                  <li>Customer support and technical assistance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Eligibility and Account Registration</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>You must be at least 18 years old to use our Service</li>
                      <li>You must have a compatible eSIM-enabled device</li>
                      <li>You must provide accurate and complete registration information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Account Security</h3>
                    <p className="text-muted-foreground">
                      You are responsible for maintaining the confidentiality of your account credentials and
                      for all activities that occur under your account.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Service Plans and Billing</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Subscription Plans</h3>
                    <p className="text-muted-foreground mb-2">
                      We offer various subscription plans with different data allowances, call minutes, and features.
                      Plan details and pricing are available on our website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Billing and Payments</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Subscription fees are billed in advance on a recurring basis</li>
                      <li>All fees are non-refundable except as required by law</li>
                      <li>We may change pricing with 30 days' notice</li>
                      <li>Failure to pay may result in service suspension or termination</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Pilot Program and Product Availability</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-900 mb-2">Important Notice - Pilot Program</h3>
                      <p className="text-amber-800 text-sm leading-relaxed mb-3">
                        <strong>Ringo is currently in development and no products are yet available for purchase.</strong>
                        This website serves as a demonstration of our upcoming service and projected features.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pilot Program Participation</h3>
                    <p className="text-muted-foreground mb-3">
                      By joining our waitlist, you acknowledge and agree that:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>You are expressing interest in participating in our Proof of Concept (POC) program</li>
                      <li>No products or services are currently available for purchase</li>
                      <li>Waitlist members will receive priority access to participate in our pilot program when available</li>
                      <li>Pilot program participants may receive special perks, early access pricing, and exclusive features</li>
                      <li>Participation in the pilot program is subject to device compatibility, geographic availability, and program capacity</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pricing and Service Projections</h3>
                    <p className="text-muted-foreground mb-3">
                      All pricing information displayed on this website is projected and subject to change:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Projected Pricing:</strong> All prices shown (including €39.90/month and €3.50/day) are estimates for planning purposes only</li>
                      <li><strong>Subject to Change:</strong> Final pricing, features, and service availability may differ significantly from projections</li>
                      <li><strong>No Price Guarantee:</strong> Waitlist membership does not guarantee access to projected pricing</li>
                      <li><strong>Market Conditions:</strong> Actual pricing will depend on regulatory requirements, partner agreements, and market conditions</li>
                      <li><strong>Notification:</strong> Waitlist members will be notified of final pricing before any purchase commitment</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Waitlist Benefits and Perks</h3>
                    <p className="text-muted-foreground mb-3">
                      Waitlist members may be eligible for the following benefits when the service launches:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Early Access:</strong> Priority invitation to join the pilot program and beta testing</li>
                      <li><strong>Special Pricing:</strong> Potential access to launch pricing or early adopter discounts</li>
                      <li><strong>Exclusive Features:</strong> First access to new features and service enhancements</li>
                      <li><strong>Priority Support:</strong> Enhanced customer support during pilot and launch phases</li>
                      <li><strong>Feedback Influence:</strong> Opportunity to influence product development through pilot feedback</li>
                      <li><strong>No Commitment:</strong> Waitlist membership creates no obligation to purchase when service becomes available</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Timeline and Availability</h3>
                    <p className="text-muted-foreground">
                      We do not guarantee any specific timeline for service launch or pilot program availability.
                      Development timelines may change based on technical requirements, regulatory approvals, and market conditions.
                      Waitlist members will be notified of significant updates and launch announcements.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Acceptable Use Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use our Service only for lawful purposes and in accordance with these Terms. You may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Attempt to gain unauthorized access to other accounts or systems</li>
                  <li>Use the Service to transmit spam, malware, or harmful content</li>
                  <li>Resell or redistribute the Service without authorization</li>
                  <li>Use automated systems to access the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Service Availability and Performance</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Network Coverage</h3>
                    <p className="text-muted-foreground">
                      Service availability depends on network coverage from our partner carriers.
                      We do not guarantee service availability in all locations or at all times.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Service Limitations</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Data speeds may vary based on network conditions</li>
                      <li>Some services may not be available in certain countries</li>
                      <li>Emergency services may have limitations when roaming</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Privacy and Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Our collection and use of personal information is governed by our
                  Privacy Policy, which is incorporated into these Terms by reference.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Service and all related content, features, and functionality are owned by Ringo and are protected
                  by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Ringo shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including but not limited to loss of profits, data,
                  or business interruption.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Either party may terminate the service agreement at any time:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>You may cancel your subscription through your account settings</li>
                    <li>We may terminate or suspend your account for violation of these Terms</li>
                    <li>Service continues until the end of your current billing period</li>
                    <li>Certain provisions of these Terms survive termination</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes
                  via email or through the Service. Continued use of the Service after changes constitutes acceptance
                  of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="font-medium">Ringo Legal Team</p>
                  <p className="text-muted-foreground">Email: info@ringoesim.com</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;