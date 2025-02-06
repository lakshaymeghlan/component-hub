"use client";


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormsAuthPage() {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});
  const [showPassword, setShowPassword] = useState(false);

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const components = [
    {
      id: "basic-form",
      title: "Basic Form",
      description: "A simple form with validation and error handling",
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Enter your username" />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
          </FormItem>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
          </FormItem>
          <Button className="w-full">Submit</Button>
        </div>
      ),
      code: {
        react: `<div className="w-full max-w-sm space-y-4">
  <FormItem>
    <FormLabel>Username</FormLabel>
    <FormControl>
      <Input placeholder="Enter your username" />
    </FormControl>
    <FormDescription>
      This is your public display name.
    </FormDescription>
  </FormItem>
  <FormItem>
    <FormLabel>Email</FormLabel>
    <FormControl>
      <Input type="email" placeholder="Enter your email" />
    </FormControl>
  </FormItem>
  <Button className="w-full">Submit</Button>
</div>`,
        next: `import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function Page() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="Enter your username" />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
      </FormItem>
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
      </FormItem>
      <Button className="w-full">Submit</Button>
    </div>
  )
}`
      }
    },
    {
      id: "password-input",
      title: "Password Input",
      description: "A password input field with show/hide functionality",
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      ),
      code: {
        react: `const [showPassword, setShowPassword] = useState(false)

<div className="w-full max-w-sm space-y-4">
  <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <div className="relative">
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </Button>
    </div>
  </div>
</div>`,
        next: `import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}`
      }
    },
    {
      id: "otp-input",
      title: "OTP Input",
      description: "A one-time password input field with auto-focus",
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <Label>Enter OTP</Label>
            <div className="flex gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-10 h-10 text-center"
                  onChange={(e) => {
                    if (e.target.value.length === 1) {
                      const nextInput = e.target
                        .nextElementSibling as HTMLInputElement | null;
                      if (nextInput) nextInput.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !e.currentTarget.value) {
                      const prevInput = e.currentTarget
                        .previousElementSibling as HTMLInputElement | null;
                      if (prevInput) prevInput.focus();
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ),
      code: {
        react: `<div className="w-full max-w-sm space-y-4">
  <div className="space-y-2">
    <Label>Enter OTP</Label>
    <div className="flex gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <Input
          key={i}
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center"
        />
      ))}
    </div>
  </div>
</div>`,
        next: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label>Enter OTP</Label>
        <div className="flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Input
              key={i}
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center"
            />
          ))}
        </div>
      </div>
    </div>
  )
}`,
      },
    },
  ];

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold">Forms & Authentication Components</h1>
          <p className="text-muted-foreground">
            A collection of form and authentication components for building secure user interfaces.
          </p>
        </div>

        <div className="space-y-12">
          {components.map((component) => (
            <Card key={component.id} className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{component.title}</h2>
              <p className="text-muted-foreground mb-6">{component.description}</p>
              
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="next">Next.js</TabsTrigger>
                </TabsList>
                
                <TabsContent value="preview" className="p-6 border rounded-lg">
                  {component.preview}
                </TabsContent>
                
                <TabsContent value="react">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-4"
                      onClick={() => copyToClipboard(component.code.react, `${component.id}-react`)}
                    >
                      {copied[`${component.id}-react`] ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                      <pre className="text-sm">
                        <code>{component.code.react}</code>
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
                      onClick={() => copyToClipboard(component.code.next, `${component.id}-next`)}
                    >
                      {copied[`${component.id}-next`] ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                      <pre className="text-sm">
                        <code>{component.code.next}</code>
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