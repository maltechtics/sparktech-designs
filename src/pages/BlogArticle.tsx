import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import constructionImage from "@/assets/construction-site.jpg";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "future-sustainable-construction-nigeria",
    title: "The Future of Sustainable Construction in Nigeria",
    excerpt: "Explore how eco-friendly building practices are shaping the Nigerian construction industry and what it means for homeowners and developers.",
    content: [
      "The Nigerian construction industry is undergoing a significant transformation as sustainability becomes a key priority for developers, homeowners, and policymakers alike. With growing awareness of environmental issues and the need for energy-efficient buildings, sustainable construction practices are no longer optional but essential.",
      "One of the most notable trends is the adoption of green building materials. Local manufacturers are now producing eco-friendly alternatives to traditional materials, including recycled steel, sustainable timber, and energy-efficient insulation. These materials not only reduce environmental impact but also offer long-term cost savings through improved energy efficiency.",
      "Solar energy integration has become increasingly popular in Nigerian construction. With abundant sunshine throughout the year, solar panels are being incorporated into building designs from the planning stage. This approach allows homeowners to significantly reduce their dependence on the national grid while contributing to a cleaner environment.",
      "Water conservation is another critical aspect of sustainable construction in Nigeria. Rainwater harvesting systems, greywater recycling, and water-efficient fixtures are becoming standard features in new developments. These systems help address water scarcity issues while reducing utility costs for building occupants.",
      "The government has also begun implementing green building standards and certifications. Organizations like the Green Building Council of Nigeria are working to establish guidelines that encourage sustainable practices. Developers who adhere to these standards often receive incentives such as tax breaks and expedited approval processes.",
      "Looking ahead, the future of sustainable construction in Nigeria appears promising. With continued investment in green technologies, training for construction professionals, and supportive policies, the industry is well-positioned to lead Africa's transition to sustainable built environments.",
    ],
    image: constructionImage,
    author: "Adebayo Johnson",
    authorRole: "Senior Construction Engineer",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Sustainability",
    tags: ["Sustainability", "Green Building", "Construction", "Environment"],
  },
  {
    id: 2,
    slug: "modern-construction-techniques-nigerian-climate",
    title: "Modern Construction Techniques for Nigerian Climate",
    excerpt: "Learn about the latest building techniques designed to withstand Nigeria's unique climate challenges.",
    content: [
      "Nigeria's diverse climate presents unique challenges for construction professionals. From the humid tropical conditions of the south to the hot, arid climate of the north, buildings must be designed and constructed to withstand varying environmental conditions while providing comfort for occupants.",
      "One of the most effective modern techniques is the use of thermal mass construction. This approach involves using materials that absorb heat during the day and release it slowly at night, helping to regulate indoor temperatures naturally. Concrete blocks, rammed earth, and stabilized mud bricks are excellent examples of high thermal mass materials.",
      "Proper ventilation design is crucial for buildings in Nigeria's hot and humid regions. Cross-ventilation strategies, where windows and openings are positioned to maximize natural airflow, can significantly reduce the need for air conditioning. Architects are now incorporating wind catchers and ventilation towers inspired by traditional African architecture.",
      "Roof design plays a critical role in climate-responsive construction. Extended eaves and overhangs provide shade and protect walls from direct sunlight and heavy rainfall. Reflective roofing materials and proper insulation help keep buildings cool while reducing energy consumption.",
      "Foundation engineering has evolved to address Nigeria's soil conditions. In areas with expansive clay soils, engineers now use techniques such as pier and beam foundations, reinforced concrete rafts, and ground improvement methods to prevent structural issues caused by soil movement.",
      "These modern techniques, combined with quality materials and skilled craftsmanship, ensure that buildings in Nigeria are not only durable but also comfortable and energy-efficient for generations to come.",
    ],
    image: blog1,
    author: "Chioma Okafor",
    authorRole: "Structural Engineer",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Construction",
    tags: ["Construction", "Climate", "Engineering", "Building Techniques"],
  },
  {
    id: 3,
    slug: "architectural-trends-nigerian-homes-2024",
    title: "Architectural Trends Shaping Nigerian Homes in 2024",
    excerpt: "Discover the architectural styles and design elements that are defining modern Nigerian residential architecture.",
    content: [
      "The architectural landscape of Nigerian homes has evolved dramatically over the past decade. Today's homeowners are seeking designs that blend contemporary aesthetics with cultural heritage, resulting in unique residential styles that reflect Nigeria's rich architectural diversity.",
      "Minimalist modern design has gained significant traction among Nigerian homeowners. Clean lines, open floor plans, and neutral color palettes create sophisticated living spaces that feel both spacious and elegant. Large windows and glass elements maximize natural light while maintaining privacy through strategic positioning.",
      "The integration of indoor and outdoor living spaces is a defining trend in 2024. Covered patios, outdoor kitchens, and landscaped courtyards extend living areas beyond the building's walls. These spaces are designed to take advantage of Nigeria's favorable climate while providing areas for relaxation and entertainment.",
      "Traditional Nigerian architectural elements are being reinterpreted in contemporary designs. Courtyard-centered layouts, inspired by traditional compound housing, are making a comeback. Decorative screens featuring geometric patterns reminiscent of traditional motifs add character while providing shade and privacy.",
      "Smart home technology integration is now a standard consideration in luxury residential design. From automated lighting and climate control to security systems and entertainment, homes are being designed with the infrastructure to support connected living from day one.",
      "Sustainability is influencing architectural decisions at every level. Green roofs, solar orientation, natural ventilation, and locally sourced materials are being incorporated into designs that are both beautiful and environmentally responsible. This trend reflects a growing awareness of the environmental impact of construction.",
    ],
    image: blog2,
    author: "Emeka Nwachukwu",
    authorRole: "Lead Architect",
    date: "December 5, 2024",
    readTime: "5 min read",
    category: "Architecture",
    tags: ["Architecture", "Design", "Trends", "Residential"],
  },
  {
    id: 4,
    slug: "building-dream-home-complete-guide",
    title: "Building Your Dream Home: A Complete Guide",
    excerpt: "A comprehensive guide to navigating the home building process in Nigeria from land acquisition to finishing.",
    content: [
      "Building your dream home in Nigeria is an exciting journey that requires careful planning and execution. This comprehensive guide will walk you through each stage of the process, from acquiring land to handing over the keys to your new home.",
      "Land acquisition is the first and often most critical step. Conduct thorough due diligence to verify ownership, check for encumbrances, and ensure the land has proper titles such as Certificate of Occupancy (C of O) or Governor's Consent. Engage a qualified surveyor to confirm boundaries and a lawyer to handle documentation.",
      "Once you've secured land, the next step is designing your home. Work with a qualified architect who understands your lifestyle, budget, and preferences. Share your ideas, inspiration images, and requirements. The architect will create preliminary designs, and together you'll refine them until you're satisfied with the final plans.",
      "Obtaining necessary approvals and permits is essential before breaking ground. This typically includes development permits, building plan approval, and environmental impact assessments where required. Your architect or a project manager can help navigate this process with the relevant authorities.",
      "Selecting the right contractor is crucial for project success. Seek recommendations, review portfolios of completed projects, and check references. Ensure the contractor is registered with relevant professional bodies. Once selected, establish a clear contract that outlines scope, timeline, payment terms, and warranties.",
      "During construction, maintain regular site visits and open communication with your project team. Establish milestones and conduct inspections at key stages. Document everything with photos and written records. Upon completion, conduct a thorough final inspection before accepting the building and obtaining your Certificate of Completion.",
    ],
    image: blog3,
    author: "Fatima Ahmed",
    authorRole: "Project Manager",
    date: "November 28, 2024",
    readTime: "10 min read",
    category: "Guide",
    tags: ["Guide", "Home Building", "Construction", "Tips"],
  },
  {
    id: 5,
    slug: "understanding-construction-costs-lagos",
    title: "Understanding Construction Costs in Lagos",
    excerpt: "Break down of construction costs per square meter and factors that affect your building budget in Lagos.",
    content: [
      "Understanding construction costs in Lagos is essential for anyone planning to build. With prices varying significantly based on location, materials, and finish quality, having a clear picture of what to expect can help you plan your budget effectively.",
      "As of 2024, construction costs in Lagos range from ₦150,000 to ₦500,000+ per square meter. Standard construction with basic finishes typically costs ₦150,000 - ₦200,000/sqm. Premium construction with quality finishes ranges from ₦200,000 - ₦350,000/sqm. Luxury construction with high-end finishes can exceed ₦350,000 - ₦500,000+/sqm.",
      "Several factors influence these costs. Location plays a significant role – construction in areas like Lekki, Ikoyi, or Victoria Island often costs more due to logistics, labor costs, and local regulations. Mainland areas like Yaba, Surulere, or Ikeja may offer slightly lower costs.",
      "Material selection is a major cost driver. Premium materials like imported tiles, high-end sanitaryware, and specialized finishes significantly increase costs. However, quality local alternatives are available for many building materials, offering good value without compromising on durability.",
      "Foundation requirements can substantially affect your budget. In areas with challenging soil conditions, such as waterlogged or sandy terrain, you may need specialized foundation solutions like piling or raft foundations, which can add significantly to your costs.",
      "To manage your budget effectively, prioritize essential features and be realistic about your requirements. Build a contingency fund of 10-15% for unexpected costs. Consider phased construction if budget constraints require it, and always work with experienced professionals who can help you make informed decisions.",
    ],
    image: property1,
    author: "Adebayo Johnson",
    authorRole: "Senior Construction Engineer",
    date: "November 20, 2024",
    readTime: "7 min read",
    category: "Budgeting",
    tags: ["Budgeting", "Costs", "Lagos", "Construction"],
  },
  {
    id: 6,
    slug: "renovation-vs-new-build",
    title: "Renovation vs. New Build: What's Right for You?",
    excerpt: "Weighing the pros and cons of renovating an existing property versus building from scratch in Nigeria.",
    content: [
      "Deciding between renovating an existing property or building from scratch is a significant decision that depends on various factors including budget, timeline, and personal preferences. Understanding the pros and cons of each approach can help you make the right choice for your situation.",
      "Renovation offers several advantages. If you already own property or can purchase one at a good price, renovation can be more cost-effective than building new. You can live in the property during renovation if the work is phased properly. Additionally, renovating preserves the character of established neighborhoods and existing mature landscaping.",
      "However, renovation comes with challenges. Older buildings may have hidden issues such as structural problems, outdated electrical or plumbing systems, or asbestos that can significantly increase costs. It can also be difficult to achieve modern layouts and features within existing structures.",
      "Building new gives you complete control over the design, layout, and materials. You can incorporate modern technologies, energy-efficient systems, and contemporary architectural features from the start. New builds also come with warranties and require less immediate maintenance.",
      "The main challenges with new builds are time and initial cost. Building from scratch typically takes 12-24 months, compared to 3-6 months for most renovations. Upfront costs are usually higher, though the total cost over the building's lifetime may be lower due to reduced maintenance and better efficiency.",
      "Consider your priorities carefully. If you value location and character, renovation might be right for you. If you prioritize modern features, energy efficiency, and customization, building new could be the better choice. Either way, work with experienced professionals who can provide accurate cost estimates and realistic timelines.",
    ],
    image: property2,
    author: "Chioma Okafor",
    authorRole: "Structural Engineer",
    date: "November 15, 2024",
    readTime: "6 min read",
    category: "Renovation",
    tags: ["Renovation", "New Build", "Decision Making", "Property"],
  },
  {
    id: 7,
    slug: "choosing-right-building-materials",
    title: "Choosing the Right Building Materials",
    excerpt: "A guide to selecting quality construction materials that offer durability and value for money.",
    content: [
      "Selecting the right building materials is one of the most important decisions you'll make during construction. Quality materials ensure durability, safety, and long-term value, while poor choices can lead to costly repairs and structural issues.",
      "When it comes to blocks, sandcrete blocks remain the most common choice in Nigeria. Look for blocks with compressive strength of at least 2.5 N/mm² for load-bearing walls. Consider hollow blocks for internal walls to reduce load and cost, and solid blocks for external and structural walls.",
      "Cement quality is critical for structural integrity. Use only reputable brands that meet Nigerian Industrial Standards (NIS). Store cement properly to prevent moisture damage, and never use cement that has started to harden or clump.",
      "Reinforcement steel (rebar) should meet strength requirements specified in structural drawings. Purchase from reputable suppliers and verify that the steel has been tested and certified. Avoid reusing steel from demolished buildings in structural applications.",
      "Roofing materials vary in cost and durability. Aluminum roofing sheets are popular for their durability and resistance to rust. Stone-coated steel tiles offer an elegant appearance with excellent durability but at a higher cost. Consider long-span roofing to minimize joints and potential leak points.",
      "For finishing materials, balance quality with budget. Invest more in high-traffic areas like flooring and bathroom fixtures. Choose paint from established manufacturers for better coverage and durability. Remember that quality materials often have lower lifetime costs due to reduced maintenance and replacement needs.",
    ],
    image: blog1,
    author: "Emeka Nwachukwu",
    authorRole: "Lead Architect",
    date: "November 10, 2024",
    readTime: "8 min read",
    category: "Materials",
    tags: ["Materials", "Construction", "Quality", "Guide"],
  },
];

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const article = blogPosts.find((post) => post.slug === slug);
  
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((post) => post.id !== article.id && post.category === article.category).slice(0, 2);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
            
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {article.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-heading mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User size={18} />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <img
              src={article.image}
              alt={article.title}
              className="w-full rounded-2xl shadow-xl aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            <article className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {article.content.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-foreground font-medium mr-2">Tags:</span>
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-foreground font-medium flex items-center gap-2">
                    <Share2 size={18} />
                    Share:
                  </span>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Author */}
              <div className="mt-8 p-8 bg-card rounded-2xl shadow-card">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xl font-display font-bold text-primary">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-heading text-lg">{article.author}</h4>
                    <p className="text-primary text-sm mb-2">{article.authorRole}</p>
                    <p className="text-muted-foreground text-sm">
                      A seasoned professional with years of experience in the Nigerian construction industry, dedicated to sharing knowledge and insights.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-card p-6 rounded-2xl shadow-card">
                    <h3 className="font-display font-semibold text-heading mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
                          <div className="flex gap-4">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-20 h-20 rounded-lg object-cover shrink-0"
                            />
                            <div>
                              <h4 className="font-medium text-heading text-sm line-clamp-2 group-hover:text-primary transition-colors">
                                {post.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">{post.readTime}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-primary text-primary-foreground p-6 rounded-2xl">
                  <h3 className="font-display font-semibold mb-2">Need Construction Help?</h3>
                  <p className="text-sm opacity-90 mb-4">Get expert advice for your building project.</p>
                  <Link to="/contact">
                    <Button variant="secondary" size="sm" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogArticle;
