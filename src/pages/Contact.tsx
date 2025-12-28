import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Clock, Linkedin, ArrowLeft, Send, HelpCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import SEO from "@/components/SEO";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    inquiryType: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.inquiryType || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('contact_complete_2025_11_26_19_00', {
        body: {
          fullName: formData.fullName,
          email: formData.email,
          inquiryType: formData.inquiryType,
          subject: formData.subject,
          message: formData.message,
          type: 'contact'
        }
      });

      if (error) {
        throw error;
      }

      setIsSuccess(true);

      // Check email status
      if (data?.email_status?.user_auto_reply === 'failed') {
        toast({
          title: "Message Sent",
          description: "We received your message, but couldn't send the confirmation email. We'll still get back to you!",
          variant: "default",
        });
      } else {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
      }

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          inquiryType: "",
          subject: "",
          message: ""
        });
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Contact form error:', error);
      console.error('Full error details:', JSON.stringify(error, null, 2));

      let errorTitle = "Something went wrong";
      let errorMessage = "Please try again or contact us directly at info@ringoesim.com";

      // Check if there's a specific error message from the backend
      if (error && typeof error === 'object') {
        // Supabase function errors often have a context property
        if ('context' in error && error.context && typeof error.context === 'object' && 'body' in error.context) {
          try {
            const errorBody = typeof error.context.body === 'string'
              ? JSON.parse(error.context.body)
              : error.context.body;

            if (errorBody && typeof errorBody === 'object' && 'error' in errorBody) {
              errorMessage = String(errorBody.error);
              if ('details' in errorBody && errorBody.details) {
                errorMessage += `: ${errorBody.details}`;
              }
            }
          } catch (e) {
            console.error('Error parsing error body:', e);
          }
        }

        // Check for message property
        if ('message' in error && error.message) {
          const msg = String(error.message);
          if (msg.includes('Failed to fetch')) {
            errorMessage = "Network error. Please check your connection and try again.";
          } else if (msg.includes('FunctionsRelayError') || msg.includes('FunctionsHttpError')) {
            errorMessage = `Server error: ${msg}. Please contact support.`;
          } else if (!errorMessage.includes('Server error')) {
            errorMessage = msg;
          }
        }
      }

      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Contact Ringo - 24/7 Global Support"
        description="Have questions? Contact Ringo support for help with your eSIM, plans, or account. We're here to help you stay connected."
        canonical="/contact"
      />
      <Navigation currentPage="contact" onWaitlistOpen={() => setIsWaitlistOpen(true)} />
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-orange-100 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Us</h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Have questions about Ringo? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Send us a message</CardTitle>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </CardHeader>
                  <CardContent>
                    {isSuccess ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Full Name */}
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                              id="fullName"
                              type="text"
                              value={formData.fullName}
                              onChange={(e) => handleInputChange('fullName', e.target.value)}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>

                          {/* Email */}
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="Enter your email address"
                              required
                            />
                          </div>
                        </div>

                        {/* Inquiry Type */}
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="investor">💼 Investor</SelectItem>
                              <SelectItem value="partnership">🤝 Partner</SelectItem>
                              <SelectItem value="question">❓ I have a question</SelectItem>
                              <SelectItem value="technical">🔧 Technical Support</SelectItem>
                              <SelectItem value="media">📰 Media & Press</SelectItem>
                              <SelectItem value="feature">💡 Request a Feature</SelectItem>
                              <SelectItem value="other">📝 Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            type="text"
                            value={formData.subject}
                            onChange={(e) => handleInputChange('subject', e.target.value)}
                            placeholder="Enter the subject of your inquiry"
                            required
                          />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder="Tell us more about your inquiry..."
                            rows={6}
                            required
                          />
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>

                        {/* Privacy Notice */}
                        <p className="text-xs text-gray-500 text-center">
                          By sending this message, you agree to our privacy policy. We'll only use your information to respond to your inquiry.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 lg:col-span-1">
                {/* Email Support */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Mail className="h-5 w-5 text-orange-500 mr-2" />
                      Email Support
                    </CardTitle>
                    <p className="text-gray-600">Get help from our support team</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <a
                        href="mailto:info@ringoesim.com"
                        className="text-orange-500 hover:text-orange-600 font-medium"
                      >
                        info@ringoesim.com
                      </a>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        Response time: Within 24 hours
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* LinkedIn */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Linkedin className="h-5 w-5 text-blue-600 mr-2" />
                      LinkedIn
                    </CardTitle>
                    <p className="text-gray-600">Connect with us professionally</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <a
                        href="https://www.linkedin.com/company/ringoesim/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Follow us on LinkedIn
                      </a>
                      <p className="text-sm text-gray-600">Company updates and industry insights</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Inquiry Guidelines */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <HelpCircle className="h-5 w-5 text-green-500 mr-2" />
                      Inquiry Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-gray-900">For investors</h4>
                        <p className="text-gray-600">Please include your investment focus and ticket size</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">For partnerships</h4>
                        <p className="text-gray-600">Tell us about your company and how we can work together</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">For general questions</h4>
                        <p className="text-gray-600">Check our <Link to="/terms" className="text-orange-500 hover:underline">Terms of Service</Link></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
};

export default Contact;