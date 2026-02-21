import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import testimonial1 from "@/assets/team/testimonial-1.jpg";
import testimonial2 from "@/assets/team/testimonial-2.jpg";
import testimonial3 from "@/assets/team/testimonial-3.jpg";
import testimonial4 from "@/assets/team/testimonial-4.jpg";

const TestimonialsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const testimonials = [
    {
      id: 1,
      content: "Sparktech Designs built our dream home from scratch. Their attention to detail and commitment to quality exceeded our expectations. The team was professional throughout the entire process.",
      author: "Adaeze Okwu",
      role: "Homeowner",
      location: "Lagos",
      rating: 5,
      image: testimonial1,
    },
    {
      id: 2,
      content: "Finding the perfect commercial property in Abuja seemed impossible until we worked with Sparktech. They understood our needs and found us the ideal location for our business.",
      author: "Emeka Johnson",
      role: "Business Owner",
      location: "Abuja",
      rating: 5,
      image: testimonial2,
    },
    {
      id: 3,
      content: "The construction quality and real estate expertise combined made our investment property project a huge success. Highly recommend their services to anyone in Nigeria.",
      author: "Fatima Ahmed",
      role: "Property Investor",
      location: "Port Harcourt",
      rating: 5,
      image: testimonial3,
    },
    {
      id: 4,
      content: "Professional, reliable, and trustworthy. Sparktech helped us navigate the complex real estate market and delivered a beautifully constructed home on time and within budget.",
      author: "Olumide Bakare",
      role: "First-time Buyer",
      location: "Ibadan",
      rating: 5,
      image: testimonial4,
    },
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-12 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real stories from satisfied clients across Nigeria
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-card rounded-2xl p-5 sm:p-7 border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Quote Icon */}
              <Quote size={28} className="text-primary/15 mb-3" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-5">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                {/* Avatar */}
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-heading text-sm">{testimonial.author}</h5>
                  <p className="text-xs text-muted-foreground">{testimonial.role} · {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
