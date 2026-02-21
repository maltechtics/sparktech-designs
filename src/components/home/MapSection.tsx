import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MapSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="map-section" ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Explore Our Project Locations</h2>
          <p className="section-subtitle">
            We build across Nigeria - contact us to discuss your project location
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-card rounded-2xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286354635!2d3.4206!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzE0LjIiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sparktech Designs Project Locations"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
