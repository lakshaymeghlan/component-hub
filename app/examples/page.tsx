"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Code2, ExternalLink } from "lucide-react";

export default function ExamplesPage() {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const examples = [
    {
      id: "authentication",
      title: "Authentication Form",
      description: "A simple authentication form with email and password fields.",
      preview: (
        <Card className="w-full max-w-sm p-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
            <Button className="w-full">Sign In</Button>
          </form>
        </Card>
      ),
      code: {
        react: `<Card className="w-full max-w-sm p-6">
  <form className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
    <Button className="w-full">Sign In</Button>
  </form>
</Card>`,
      }
    },
    {
      id: "dialog-form",
      title: "Dialog Form",
      description: "A dialog containing a form for user input.",
      preview: (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Edit Profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter your username" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: {
        react: `<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Enter your username" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
      }
    },
    {
      id: "settings-page",
      title: "Settings Page",
      description: "A settings page layout with multiple sections.",
      preview: (
        <Card className="w-full p-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium">Profile</h4>
              <p className="text-sm text-muted-foreground">
                Manage your profile settings and preferences.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input id="display-name" placeholder="Enter your display name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" placeholder="Write a short bio" />
              </div>
              <Button>Save Changes</Button>
            </div>
          </div>
        </Card>
      ),
      code: {
        react: `<Card className="w-full p-6">
  <div className="space-y-6">
    <div>
      <h4 className="text-sm font-medium">Profile</h4>
      <p className="text-sm text-muted-foreground">
        Manage your profile settings and preferences.
      </p>
    </div>
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="display-name">Display Name</Label>
        <Input id="display-name" placeholder="Enter your display name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="bio">Bio</Label>
        <Input id="bio" placeholder="Write a short bio" />
      </div>
      <Button>Save Changes</Button>
    </div>
  </div>
</Card>`,
      }
    }
  ];

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Examples</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Collection of example patterns and components built with the library.
          </p>
        </div>

        <div className="grid gap-8">
          {examples.map((example) => (
            <Card key={example.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold">{example.title}</h2>
                  <p className="text-muted-foreground">{example.description}</p>
                </div>
                <Button variant="outline" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="preview" className="p-6 border rounded-lg">
                  <div className="flex items-center justify-center">
                    {example.preview}
                  </div>
                </TabsContent>
                
                <TabsContent value="code">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-4"
                      onClick={() => copyToClipboard(example.code.react, example.id)}
                    >
                      {copied[example.id] ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                      <pre className="text-sm">
                        <code>{example.code.react}</code>
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