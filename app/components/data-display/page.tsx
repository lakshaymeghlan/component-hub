"use client";

import React,{ useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Copy, Check, AlertCircle, Bell, User } from "lucide-react";

export default function DataDisplayPage() {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  // Simulate progress
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const components = [
    {
      id: "accordion",
      title: "Accordion",
      description: "A vertically stacked set of interactive headings",
      preview: (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches your theme.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
      code: {
        react: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches your theme.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
        next: `"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches your theme.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`
      }
    },
    {
      id: "badge",
      title: "Badge",
      description: "Displays a badge or a component that looks like a badge",
      preview: (
        <div className="flex gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      ),
      code: {
        react: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`,
        next: `import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`
      }
    },
    {
      id: "alert",
      title: "Alert",
      description: "Displays a callout for user attention",
      preview: (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      ),
      code: {
        react: `<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`,
        next: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function Page() {
  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}`
      }
    },
    {
      id: "toast",
      title: "Toast",
      description: "A toast component for displaying notifications",
      preview: (
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2024 at 5:57 PM",
            });
          }}
        >
          Show Toast
        </Button>
      ),
      code: {
        react: `import { useToast } from "@/hooks/use-toast"

function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2024 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}`,
        next: `"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function Page() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2024 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}`
      }
    },
    {
      id: "avatar",
      title: "Avatar",
      description: "An image element with a fallback for representing the user",
      preview: (
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/joe.png" alt="@joe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      ),
      code: {
        react: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
        next: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Page() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`
      }
    },
     {
      id: "progress",
      title: "Progress Bar",
      description: "Displays an indicator showing completion percentage",
      preview: (
        <div className="w-full space-y-2">
          <Progress value={progress} className="w-full" />
          <div className="flex gap-2">
            <Button onClick={() => setProgress(25)} size="sm">
              25%
            </Button>
            <Button onClick={() => setProgress(50)} size="sm">
              50%
            </Button>
            <Button onClick={() => setProgress(75)} size="sm">
              75%
            </Button>
          </div>
        </div>
      ),
      code: {
        react: `const [progress, setProgress] = useState(33)

<div className="w-full space-y-2">
  <Progress value={progress} className="w-full" />
  <div className="flex gap-2">
    <Button onClick={() => setProgress(25)} size="sm">25%</Button>
    <Button onClick={() => setProgress(50)} size="sm">50%</Button>
    <Button onClick={() => setProgress(75)} size="sm">75%</Button>
  </div>
</div>`,
        next: `import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Page() {
  const [progress, setProgress] = useState(33)

  return (
    <div className="w-full space-y-2">
      <Progress value={progress} className="w-full" />
      <div className="flex gap-2">
        <Button onClick={() => setProgress(25)} size="sm">25%</Button>
        <Button onClick={() => setProgress(50)} size="sm">50%</Button>
        <Button onClick={() => setProgress(75)} size="sm">75%</Button>
      </div>
    </div>
  )
}`
      },
    },
    {
      id: "skeleton",
      title: "Skeleton",
      description: "Used to show a placeholder while content is loading",
      preview: (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ),
      code: {
        react: `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
        next: `import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
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
          <h1 className="text-3xl font-bold">Data Display Components</h1>
          <p className="text-muted-foreground">
            A collection of components for displaying data in various formats.
          </p>
        </div>

        <div className="space-y-12">
          {components.map((component) => (
            <Card key={component?.id} className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{component?.title}</h2>
              <p className="text-muted-foreground mb-6">{component?.description}</p>
              
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="next">Next.js</TabsTrigger>
                </TabsList>
                
                <TabsContent value="preview" className="p-6 border rounded-lg">
                  {component?.preview}
                </TabsContent>
                
                <TabsContent value="react">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-4"
                      onClick={() => copyToClipboard(component?.code?.next || '', `${component?.id}-next`)}
                    >
                      {copied[`${component?.id}-react`] ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                      <pre className="text-sm">
                        <code>{component?.code.react}</code>
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
                      onClick={() => copyToClipboard(component?.code?.next || '', `${component?.id}-next`)}
                    >
                      {copied[`${component?.id}-next`] ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                      <pre className="text-sm">
                        <code>{component?.code.next}</code>
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