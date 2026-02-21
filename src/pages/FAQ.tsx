import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "Construction",
      questions: [
        {
          question: "How long does it take to build a house?",
          answer: "The construction timeline depends on the size and complexity of the project. A typical 3-4 bedroom bungalow takes 6-9 months, while a duplex may take 9-12 months. Factors like weather, material availability, and design complexity can affect the timeline.",
        },
        {
          question: "Do you handle building permits and approvals?",
          answer: "Yes, we assist with obtaining all necessary building permits and approvals from relevant authorities. This includes development permits, building plan approvals, and environmental impact assessments where required.",
        },
        {
          question: "What materials do you use for construction?",
          answer: "We use quality materials sourced from reputable suppliers. This includes concrete, sandcrete blocks, reinforcement steel, roofing materials (stone-coated or aluminum), and finishing materials. We can also work with imported materials for luxury projects.",
        },
      ],
    },
    {
      category: "Architecture",
      questions: [
        {
          question: "Can you design a custom home based on my ideas?",
          answer: "Absolutely! Our architectural team specializes in custom home designs. We work closely with clients to understand their vision, lifestyle needs, and budget to create personalized architectural plans.",
        },
        {
          question: "Do you provide 3D visualizations?",
          answer: "Yes, we provide detailed 3D renderings and virtual walkthroughs of your project before construction begins. This helps you visualize the final outcome and make any necessary adjustments to the design.",
        },
        {
          question: "What is included in your architectural design package?",
          answer: "Our design package includes site analysis, conceptual designs, detailed architectural drawings, structural drawings, electrical and plumbing layouts, 3D visualizations, and construction documentation.",
        },
      ],
    },
    {
      category: "Property Sales",
      questions: [
        {
          question: "Do you help with property purchases?",
          answer: "Yes, as an added service, we help clients find and purchase quality properties. We can also facilitate the sale of properties for clients who wish to sell.",
        },
        {
          question: "Do you offer property management services?",
          answer: "Currently, we focus primarily on construction and property sales. However, we can recommend trusted property management partners for clients who need ongoing management services.",
        },
      ],
    },
  ];

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  let globalIndex = 0;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-heading mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about our construction and real estate services
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {filteredFaqs.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-xl font-display font-bold text-heading mb-6 pb-2 border-b border-border">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((faq) => {
                  const currentIndex = globalIndex++;
                  return (
                    <div
                      key={faq.question}
                      className="bg-card rounded-xl overflow-hidden shadow-card"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === currentIndex ? null : currentIndex)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                      >
                        <span className="font-medium text-heading pr-4">{faq.question}</span>
                        <ChevronDown
                          size={20}
                          className={`text-muted-foreground shrink-0 transition-transform duration-200 ${
                            openIndex === currentIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === currentIndex ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="px-5 pb-5 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No questions found matching your search.</p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-heading mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Can't find what you're looking for? Our team is here to help with any questions about your project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2">
              Contact Us
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;