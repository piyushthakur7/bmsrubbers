import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How do I maintain my BM Scrubber products?",
      answer: "Regular maintenance involves rinsing with clean water after each use, allowing to air dry completely, and storing in a clean, dry environment. For deep cleaning, use mild detergent and warm water monthly.",
      testId: "faq-maintenance"
    },
    {
      question: "What warranty do you offer on your products?",
      answer: "We offer a comprehensive 2-year warranty on all industrial-grade products and 1-year warranty on consumer products. This covers manufacturing defects and premature wear under normal usage conditions.",
      testId: "faq-warranty"
    },
    {
      question: "Are your products safe for food preparation areas?",
      answer: "Yes, our products are made from food-safe materials and comply with FDA regulations for food contact surfaces. They are ideal for commercial kitchens, restaurants, and food processing facilities.",
      testId: "faq-food-safe"
    },
    {
      question: "What makes BM Scrubber products eco-friendly?",
      answer: "Our products use sustainable materials, biodegradable components, and manufacturing processes that minimize environmental impact. We also offer recycling programs for used products.",
      testId: "faq-eco-friendly"
    },
    {
      question: "Do you offer bulk pricing for commercial orders?",
      answer: "Yes, we provide volume discounts for orders over 100 units. Contact our sales team for custom pricing on large commercial orders and long-term supply agreements.",
      testId: "faq-bulk-pricing"
    },
    {
      question: "How quickly can orders be shipped?",
      answer: "Standard orders ship within 1-2 business days. Express shipping options are available for urgent orders. Large commercial orders may require 3-5 business days for processing.",
      testId: "faq-shipping"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="pt-[70px]">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-deep-black">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-medium-gray text-lg max-w-2xl mx-auto mb-12">
            Find answers to common questions about our products and services
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 rounded-lg overflow-hidden" data-testid={faq.testId}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left"
                  data-testid={`${faq.testId}-question`}
                >
                  <div className="bg-light-gray hover:bg-gray-100 px-6 py-4 flex justify-between items-center transition-colors duration-300">
                    <span className="font-semibold text-deep-black">{faq.question}</span>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-primary-yellow transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary-yellow transition-transform duration-300" />
                    )}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  data-testid={`${faq.testId}-answer`}
                >
                  <CardContent className="px-6 py-4">
                    <p className="text-medium-gray leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
