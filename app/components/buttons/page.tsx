"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Download,
  Send,
  Plus,
  Trash,
  Heart,
  Share2,
  Loader2,
  Check,
  Copy,
} from "lucide-react";

export default function ButtonsPage() {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});
  const [loading, setLoading] = useState<{[key: string]: boolean}>({});

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const simulateLoading = (id: string) => {
    setLoading({ ...loading, [id]: true });
    setTimeout(() => {
      setLoading({ ...loading, [id]: false });
    }, 2000);
  };

  const buttons = [
    {
      id: "primary",
      title: "Primary Buttons",
      description: "Standard button variations with different styles",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link Style</Button>
        </div>
      ),
      code: {
        react: `<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link Style</Button>`,
        next: `import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link Style</Button>
    </div>
  )
}`
      }
    },
    {
      id: "icons",
      title: "Icon Buttons",
      description: "Buttons with icons in different positions",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button>
            <ArrowRight className="mr-2 h-4 w-4" /> Continue
          </Button>
          <Button variant="secondary">
            Download <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button>
            <Send className="mr-2 h-4 w-4" /> Send
          </Button>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="destructive" size="icon">
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
      code: {
        react: `<Button>
  <ArrowRight className="mr-2 h-4 w-4" /> Continue
</Button>
<Button variant="secondary">
  Download <Download className="ml-2 h-4 w-4" />
</Button>
<Button>
  <Send className="mr-2 h-4 w-4" /> Send
</Button>
<Button variant="outline" size="icon">
  <Plus className="h-4 w-4" />
</Button>
<Button variant="destructive" size="icon">
  <Trash className="h-4 w-4" />
</Button>`,
        next: `import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Send, Plus, Trash } from "lucide-react"

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button>
        <ArrowRight className="mr-2 h-4 w-4" /> Continue
      </Button>
      <Button variant="secondary">
        Download <Download className="ml-2 h-4 w-4" />
      </Button>
      <Button>
        <Send className="mr-2 h-4 w-4" /> Send
      </Button>
      <Button variant="outline" size="icon">
        <Plus className="h-4 w-4" />
      </Button>
      <Button variant="destructive" size="icon">
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  )
}`
      }
    },
    {
      id: "states",
      title: "Button States",
      description: "Buttons in different states including loading and disabled",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => simulateLoading("loading1")}
            disabled={loading["loading1"]}
          >
            {loading["loading1"] ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Click me"
            )}
          </Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
          <Button
            variant="secondary"
            onClick={() => simulateLoading("loading2")}
            disabled={loading["loading2"]}
          >
            {loading["loading2"] ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      ),
      code: {
        react: `const [loading, setLoading] = useState(false)

<Button
  onClick={() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }}
  disabled={loading}
>
  {loading ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </>
  ) : (
    "Click me"
  )}
</Button>
<Button disabled>Disabled</Button>
<Button variant="outline" disabled>
  Disabled Outline
</Button>`,
        next: `"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function Page() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex gap-4">
      <Button
        onClick={() => {
          setLoading(true)
          setTimeout(() => setLoading(false), 2000)
        }}
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          "Click me"
        )}
      </Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </div>
  )
}`
      }
    },
    {
      id: "animated",
      title: "Animated Buttons",
      description: "Buttons with hover animations and transitions",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button className="transition-all hover:scale-105 hover:shadow-lg">
            Scale on Hover
          </Button>
          <Button
            variant="secondary"
            className="transition-all hover:rotate-3 hover:shadow-lg"
          >
            Rotate on Hover
          </Button>
          <Button
            variant="outline"
            className="group relative overflow-hidden"
          >
            <span className="relative z-10">Slide Effect</span>
            <div className="absolute inset-0 bg-primary transform -translate-x-full transition-transform group-hover:translate-x-0" />
          </Button>
          <Button className="group relative">
            <span className="absolute right-0 translate-x-[100%] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="transition-all group-hover:translate-x-[-10px]">
              Slide Icon
            </span>
          </Button>
        </div>
      ),
      code: {
        react: `<Button className="transition-all hover:scale-105 hover:shadow-lg">
  Scale on Hover
</Button>

<Button
  variant="secondary"
  className="transition-all hover:rotate-3 hover:shadow-lg"
>
  Rotate on Hover
</Button>

<Button
  variant="outline"
  className="group relative overflow-hidden"
>
  <span className="relative z-10">Slide Effect</span>
  <div className="absolute inset-0 bg-primary transform -translate-x-full 
    transition-transform group-hover:translate-x-0" />
</Button>

<Button className="group relative">
  <span className="absolute right-0 translate-x-[100%] opacity-0 
    transition-all group-hover:translate-x-0 group-hover:opacity-100">
    <ArrowRight className="h-4 w-4" />
  </span>
  <span className="transition-all group-hover:translate-x-[-10px]">
    Slide Icon
  </span>
</Button>`,
        next: `import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button className="transition-all hover:scale-105 hover:shadow-lg">
        Scale on Hover
      </Button>
      
      <Button
        variant="secondary"
        className="transition-all hover:rotate-3 hover:shadow-lg"
      >
        Rotate on Hover
      </Button>
      
      <Button
        variant="outline"
        className="group relative overflow-hidden"
      >
        <span className="relative z-10">Slide Effect</span>
        <div className="absolute inset-0 bg-primary transform -translate-x-full 
          transition-transform group-hover:translate-x-0" />
      </Button>
      
      <Button className="group relative">
        <span className="absolute right-0 translate-x-[100%] opacity-0 
          transition-all group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowRight className="h-4 w-4" />
        </span>
        <span className="transition-all group-hover:translate-x-[-10px]">
          Slide Icon
        </span>
      </Button>
    </div>
  )
}`
      }
    },
    {
      id: "social",
      title: "Social Buttons",
      description: "Social media-style interaction buttons",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="group hover:bg-pink-50 dark:hover:bg-pink-950"
          >
            <Heart className="mr-2 h-4 w-4 transition-colors group-hover:text-pink-500" />
            <span className="transition-colors group-hover:text-pink-500">
              Like
            </span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="group hover:bg-blue-50 dark:hover:bg-blue-950"
          >
            <Share2 className="mr-2 h-4 w-4 transition-colors group-hover:text-blue-500" />
            <span className="transition-colors group-hover:text-blue-500">
              Share
            </span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="group hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950"
          >
            <Plus className="mr-2 h-4 w-4 transition-colors group-hover:text-green-500" />
            <span className="transition-colors group-hover:text-green-500">
              Follow
            </span>
          </Button>
        </div>
      ),
      code: {
        react: `<Button
  variant="ghost"
  size="sm"
  className="group hover:bg-pink-50 dark:hover:bg-pink-950"
>
  <Heart className="mr-2 h-4 w-4 transition-colors group-hover:text-pink-500" />
  <span className="transition-colors group-hover:text-pink-500">Like</span>
</Button>

<Button
  variant="ghost"
  size="sm"
  className="group hover:bg-blue-50 dark:hover:bg-blue-950"
>
  <Share2 className="mr-2 h-4 w-4 transition-colors group-hover:text-blue-500" />
  <span className="transition-colors group-hover:text-blue-500">Share</span>
</Button>

<Button
  variant="outline"
  size="sm"
  className="group hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950"
>
  <Plus className="mr-2 h-4 w-4 transition-colors group-hover:text-green-500" />
  <span className="transition-colors group-hover:text-green-500">Follow</span>
</Button>`,
        next: `import { Button } from "@/components/ui/button"
import { Heart, Share2, Plus } from "lucide-react"

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button
        variant="ghost"
        size="sm"
        className="group hover:bg-pink-50 dark:hover:bg-pink-950"
      >
        <Heart className="mr-2 h-4 w-4 transition-colors group-hover:text-pink-500" />
        <span className="transition-colors group-hover:text-pink-500">Like</span>
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className="group hover:bg-blue-50 dark:hover:bg-blue-950"
      >
        <Share2 className="mr-2 h-4 w-4 transition-colors group-hover:text-blue-500" />
        <span className="transition-colors group-hover:text-blue-500">Share</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="group hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950"
      >
        <Plus className="mr-2 h-4 w-4 transition-colors group-hover:text-green-500" />
        <span className="transition-colors group-hover:text-green-500">Follow</span>
      </Button>
    </div>
  )
}`
      }
    }
  ];

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold">Button Components</h1>
          <p className="text-muted-foreground">
            A collection of beautiful and reusable button components with various styles,
            animations, and states.
          </p>
        </div>

        <div className="space-y-12">
          {buttons.map((button) => (
            <Card key={button.id} className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{button.title}</h2>
              <p className="text-muted-foreground mb-6">{button.description}</p>
              
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="next">Next.js</TabsTrigger>
                </TabsList>
                
                <TabsContent value="preview" className="p-6 border rounded-lg">
                  {button.preview}
                </TabsContent>
                
                <TabsContent value="react">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-4"
                      onClick={() => copyToClipboard(button.code.react, `${button.id}-react`)}
                    >
                      {copied[`${button.id}-react`] ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                      <pre className="text-sm">
                        <code>{button.code.react}</code>
                      </pre>
                    </ScrollArea>
                  </div>
                </TabsContent>
                
                <TabsContent value="next">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-4"
                      onClick={() => copyToClipboard(button.code.next, `${button.id}-next`)}
                    >
                      {copied[`${button.id}-next`] ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                      <pre className="text-sm">
                        <code>{button.code.next}</code>
                      </pre>
                    </ScrollArea>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}