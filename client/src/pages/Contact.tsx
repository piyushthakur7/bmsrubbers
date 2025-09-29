import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <div className="pt-[70px]">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-deep-black">
            Contact Us
          </h2>
          <p className="text-center text-medium-gray text-lg max-w-2xl mx-auto mb-12">
            Get in touch with our team for inquiries, support, or custom solutions
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-light-gray shadow-light">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-deep-black">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-deep-black font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary-yellow focus:border-primary-yellow"
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-deep-black font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary-yellow focus:border-primary-yellow"
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-deep-black font-semibold">
                      Company (Optional)
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary-yellow focus:border-primary-yellow"
                      data-testid="input-company"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-deep-black font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      required
                      className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary-yellow focus:border-primary-yellow resize-none"
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-deep-black hover:bg-dark-charcoal text-white py-3 transition-all duration-300 hover:-translate-y-0.5"
                    data-testid="button-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white shadow-light">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-deep-black">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4" data-testid="contact-address">
                    <MapPin className="h-6 w-6 text-primary-yellow mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-deep-black">Address</strong>
                      <p className="text-medium-gray mt-1">
                        123 Industrial Drive<br />
                        Manufacturing District, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-phone">
                    <Phone className="h-6 w-6 text-primary-yellow mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-deep-black">Phone</strong>
                      <p className="text-medium-gray mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-email">
                    <Mail className="h-6 w-6 text-primary-yellow mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-deep-black">Email</strong>
                      <p className="text-medium-gray mt-1">info@bmscrubber.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-hours">
                    <Clock className="h-6 w-6 text-primary-yellow mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-deep-black">Business Hours</strong>
                      <p className="text-medium-gray mt-1">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    data-testid="whatsapp-contact-button"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Support
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
