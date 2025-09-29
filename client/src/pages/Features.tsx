import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Hammer, Factory, Clock, DollarSign, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Made from sustainable materials with biodegradable components that minimize environmental impact while maintaining superior cleaning performance.",
      testId: "feature-eco"
    },
    {
      icon: Hammer,
      title: "Durable Construction",
      description: "Engineered with high-grade materials and reinforced structures to withstand heavy-duty use in demanding industrial environments.",
      testId: "feature-durable"
    },
    {
      icon: Factory,
      title: "Industrial-Grade",
      description: "Meets and exceeds industry standards for commercial and industrial applications with certified quality assurance testing.",
      testId: "feature-industrial"
    },
    {
      icon: Clock,
      title: "Long-Lasting",
      description: "Superior longevity with extended service life that reduces replacement costs and maintenance downtime significantly.",
      testId: "feature-lasting"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Optimal price-to-performance ratio with competitive pricing and exceptional value for money across our entire product range.",
      testId: "feature-cost"
    },
    {
      icon: Shield,
      title: "Safe for Use",
      description: "Non-toxic materials and ergonomic design ensure user safety while delivering powerful cleaning results in all applications.",
      testId: "feature-safe"
    }
  ];

  return (
    <div className="pt-[70px]">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-deep-black">
            Product Features
          </h2>
          <p className="text-center text-medium-gray text-lg max-w-2xl mx-auto mb-12">
            Discover the advanced features that make BM Scrubber the preferred choice for professionals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index}
                  className="feature-card bg-white shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary-yellow"
                  data-testid={feature.testId}
                >
                  <CardContent className="p-8">
                    <IconComponent className="h-10 w-10 text-primary-yellow mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-deep-black">{feature.title}</h3>
                    <p className="text-medium-gray leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
