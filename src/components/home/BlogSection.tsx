import { Link } from "react-router-dom";
import { blog1, blog2, blog3 } from "@/assets/blog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LazyImage from "@/components/LazyImage";

const BlogSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const posts = [
    { id: 1, title: "Modern Construction Techniques for Nigerian Climate", category: "Construction", date: { month: "Jul", day: "28" }, image: blog1, slug: "modern-construction-techniques" },
    { id: 2, title: "Architectural Trends Shaping Nigerian Homes in 2024", category: "Architecture", date: { month: "Jul", day: "25" }, image: blog2, slug: "architectural-trends-2024" },
    { id: 3, title: "Building Your Dream Home: A Complete Guide", category: "Building Tips", date: { month: "Jul", day: "22" }, image: blog3, slug: "building-dream-home-guide" },
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className={`text-center mb-10 sm:mb-12 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">Construction & Architecture Insights</h2>
          <p className="section-subtitle">Expert tips and trends from our team</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {posts.map((post, index) => (
            <article 
              key={post.id} 
              className={`group transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <LazyImage 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-center shadow-md">
                  <span className="block text-sm font-display font-bold text-heading leading-tight">{post.date.day}</span>
                  <span className="block text-[10px] text-muted-foreground uppercase">{post.date.month}</span>
                </div>
              </div>
              <span className="text-primary text-xs font-semibold uppercase tracking-wide">{post.category}</span>
              <Link to={`/blog/${post.slug}`}>
                <h3 className="font-display font-semibold text-base text-heading mt-1.5 transition-colors duration-300 group-hover:text-primary line-clamp-2 leading-snug">
                  {post.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
