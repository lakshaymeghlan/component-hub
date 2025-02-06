"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Copy,
  Check,
  Calendar as CalendarIcon,
  Search,
  Loader2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function MiscellaneousPage() {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});
  const [date, setDate] = useState<Date>();

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const components = [
    {
      id: "command-menu",
      title: "Command Menu",
      description: "A command menu for quick navigation and actions",
      preview: (
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Search className="mr-2 h-4 w-4" />
                <span>Search...</span>
              </CommandItem>
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      ),
      code: {
        react: `<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Search className="mr-2 h-4 w-4" />
        <span>Search...</span>
      </CommandItem>
      <CommandItem>
        <CalendarIcon className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        next: `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Search, Calendar as CalendarIcon } from "lucide-react"

export default function Page() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Search className="mr-2 h-4 w-4" />
            <span>Search...</span>
          </CommandItem>
          <CommandItem>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
      },
    },
    {
      id: "calendar",
      title: "Calendar",
      description: "A date picker component with month navigation",
      preview: (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      ),
      code: {
        react: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`,
        next: `import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function Page() {
  const [date, setDate] = useState<Date>()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`,
      },
    },
    {
      id: "date-picker",
      title: "Date Picker",
      description: "A popover date picker with calendar integration",
      preview: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? date.toLocaleDateString() : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      ),
      code: {
        react: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? date.toLocaleDateString() : "Pick a date"}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
    />
  </PopoverContent>
</Popover>`,
        next: `import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"

export default function Page() {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? date.toLocaleDateString() : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}`,
      },
    },
    {
      id: "separator",
      title: "Separator",
      description: "A visual separator for dividing content",
      preview: (
        <div className="flex items-center gap-4">
          <span>Left Section</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Right Section</span>
        </div>
      ),
      code: {
        react: `<div className="flex items-center gap-4">
  <span>Left Section</span>
  <Separator orientation="vertical" className="h-4" />
  <span>Right Section</span>
</div>`,
        next: `import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <span>Left Section</span>
      <Separator orientation="vertical" className="h-4" />
      <span>Right Section</span>
    </div>
  )
}`,
      },
    },
    {
      id: "loading-spinner",
      title: "Loading Spinner",
      description: "An animated spinner indicating loading state",
      preview: <Loader2 className="h-8 w-8 animate-spin text-primary" />,
      code: {
        react: `<Loader2 className="h-8 w-8 animate-spin text-primary" />`,
        next: `import { Loader2 } from "lucide-react"

export default function Page() {
  return <Loader2 className="h-8 w-8 animate-spin text-primary" />
}`,
      },
    },
  ];

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold">Miscellaneous Components</h1>
          <p className="text-muted-foreground">
            A collection of utility components for various UI needs.
          </p>
        </div>

        <div className="space-y-12">
          {components.map((component) => (
            <Card key={component.id} className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{component.title}</h2>
              <p className="text-muted-foreground mb-6">
                {component.description}
              </p>

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
                      onClick={() =>
                        copyToClipboard(
                          component.code.react,
                          `${component.id}-react`
                        )
                      }
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
                      onClick={() =>
                        copyToClipboard(
                          component.code.next,
                          `${component.id}-next`
                        )
                      }
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
