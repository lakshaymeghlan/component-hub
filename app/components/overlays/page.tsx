"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Copy, Check, Settings, User, Calendar } from "lucide-react";

export default function OverlaysPage() {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});
  const [open, setOpen] = useState(false);

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const components = [
    {
      id: "dialog",
      title: "Modal Dialog",
      description: "A modal dialog component for important content and actions",
      preview: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <p className="text-sm font-medium">Name</p>
                <input className="col-span-3 px-3 py-2 border rounded" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <p className="text-sm font-medium">Username</p>
                <input className="col-span-3 px-3 py-2 border rounded" />
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
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <p className="text-sm font-medium">Name</p>
        <input className="col-span-3 px-3 py-2 border rounded" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <p className="text-sm font-medium">Username</p>
        <input className="col-span-3 px-3 py-2 border rounded" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
        next: `"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Page() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-sm font-medium">Name</p>
            <input className="col-span-3 px-3 py-2 border rounded" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-sm font-medium">Username</p>
            <input className="col-span-3 px-3 py-2 border rounded" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`
      }
    },
    {
      id: "drawer",
      title: "Drawer",
      description: "A drawer component that slides in from the edge of the screen",
      preview: (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Edit Profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you're done.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Name</p>
                    <input className="w-full px-3 py-2 border rounded" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Username</p>
                    <input className="w-full px-3 py-2 border rounded" />
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button>Save changes</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      ),
      code: {
        react: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Edit Profile</DrawerTitle>
        <DrawerDescription>
          Make changes to your profile here. Click save when you're done.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Name</p>
            <input className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Username</p>
            <input className="w-full px-3 py-2 border rounded" />
          </div>
        </div>
      </div>
      <DrawerFooter>
        <Button>Save changes</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`,
        next: `"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function Page() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Edit Profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Name</p>
                <input className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Username</p>
                <input className="w-full px-3 py-2 border rounded" />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Save changes</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`
      }
    },
    {
      id: "popover",
      title: "Popover",
      description: "A popover component for displaying content in a floating box",
      preview: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <p className="text-sm">Width</p>
                  <input className="col-span-2 px-3 py-2 border rounded" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <p className="text-sm">Height</p>
                  <input className="col-span-2 px-3 py-2 border rounded" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ),
      code: {
        react: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <p className="text-sm">Width</p>
          <input className="col-span-2 px-3 py-2 border rounded" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <p className="text-sm">Height</p>
          <input className="col-span-2 px-3 py-2 border rounded" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`,
        next: `"use client"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Page() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <p className="text-sm">Width</p>
              <input className="col-span-2 px-3 py-2 border rounded" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <p className="text-sm">Height</p>
              <input className="col-span-2 px-3 py-2 border rounded" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}`
      }
    },
    {
      id: "tooltip",
      title: "Tooltip",
      description: "A tooltip component for displaying additional information",
      preview: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-10 p-0">
                <Settings className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Adjust settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      code: {
        react: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" className="w-10 p-0">
        <Settings className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Adjust settings</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
        next: `"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Settings } from "lucide-react"

export default function Page() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="w-10 p-0">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Adjust settings</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`
      }
    },
    {
      id: "hover-card",
      title: "Hover Card",
      description: "A card that appears when hovering over a trigger element",
      preview: (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <Calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ),
      code: {
        react: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <Calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
        next: `"use client"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Calendar } from "lucide-react"

export default function Page() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`
      }
    }
  ];

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold">Overlays & Popups</h1>
          <p className="text-muted-foreground">
            A collection of overlay and popup components for building interactive user interfaces.
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