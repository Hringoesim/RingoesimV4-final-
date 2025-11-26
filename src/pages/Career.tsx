import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Users, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Career = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage="careers" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Join Our Mission</h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Help us revolutionize global connectivity and build the future of travel communication
              </p>
            </div>
          </div>
        </section>

        {/* Career Opportunity */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Join Our Mission?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're building something revolutionary in the global connectivity space. 
                If you're passionate about technology, travel, and making a real impact, we'd love to hear from you.
              </p>
              
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl">Send Us Your CV</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-gray-600 text-lg">
                    Please send over your CV at <strong>info@ringoesim.com</strong>
                  </p>
                  
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-6 text-lg"
                    onClick={() => window.location.href = 'mailto:info@ringoesim.com?subject=Career Opportunity - CV Submission&body=Hi Ringo team,%0D%0A%0D%0AI am interested in joining your mission and would like to submit my CV for consideration.%0D%0A%0D%0APlease find my CV attached.%0D%0A%0D%0ABest regards'}
                  >
                    Send Your CV
                  </Button>
                  
                  <p className="text-sm text-gray-500">
                    Include your CV as an attachment and tell us why you want to join Ringo
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Join Ringo */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Ringo?</h2>
              <p className="text-xl text-gray-600">Be part of the team that's changing how the world stays connected</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Global Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Work on technology that connects people across 180+ countries worldwide.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Push the boundaries of what's possible in global connectivity and eSIM technology.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Small Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Make a real difference in a growing startup where every contribution matters.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Global Offices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Possible office locations in London, San Francisco, and other locations TBA.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join us in building the future of global connectivity. Send us your CV today.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-6 text-lg"
              onClick={() => window.location.href = 'mailto:info@ringoesim.com?subject=Career Opportunity - CV Submission&body=Hi Ringo team,%0D%0A%0D%0AI am interested in joining your mission and would like to submit my CV for consideration.%0D%0A%0D%0APlease find my CV attached.%0D%0A%0D%0ABest regards'}
            >
              Send Your CV Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Career;