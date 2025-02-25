
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Bug } from "lucide-react";

const CodingSpace = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = () => {
    setOutput("Running code...");
    // Add actual code execution logic here
  };

  const handleDebug = () => {
    setOutput("Debugging code...");
    // Add actual debugging logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Code Editor</h2>
            <div className="flex gap-2">
              <Button
                onClick={handleRun}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Play className="w-4 h-4 mr-2" />
                Run
              </Button>
              <Button
                onClick={handleDebug}
                variant="outline"
                className="border-zinc-700 text-zinc-300"
              >
                <Bug className="w-4 h-4 mr-2" />
                Debug
              </Button>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[600px] rounded-lg bg-zinc-900 border border-zinc-800 p-4 font-mono text-white"
            placeholder="Write your code here..."
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Output</h2>
          <div className="h-[600px] rounded-lg bg-zinc-900 border border-zinc-800 p-4 font-mono text-white">
            {output || "Output will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingSpace;
