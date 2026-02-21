import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { blog1, blog2, blog3 } from "@/assets/blog";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Future of Sustainable Construction in Nigeria",
    excerpt: "Explore how eco-friendly building practices are shaping the Nigerian construction industry and what it means for homeowners and developers.",
    image: blog1,
    author: "Sovon K. Borel",
    date: "December 15, 2024",
    readTime: "8 min read",
    slug: "future-sustainable-construction-nigeria",
  };

  const posts = [
    {
      id: 2,
      title: "Modern Construction Techniques for Nigerian Climate",
      excerpt: "Learn about the latest building techniques designed to withstand Nigeria's unique climate challenges.",
      image: blog2,
      author: "Sovon K. Borel",
      date: "December 10, 2024",
      readTime: "6 min read",
      slug: "modern-construction-techniques-nigerian-climate",
    },
    {
      id: 3,
      title: "Architectural Trends Shaping Nigerian Homes in 2024",
      excerpt: "Discover the architectural styles and design elements that are defining modern Nigerian residential architecture.",
      image: blog3,
      author: "Sovon K. Borel",
      date: "December 5, 2024",
      readTime: "5 min read",
      slug: "architectural-trends-nigerian-homes-2024",
    },
    {
      id: 4,
      title: "Building Your Dream Home: A Complete Guide",
      excerpt: "A comprehensive guide to navigating the home building process in Nigeria from land acquisition to finishing.",
      image: blog1,
      author: "Sovon K. Borel",
      date: "November 28, 2024",
      readTime: "10 min read",
      slug: "building-dream-home-complete-guide",
    },
    {
      id: 5,
      title: "Understanding Construction Costs in Lagos",
      excerpt: "Break down of construction costs per square meter and factors that affect your building budget in Lagos.",
      image: blog2,
      author: "Sovon K. Borel",
      date: "November 20, 2024",
      readTime: "7 min read",
      slug: "understanding-construction-costs-lagos",
    },
    {
      id: 6,
      title: "Choosing the Right Building Materials",
      excerpt: "A guide to selecting quality construction materials that offer durability and value for money.",
      image: blog3,
      author: "Sovon K. Borel",
      date: "November 10, 2024",
      readTime: "8 min read",
      slug: "choosing-right-building-materials",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-heading mb-6">
              Construction & Architecture <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert tips, industry trends, and guides from our experienced team
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <article className="group grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500">
            <div className="overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-heading mb-4 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <User size={14} />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {featuredPost.readTime}
                </span>
              </div>
              <Link to={`/blog/${featuredPost.slug}`}>
                <Button className="gap-2 w-fit">
                  Read Article
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <h3 className="text-2xl font-display font-bold text-heading mb-8">Latest Articles</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <Link to={`/blog/${post.slug}`}>
                    <h4 className="text-lg font-display font-semibold text-heading mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              Load More Articles
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
