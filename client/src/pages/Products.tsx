import { Card, CardContent } from "@/components/ui/card";

export default function Products() {
  const products = [
    {
      name: "Heavy-Duty Floor Scrubber",
      description: "Professional-grade floor cleaning solution for large commercial spaces.",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Heavy-duty industrial floor scrubber",
      testId: "product-floor-scrubber"
    },
    {
      name: "Steel Wool Scrub Pads",
      description: "High-performance steel wool pads for tough cleaning applications.",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Industrial steel wool scrubbing pads",
      testId: "product-steel-pads"
    },
    {
      name: "Eco-Friendly Sponge Set",
      description: "Sustainable cleaning sponges made from natural materials.",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Eco-friendly cleaning sponges",
      testId: "product-eco-sponges"
    },
    {
      name: "Industrial Brush Set",
      description: "Durable brushes designed for industrial cleaning applications.",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Industrial cleaning brushes",
      testId: "product-brush-set"
    },
    {
      name: "Abrasive Scrub Sheets",
      description: "Heavy-duty abrasive sheets for removing tough stains and buildup.",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Abrasive scrubbing materials",
      testId: "product-abrasive-sheets"
    },
    {
      name: "Complete Cleaning Kit",
      description: "Comprehensive set of scrubbers for all your cleaning needs.",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Multi-purpose cleaning kit",
      testId: "product-complete-kit"
    }
  ];

  return (
    <div className="pt-[70px]">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-deep-black">
            Our Products
          </h2>
          <p className="text-center text-medium-gray text-lg max-w-2xl mx-auto mb-12">
            Professional-grade scrubbers designed for every cleaning challenge
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="product-card bg-white shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                data-testid={product.testId}
              >
                <div className="h-48 bg-light-gray overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-deep-black">{product.name}</h3>
                  <p className="text-medium-gray mb-4 leading-relaxed">{product.description}</p>
                  <div className="text-primary-yellow font-bold text-xl">{product.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
