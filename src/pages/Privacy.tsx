import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Privacy Policy - Ringo"
        description="Read Ringo's privacy policy to understand how we collect, use, and protect your personal information."
        canonical="/privacy"
      />
      {/* Navigation */}
      <header className="border-b">
        <div className="container-max">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-sunset">Ringo</span>
            </Link>

            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link to="/?join-waitlist=true">
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
                <p className="text-muted-foreground leading-relaxed">
                  At Ringo eSIM ("Ringo", "we", "our"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, store, use, and safeguard your data when you visit our website, join our waitlist, submit a contact form, or send a job application.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Ringo is currently operated by an individual founder. A registered company will be added once incorporated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Data Controller</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The individual responsible for your personal data is:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="font-medium">Hippolyte Van Marcke</p>
                  <p className="text-muted-foreground">Operating as Ringo eSIM</p>
                  <p className="text-muted-foreground">Email: info@ringoesim.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2.1. Waitlist Signup</h3>
                    <p className="text-muted-foreground mb-2">When you join the waitlist, we collect:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Full name (required)</li>
                      <li>Email address (required)</li>
                      <li>Timestamp of signup</li>
                      <li>Country (optional)</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-sm italic">
                      Stored securely in Supabase. We do not store IP addresses.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">2.2. Contact Form</h3>
                    <p className="text-muted-foreground mb-2">When you submit a contact form, we collect:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Full name (required)</li>
                      <li>Email address (required)</li>
                      <li>Your message</li>
                      <li>Timestamp</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-sm italic">
                      This information is processed via Resend (email delivery provider), and may be temporarily stored in our inbox for follow-up. Resend is used only for contact form and job application emails.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">2.3. Careers / Job Applications</h3>
                    <p className="text-muted-foreground mb-2">If you email a CV or job application to info@ringoesim.com, we may collect:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>CV, résumé, cover letter, portfolio</li>
                      <li>Employment/education history</li>
                      <li>Any other information voluntarily provided</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-sm italic">
                      Stored in our email system (via Resend delivery → inbox).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">2.4. Analytics (Google Analytics)</h3>
                    <p className="text-muted-foreground mb-2">We use Google Analytics (GA4) to understand website usage patterns. Google Analytics may collect:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Browser type</li>
                      <li>Device type</li>
                      <li>Pages viewed</li>
                      <li>Time spent on the site</li>
                      <li>General interaction data</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-sm italic">
                      IP addresses are anonymized automatically by GA4. No advertising or remarketing features are enabled.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">2.5. Technical Data Processed by Cloudflare</h3>
                    <p className="text-muted-foreground mb-2">Our domain and DNS are managed through Cloudflare. Cloudflare may temporarily process:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>IP addresses (for security filtering)</li>
                      <li>DNS requests</li>
                      <li>Traffic routing information</li>
                      <li>Basic security data (e.g., bot detection, DDoS protection)</li>
                    </ul>
                    <p className="text-muted-foreground mt-2 text-sm italic">
                      This happens automatically as part of Cloudflare’s infrastructure. We do not store IP addresses ourselves. Cloudflare processes this data solely for site security, content delivery (CDN), and performance optimization. Cloudflare is a GDPR-compliant service provider.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Waitlist</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Add you to our launch list</li>
                      <li>Notify you about updates</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Contact Form</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Respond to your inquiry</li>
                      <li>Provide support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Careers</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Review your application</li>
                      <li>Contact you regarding opportunities</li>
                      <li>Maintain a short-term talent pool (optional)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Analytics</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Improve website performance and design</li>
                      <li>Understand visitor behavior</li>
                      <li>Detect technical issues</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Cloudflare</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Protect the website from malicious traffic</li>
                      <li>Improve speed and reliability</li>
                    </ul>
                  </div>
                  <p className="text-muted-foreground font-medium mt-4">We never sell personal information.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing (GDPR)</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">We rely on Consent for:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Waitlist signup</li>
                      <li>Contact form</li>
                      <li>Job applications</li>
                      <li>Analytics cookies (if enabled)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">We rely on Legitimate Interest for:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Responding to messages</li>
                      <li>Reviewing applications</li>
                      <li>Ensuring website security through Cloudflare</li>
                      <li>Improving website functionality</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Data Sharing</h2>
                <p className="text-muted-foreground mb-4">We only share data with essential third-party providers:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Supabase:</strong> For storing waitlist and form data securely.</li>
                  <li><strong>Resend:</strong> For delivering contact form submissions and job applications.</li>
                  <li><strong>Google Analytics:</strong> For basic, anonymized analytics.</li>
                  <li><strong>Cloudflare:</strong> For DNS, security, caching, and performance enhancement.</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  None of these services sell your data. We do not use advertising trackers or social media pixels.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Waitlist:</strong> until Ringo launches or until deletion is requested</li>
                  <li><strong>Contact form:</strong> stored for up to 12 months</li>
                  <li><strong>Job applications:</strong> stored for up to 6 months</li>
                  <li><strong>Analytics:</strong> per Google Analytics retention settings (typically 14 months)</li>
                  <li><strong>Cloudflare logs:</strong> temporary and managed by Cloudflare’s internal policies</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You may request deletion at any time by emailing <a href="mailto:info@ringoesim.com" className="text-primary hover:underline">info@ringoesim.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground mb-2">You may request:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Access to your data</li>
                  <li>Correction</li>
                  <li>Deletion</li>
                  <li>Withdrawal of consent</li>
                  <li>Restriction or objection</li>
                  <li>A copy of your data (portability)</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Email: <a href="mailto:info@ringoesim.com" className="text-primary hover:underline">info@ringoesim.com</a>
                </p>
                <p className="text-muted-foreground mt-2">
                  If located in the EU, you may also file a complaint with your local Data Protection Authority.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Security</h2>
                <p className="text-muted-foreground mb-2">We implement reasonable measures to protect your data, including:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>HTTPS encryption</li>
                  <li>Secure storage in Supabase</li>
                  <li>Cloudflare security protection</li>
                  <li>Limited access to personal data</li>
                  <li>Use of reputable third-party providers</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  No online system is 100% secure, but we strive to protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Cookies</h2>
                <p className="text-muted-foreground mb-2">We may use:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Essential cookies:</strong> For website operation.</li>
                  <li><strong>Analytics cookies (Google Analytics):</strong> Only active with user consent (via cookie banner if enabled).</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  We do not use advertising, retargeting, or third-party tracking cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically. The date at the top of this page reflects the most recent update.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or your rights, contact:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="font-medium">Ringo Privacy Team</p>
                  <p className="text-muted-foreground">📩 <a href="mailto:info@ringoesim.com" className="hover:text-primary transition-colors">info@ringoesim.com</a></p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Privacy;