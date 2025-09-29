import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Leaf, Shield, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-[70px]">
      {/* Hero Section */}
      <section className="hero-gradient hero-pattern py-16 text-center text-deep-black relative">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-4">
            BM Scrubber
          </h1>
          <p className="hero-tagline text-xl md:text-2xl mb-8 font-light">
            Efficient Cleaning, Smarter Spaces
          </p>
          <Link href="/products">
            <Button 
              size="lg" 
              className="hero-cta bg-deep-black hover:bg-dark-charcoal text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-medium"
              data-testid="hero-cta-button"
            >
              Explore Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-deep-black">
            Why Choose BM Scrubber?
          </h2>
          <p className="text-center text-medium-gray text-lg max-w-2xl mx-auto mb-12">
            Industry-leading cleaning solutions engineered for maximum efficiency and durability
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="highlight-card bg-white shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1" data-testid="highlight-industrial">
              <CardContent className="p-8 text-center">
                <Factory className="h-12 w-12 text-primary-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industrial Grade</h3>
                <p className="text-medium-gray">
                  Built to withstand the toughest industrial environments with superior performance.
                </p>
              </CardContent>
            </Card>

            <Card className="highlight-card bg-white shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1" data-testid="highlight-eco">
              <CardContent className="p-8 text-center">
                <Leaf className="h-12 w-12 text-primary-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-medium-gray">
                  Environmentally conscious materials that don't compromise on cleaning power.
                </p>
              </CardContent>
            </Card>

            <Card className="highlight-card bg-white shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1" data-testid="highlight-durable">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-primary-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Durable Design</h3>
                <p className="text-medium-gray">
                  Long-lasting construction that provides exceptional value and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="highlight-card bg-white shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1" data-testid="highlight-cost">
              <CardContent className="p-8 text-center">
                <DollarSign className="h-12 w-12 text-primary-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
                <p className="text-medium-gray">
                  Competitive pricing with superior performance for optimal return on investment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
