
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Globe, Rocket, Newspaper } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Access state-of-the-art language models at affordable prices",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Build and deploy AI solutions that scale worldwide",
    },
    {
      icon: Rocket,
      title: "Fast Development",
      description: "Create custom AI agents and applications in minutes",
    },
  ];

  const blogPosts = [
    {
      title: "The Future of AI: BetaBlu's Vision",
      description: "Discover how we're making advanced AI accessible to everyone",
      date: "March 15, 2024",
      image: "/blog-1.jpg",
    },
    {
      title: "Building Smarter AI Agents",
      description: "Learn about our latest developments in AI agent technology",
      date: "March 12, 2024",
      image: "/blog-2.jpg",
    },
    {
      title: "AI Democratization",
      description: "How BetaBlu is making AI affordable for businesses",
      date: "March 10, 2024",
      image: "/blog-3.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              The Future of AI is Here
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
              Creating the world's smartest and most affordable LLM platform. Experience the next generation of AI technology.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={() => navigate("/chat")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg"
              >
                Try BetaBlu Now
                <ArrowRight className="ml-2" />
              </Button>
              <Button
                onClick={() => navigate("/pricing")}
                size="lg"
                variant="outline"
                className="border-zinc-700 text-lg hover:bg-zinc-800"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose BetaBlu?</h2>
            <p className="text-zinc-400 text-lg">Experience the most advanced AI technology at your fingertips</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Latest from BetaBlu</h2>
              <p className="text-zinc-400">Stay updated with the latest in AI technology</p>
            </div>
            <Button
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-800"
              onClick={() => navigate("/blog")}
            >
              <Newspaper className="mr-2" />
              View All Posts
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group cursor-pointer"
                onClick={() => navigate(`/blog/${index + 1}`)}
              >
                <div className="aspect-video rounded-lg bg-zinc-900 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="space-y-2">
                  <time className="text-sm text-zinc-500">{post.date}</time>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the AI Revolution
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Experience the future of AI technology with BetaBlu. Start building smarter applications today.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg"
            onClick={() => navigate("/signup")}
          >
            Get Started for Free
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
