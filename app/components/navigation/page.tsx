"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, ChevronRight, Home, Settings, User, Mail } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function NavigationPage() {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const components = [
    {
      id: "navbar",
      title: "Navigation Menu",
      description: "A responsive navigation menu with dropdowns",
      preview: (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Introduction
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A quick guide to get you started with our platform.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">Documentation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Detailed guides and API references.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">UI Components</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Beautiful and accessible components.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">Hooks</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Custom React hooks collection.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ),
      code: {
        react: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a className="flex h-full w-full select-none flex-col justify-end rounded-md 
                bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none 
                focus:shadow-md">
                <div className="mb-2 mt-4 text-lg font-medium">
                  Introduction
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  A quick guide to get you started with our platform.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <a className="block select-none space-y-1 rounded-md p-3 leading-none 
                no-underline outline-none transition-colors hover:bg-accent 
                hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Documentation</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Detailed guides and API references.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
          <li>
            <NavigationMenuLink asChild>
              <a className="block select-none space-y-1 rounded-md p-3 leading-none 
                no-underline outline-none transition-colors hover:bg-accent 
                hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">UI Components</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Beautiful and accessible components.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <a className="block select-none space-y-1 rounded-md p-3 leading-none 
                no-underline outline-none transition-colors hover:bg-accent 
                hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Hooks</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Custom React hooks collection.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
        next: `"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Page() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md 
                    bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none 
                    focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Introduction
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A quick guide to get you started with our platform.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a className="block select-none space-y-1 rounded-md p-3 leading-none 
                    no-underline outline-none transition-colors hover:bg-accent 
                    hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Documentation</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Detailed guides and API references.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <a className="block select-none space-y-1 rounded-md p-3 leading-none 
                    no-underline outline-none transition-colors hover:bg-accent 
                    hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">UI Components</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Beautiful and accessible components.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a className="block select-none space-y-1 rounded-md p-3 leading-none 
                    no-underline outline-none transition-colors hover:bg-accent 
                    hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Hooks</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Custom React hooks collection.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`
      }
    },
    {
      id: "breadcrumb",
      title: "Breadcrumb Navigation",
      description: "A breadcrumb navigation to show the current page location",
      preview: (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Navigation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      ),
      code: {
        react: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">
        <Home className="h-4 w-4" />
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <ChevronRight className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <ChevronRight className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Navigation</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        next: `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home } from "lucide-react"

export default function Page() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Navigation</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`
      }
    },
    {
      id: "pagination",
      title: "Pagination",
      description: "A pagination component for navigating through multiple pages",
      preview: (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ),
      code: {
        react: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
        next: `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function Page() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`
      }
    },
    {
      id: "tabs",
      title: "Tabs",
      description: "A set of layered sections of content that display one panel at a time",
      preview: (
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Account Settings</h4>
              <p className="text-sm text-muted-foreground">
                Update your account settings. Set your preferred language and timezone.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password" className="p-4">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Password Settings</h4>
              <p className="text-sm text-muted-foreground">
              Change your password here. After saving, you&apos;ll be logged out.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="p-4">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">General Settings</h4>
              <p className="text-sm text-muted-foreground">
                Configure your general application settings here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      ),
      code: {
        react: `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="p-4">
    <div className="space-y-4">
      <h4 className="text-sm font-medium">Account Settings</h4>
      <p className="text-sm text-muted-foreground">
        Update your account settings. Set your preferred language and timezone.
      </p>
    </div>
  </TabsContent>
  <TabsContent value="password" className="p-4">
    <div className="space-y-4">
      <h4 className="text-sm font-medium">Password Settings</h4>
      <p className="text-sm text-muted-foreground">
        Change your password here. After saving, you'll be logged out.
      </p>
    </div>
  </TabsContent>
  <TabsContent value="settings" className="p-4">
    <div className="space-y-4">
      <h4 className="text-sm font-medium">General Settings</h4>
      <p className="text-sm text-muted-foreground">
        Configure your general application settings here.
      </p>
    </div>
  </TabsContent>
</Tabs>`,
        next: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Account Settings</h4>
          <p className="text-sm text-muted-foreground">
            Update your account settings. Set your preferred language and timezone.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password" className="p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Password Settings</h4>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings" className="p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">General Settings</h4>
          <p className="text-sm text-muted-foreground">
            Configure your general application settings here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`
      }
    },
    {
      id: "sidebar",
      title: "Sidebar",
      description: "Vertical navigation menu",
      preview: (
        <div className="w-64 h-96 border rounded-lg p-4">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Mail className="mr-2 h-4 w-4" />
              Messages
            </Button>
          </nav>
        </div>
      ),
      code: {
        react: `<div className="w-64 h-screen">
  <nav className="space-y-2">
    <Button variant="ghost" className="w-full justify-start">
      <Home className="mr-2 h-4 w-4" />
      Dashboard
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <User className="mr-2 h-4 w-4" />
      Profile
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <Settings className="mr-2 h-4 w-4" />
      Settings
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <Mail className="mr-2 h-4 w-4" />
      Messages
    </Button>
  </nav>
</div>`,
        next: `import { Button } from "@/components/ui/button"
import { Home, User, Settings, Mail } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 h-screen">
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <User className="mr-2 h-4 w-4" />
          Profile
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Mail className="mr-2 h-4 w-4" />
          Messages
        </Button>
      </nav>
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
          <h1 className="text-3xl font-bold">Navigation Components</h1>
          <p className="text-muted-foreground">
            A collection of navigation components for building user interfaces.
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