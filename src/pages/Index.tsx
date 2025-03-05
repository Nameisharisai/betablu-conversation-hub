
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Brain, Globe, Rocket, ArrowRight, MessageCircle, Code, Settings, Shield, Users, Cpu } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Access state-of-the-art language models for a variety of use cases",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "GDPR-compliant, SOC 2 certified with Row Level Security",
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-900/30 text-blue-400 mb-4">
              <Cpu className="h-6 w-6" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500">
              India's First Advanced<br />AI Research Platform
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
              Building the next generation of AI technology with a focus on general intelligence and specialized coding capabilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => navigate("/signup")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto rounded-[24px]"
              >
                Get Started for Free
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/chat")}
                className="w-full sm:w-auto rounded-[24px] border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800"
              >
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 border-t border-zinc-800 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Choose BetaBlu?</h2>
            <p className="text-zinc-400 text-lg">
              Experience the most advanced AI technology at your fingertips
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-[24px] bg-zinc-800 border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
              >
                <div className="p-3 mb-4 inline-flex items-center justify-center rounded-lg bg-blue-900/20 text-blue-400">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Solutions</h2>
            <p className="text-zinc-400 text-lg">
              Explore our range of AI-powered tools designed to boost your productivity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group p-6 rounded-[24px] bg-zinc-800 border border-zinc-700 hover:border-blue-600 hover:bg-zinc-800/80 transition-all duration-300"
              >
                <div className="p-3 mb-4 inline-flex items-center justify-center rounded-lg bg-blue-900/20 text-blue-400">
                  <solution.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{solution.title}</h3>
                <p className="text-zinc-400 mb-4">{solution.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 p-0 hover:bg-transparent hover:text-blue-300 group-hover:translate-x-1 transition-transform"
                  onClick={() => navigate(solution.path)}
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 border-t border-zinc-800 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Pricing Plans</h2>
            <p className="text-zinc-400 text-lg">
              Choose the plan that works best for you and your team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-[24px] bg-zinc-800 border border-zinc-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Basic</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">Free</span>
                </div>
                <p className="mt-2 text-zinc-400">Perfect for getting started</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-zinc-300">
                  <CheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>5 Chats per month</span>
                </li>
                <li className="flex items-center text-zinc-300">
                  <CheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>5 Code generations per month</span>
                </li>
                <li className="flex items-center text-zinc-300">
                  <CheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>2 Video generations per month</span>
                </li>
                <li className="flex items-center text-zinc-300">
                  <CheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>1 Agent with 5 uses/month</span>
                </li>
              </ul>
              
              <Button 
                className="w-full py-6 rounded-[24px] bg-zinc-700 hover:bg-zinc-600 text-white"
                onClick={() => navigate("/signup")}
              >
                Get Started
              </Button>
            </div>
            
            <div className="p-6 rounded-[24px] bg-blue-900/20 border border-blue-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Pro</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">$14.99</span>
                  <span className="text-zinc-300">/month</span>
                </div>
                <p className="mt-2 text-zinc-300">For power users and teams</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-zinc-300">
                  <CheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Unlimited chats</span>
                </li>
                <li className="flex items-center text-zinc-300">
                  <CheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Unlimited code generations</span>
                </li>
                <li className="flex items-center text-zinc-300">
                  <CheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Unlimited video generations</span>
                </li>
                <li className="flex items-center text-zinc-300">
                  <CheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Unlimited agents</span>
                </li>
                <li className="flex items-center text-zinc-300">
                  <CheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
              
              <Button 
                className="w-full py-6 rounded-[24px] bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate("/signup")}
              >
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-zinc-800 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-900/30 text-blue-400 mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Building India's Future in AI
            </h2>
            <p className="text-lg text-zinc-400">
              Experience the future of AI technology with BetaBlu. Start building smarter applications today.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-[24px] py-6 px-8"
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

// Helper component for check icon
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default Index;
