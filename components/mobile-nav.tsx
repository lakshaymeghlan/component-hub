"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";

const components: { title: string; href: string }[] = [
  {
    title: "Buttons",
    href: "/components/buttons",
  },
  {
    title: "Cards",
    href: "/components/cards",
  },
  {
    title: "Forms",
    href: "/components/forms",
  },
  {
    title: "Navigation",
    href: "/components/navigation",
  },
  {
    title: "Modals",
    href: "/components/modals",
  },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
            <div className="flex flex-col space-y-2">
              {components.map((component) => (
                <Link
                  key={component.href}
                  href={component.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === component.href && "bg-accent"
                  )}
                >
                  {component.title}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}