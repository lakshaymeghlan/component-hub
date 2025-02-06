"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";

export default function ButtonsInputsPage() {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});
  const [sliderValue, setSliderValue] = useState([50]);
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [togglePressed, setTogglePressed] = useState(false);

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const components = [
    {
      id: "button",
      title: "Button Variants",
      description: "Different button styles and variants",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      ),
      code: {
        react: `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`,
        next: `import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`
      }
    },
    {
      id: "input",
      title: "Input Fields",
      description: "Text input components with different states",
      preview: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="default">Default input</Label>
            <Input id="default" placeholder="Default input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled input</Label>
            <Input id="disabled" placeholder="Disabled input" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="flex gap-2">
            <Input placeholder="With button" />
            <Button>Send</Button>
          </div>
        </div>
      ),
      code: {
        react: `<div className="space-y-2">
  <Label htmlFor="default">Default input</Label>
  <Input id="default" placeholder="Default input" />
</div>
<div className="space-y-2">
  <Label htmlFor="disabled">Disabled input</Label>
  <Input id="disabled" placeholder="Disabled input" disabled />
</div>
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>
<div className="flex gap-2">
  <Input placeholder="With button" />
  <Button>Send</Button>
</div>`,
        next: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="default">Default input</Label>
        <Input id="default" placeholder="Default input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled input</Label>
        <Input id="disabled" placeholder="Disabled input" disabled />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="flex gap-2">
        <Input placeholder="With button" />
        <Button>Send</Button>
      </div>
    </div>
  )
}`
      }
    },
    {
      id: "select",
      title: "Select Component",
      description: "Dropdown select with custom styling",
      preview: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
              <SelectItem value="3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
      code: {
        react: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
    <SelectItem value="3">Option 3</SelectItem>
  </SelectContent>
</Select>`,
        next: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Page() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
        <SelectItem value="3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  )
}`
      }
    },
    {
      id: "checkbox",
      title: "Checkbox",
      description: "Interactive checkbox component",
      preview: (
        <div className="flex items-center space-x-2">
          <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={(value) => setChecked(value === "indeterminate" ? false : value)}
      />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      ),
      code: {
        react: `const [checked, setChecked] = useState(false)

<div className="flex items-center space-x-2">
  <Checkbox
    id="terms"
    checked={checked}
    onCheckedChange={setChecked}
  />
  <label
    htmlFor="terms"
    className="text-sm font-medium leading-none"
  >
    Accept terms and conditions
  </label>
</div>`,
        next: `"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export default function Page() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}`
      }
    },
    {
      id: "switch",
      title: "Switch",
      description: "Toggle switch component",
      preview: (
        <div className="flex items-center space-x-2">
          <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
          <Label>Airplane Mode</Label>
        </div>
      ),
      code: {
        react: `const [switchOn, setSwitchOn] = useState(false)

<div className="flex items-center space-x-2">
  <Switch
    checked={switchOn}
    onCheckedChange={setSwitchOn}
  />
  <Label>Airplane Mode</Label>
</div>`,
        next: `"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Page() {
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={switchOn}
        onCheckedChange={setSwitchOn}
      />
      <Label>Airplane Mode</Label>
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
          <h1 className="text-3xl font-bold">Buttons & Inputs</h1>
          <p className="text-muted-foreground">
            A collection of form controls and input components with various styles and states.
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