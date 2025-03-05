
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ImageIcon, VideoIcon, Wand2, DownloadIcon, Share2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContentCreation = () => {
  const [activeTab, setActiveTab] = useState("image");
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [style, setStyle] = useState("photorealistic");
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!prompt) {
      toast({
        title: "Empty prompt",
        description: "Please enter a prompt to generate content",
        variant: "destructive",
      });
      return;
    }

    setGenerating(true);
    setResult(null);

    // Simulate content generation
    setTimeout(() => {
      const mockImageUrls = {
        photorealistic: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
        cartoon: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
        abstract: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
        portrait: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      };
      
      const mockVideoUrls = {
        cinematic: "https://example.com/video-placeholder.mp4",
        animation: "https://example.com/animation-placeholder.mp4",
        timelapse: "https://example.com/timelapse-placeholder.mp4",
      };
      
      if (activeTab === "image") {
        setResult(mockImageUrls[style as keyof typeof mockImageUrls]);
      } else {
        setResult(mockVideoUrls[style as keyof typeof mockVideoUrls]);
      }
      
      setGenerating(false);
      
      toast({
        title: `${activeTab === "image" ? "Image" : "Video"} Generated`,
        description: `Your ${activeTab} has been created successfully`,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-white">Content Creation</h1>
        
        <Tabs defaultValue="image" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 bg-zinc-800/50">
            <TabsTrigger value="image" className="data-[state=active]:bg-blue-600">
              <ImageIcon className="mr-2" size={18} /> Image Generation
            </TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-blue-600">
              <VideoIcon className="mr-2" size={18} /> Video Generation
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-zinc-400 mb-2">Prompt</label>
                <Textarea
                  placeholder={`Describe the ${activeTab} you want to create...`}
                  className="h-32 bg-zinc-800/50 border-zinc-700 text-white"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Style</label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger className="bg-zinc-800/50 border-zinc-700">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    {activeTab === "image" ? (
                      <>
                        <SelectItem value="photorealistic">Photorealistic</SelectItem>
                        <SelectItem value="cartoon">Cartoon</SelectItem>
                        <SelectItem value="abstract">Abstract</SelectItem>
                        <SelectItem value="portrait">Portrait</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="cinematic">Cinematic</SelectItem>
                        <SelectItem value="animation">Animation</SelectItem>
                        <SelectItem value="timelapse">Timelapse</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
                
                <Button 
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                  onClick={handleGenerate}
                  disabled={generating || !prompt}
                >
                  <Wand2 className="mr-2" size={18} />
                  {generating ? `Generating ${activeTab}...` : `Generate ${activeTab}`}
                </Button>
              </div>
            </div>
            
            {result && (
              <div className="mt-8 border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900">
                <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                  <h3 className="font-medium text-white">Generated {activeTab}</h3>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <DownloadIcon size={16} className="mr-1" /> Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 size={16} className="mr-1" /> Share
                    </Button>
                  </div>
                </div>
                <div className="p-6 flex justify-center">
                  {activeTab === "image" ? (
                    <img 
                      src={result} 
                      alt="Generated content" 
                      className="max-h-[400px] rounded-md" 
                    />
                  ) : (
                    <div className="aspect-video w-full max-w-2xl bg-black rounded-md flex items-center justify-center text-zinc-500">
                      <VideoIcon size={48} />
                      <span className="ml-2">Video Preview (Placeholder)</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ContentCreation;
