import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="pt-[70px]">
      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-deep-black">
            About BM Scrubber
          </h2>
          <p className="text-center text-medium-gray text-lg max-w-2xl mx-auto mb-12">
            Leading manufacturer of high-quality cleaning solutions for industrial and commercial applications
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-deep-black">Our Story</h3>
              <p className="text-medium-gray mb-6 leading-relaxed">
                Founded with a vision to revolutionize the cleaning industry, BM Scrubber has been at the forefront of innovative scrubber technology for over two decades. We combine traditional manufacturing excellence with cutting-edge materials science to create products that exceed industry standards.
              </p>
              <p className="text-medium-gray leading-relaxed">
                Our commitment to quality and customer satisfaction has made us a trusted partner for businesses across various industries, from healthcare facilities to manufacturing plants.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern industrial manufacturing facility"
                className="w-full rounded-lg shadow-medium"
                data-testid="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-deep-black">
            Our Mission & Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="value-card bg-white border-l-4 border-l-primary-yellow shadow-light" data-testid="value-quality">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2 text-deep-black">Quality First</h4>
                <p className="text-medium-gray">
                  Uncompromising commitment to manufacturing excellence and product reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="value-card bg-white border-l-4 border-l-primary-yellow shadow-light" data-testid="value-innovation">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2 text-deep-black">Innovation</h4>
                <p className="text-medium-gray">
                  Continuously advancing technology to meet evolving customer needs.
                </p>
              </CardContent>
            </Card>

            <Card className="value-card bg-white border-l-4 border-l-primary-yellow shadow-light" data-testid="value-sustainability">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2 text-deep-black">Sustainability</h4>
                <p className="text-medium-gray">
                  Responsible manufacturing practices that protect our environment.
                </p>
              </CardContent>
            </Card>

            <Card className="value-card bg-white border-l-4 border-l-primary-yellow shadow-light" data-testid="value-customer">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2 text-deep-black">Customer Focus</h4>
                <p className="text-medium-gray">
                  Building lasting partnerships through exceptional service and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
