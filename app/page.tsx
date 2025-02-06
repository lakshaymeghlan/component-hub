"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ChevronDown, 
  // Moon, 
  // Sun, 
  Menu,
  Copy,
  Check,
  Github
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});
  const [sliderValue, setSliderValue] = useState([50]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const copyToClipboard = async (code: string, section: string) => {
    await navigator.clipboard.writeText(code);
    setCopied({ ...copied, [section]: true });
    setTimeout(() => {
      setCopied({ ...copied, [section]: false });
    }, 2000);
  };

  const components = [
    {
      id: "buttons",
      title: "Animated Buttons",
      preview: (
        <div className="flex gap-4 flex-wrap">
          <Button
            className="transition-all hover:scale-105 hover:shadow-lg"
            variant="default"
          >
            Hover Me
          </Button>
          <Button
            className="transition-all hover:rotate-3 hover:shadow-lg"
            variant="secondary"
          >
            Rotate
          </Button>
          <Button
            className="group relative overflow-hidden"
            variant="outline"
          >
            <span className="relative z-10">Slide Effect</span>
            <div className="absolute inset-0 bg-primary transform -translate-x-full transition-transform group-hover:translate-x-0" />
          </Button>
        </div>
      ),
      code: `<Button className="transition-all hover:scale-105">
  Hover Me
</Button>

<Button className="transition-all hover:rotate-3">
  Rotate
</Button>

<Button className="group relative overflow-hidden">
  <span className="relative z-10">Slide Effect</span>
  <div className="absolute inset-0 bg-primary transform -translate-x-full 
    transition-transform group-hover:translate-x-0" />
</Button>`
    },
    {
      id: "slider",
      title: "Interactive Slider",
      preview: (
        <div className="w-full max-w-sm">
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={100}
            step={1}
            className="w-full"
          />
          <p className="mt-2 text-sm text-muted-foreground">
            Value: {sliderValue}
          </p>
        </div>
      ),
      code: `const [sliderValue, setSliderValue] = useState([50]);

<Slider
  value={sliderValue}
  onValueChange={setSliderValue}
  max={100}
  step={1}
/>`
    },
    {
      id: "navbar",
      title: "Responsive Navbar",
      preview: (
        <nav className="w-full bg-card p-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Github className="h-6 w-6" />
              <span className="font-bold">ComponentHub</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Components</Button>
              <Button variant="ghost">Docs</Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          {isMenuOpen && (
            <div className="mt-4 space-y-2 md:hidden">
              <Button variant="ghost" className="w-full justify-start">
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Components
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Docs
              </Button>
            </div>
          )}
        </nav>
      ),
      code: `<nav className="w-full bg-card p-4 rounded-lg shadow-lg">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <Github className="h-6 w-6" />
      <span className="font-bold">ComponentHub</span>
    </div>
    <div className="hidden md:flex space-x-4">
      <Button variant="ghost">Home</Button>
      <Button variant="ghost">Components</Button>
      <Button variant="ghost">Docs</Button>
    </div>
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <Menu className="h-5 w-5" />
    </Button>
  </div>
  {isMenuOpen && (
    <div className="mt-4 space-y-2 md:hidden">
      <Button variant="ghost" className="w-full justify-start">
        Home
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Components
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Docs
      </Button>
    </div>
  )}
</nav>`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">ComponentHub</h1>
            <div className="flex items-center space-x-4">
              {/* <Button variant="ghost" size="icon">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button> */}
              {/* <Button>
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Interactive Component Showcase</h2>
          <p className="text-muted-foreground mb-12">
            Explore our collection of beautiful, animated components. Each component comes with
            a live preview and copy-paste ready code.
          </p>

          <div className="space-y-12">
            {components.map((component) => (
              <Card key={component.id} className="p-6">
                <h3 className="text-2xl font-semibold mb-6">{component.title}</h3>
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="p-6 border rounded-lg">
                    {component.preview}
                  </TabsContent>
                  <TabsContent value="code">
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-4"
                        onClick={() => copyToClipboard(component.code, component.id)}
                      >
                        {copied[component.id] ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                      <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                        <pre className="text-sm">
                          <code>{component.code}</code>
                        </pre>
                      </ScrollArea>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}