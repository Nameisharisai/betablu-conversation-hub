
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Brain, Globe, Rocket, ArrowRight, MessageCircle, Code, Settings } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Access state-of-the-art language models for a variety of use cases",
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

  const solutions = [
    {
      icon: MessageCircle,
      title: "AI Chat",
      description: "Interact with powerful AI models through a simple chat interface",
      path: "/chat",
    },
    {
      icon: Settings,
      title: "IntelliAgent Builder",
      description: "Build custom AI agents tailored to your specific needs",
      path: "/agent-builder",
    },
    {
      icon: Code,
      title: "Coding Space",
      description: "Get help with coding, debugging, and explaining complex code",
      path: "/coding-space",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent dark:from-blue-900/10 dark:to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              India's First Advanced<br />AI Research Platform
            </h1>
            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
              Building the next generation of AI technology with a focus on general intelligence and specialized coding capabilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => navigate("/signup")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              >
                Get Started for Free
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/chat")}
                className="w-full sm:w-auto"
              >
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose BetaBlu?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Experience the most advanced AI technology at your fingertips
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow"
              >
                <div className="p-3 mb-4 inline-flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Explore our range of AI-powered tools designed to boost your productivity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow"
              >
                <div className="p-3 mb-4 inline-flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <solution.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{solution.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-blue-600 dark:text-blue-400 p-0 hover:bg-transparent hover:text-blue-700 dark:hover:text-blue-300 group-hover:translate-x-1 transition-transform"
                  onClick={() => navigate(solution.path)}
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Building India's Future in AI
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Experience the future of AI technology with BetaBlu. Start building smarter applications today.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate("/signup")}
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
