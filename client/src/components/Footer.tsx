import { Link } from "wouter";
import { MessageCircle, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="text-primary-yellow text-xl font-semibold mb-4">BM Scrubber</h3>
            <p className="text-gray-300 mb-4">
              Leading manufacturer of high-quality industrial cleaning solutions. Efficient cleaning, smarter spaces.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-yellow transition-colors"
                data-testid="footer-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-yellow transition-colors"
                data-testid="footer-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-yellow transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-yellow transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="text-primary-yellow text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-link-home">
                Home
              </Link>
              <Link href="/about" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-link-about">
                About Us
              </Link>
              <Link href="/products" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-link-products">
                Products
              </Link>
              <Link href="/contact" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-link-contact">
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h3 className="text-primary-yellow text-xl font-semibold mb-4">Products</h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-product-floor">
                Floor Scrubbers
              </Link>
              <Link href="/products" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-product-steel">
                Steel Wool Pads
              </Link>
              <Link href="/products" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-product-eco">
                Eco-Friendly Options
              </Link>
              <Link href="/products" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-product-brushes">
                Industrial Brushes
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3 className="text-primary-yellow text-xl font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link href="/faq" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-support-faq">
                FAQ
              </Link>
              <Link href="/contact" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-support-service">
                Customer Service
              </Link>
              <a href="#" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-support-warranty">
                Warranty
              </a>
              <a href="#" className="block text-white hover:text-primary-yellow transition-colors" data-testid="footer-support-technical">
                Technical Support
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-dark-charcoal pt-8 text-center text-gray-400">
          <p>&copy; 2024 BM Scrubber. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
