"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code2, Lightbulb, FileText, Github } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Documentation</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Comprehensive guides and documentation for building beautiful
            interfaces.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Getting Started Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <div className="prose dark:prose-invert">
              <p className="text-muted-foreground mb-4">
                Our component library is built on top of Tailwind CSS and
                provides a set of accessible, reusable, and composable
                components that make it easy to create beautiful web
                applications.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Code2 className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Installation</h3>
                    <p className="text-sm text-muted-foreground">
                      Install the dependencies and set up your project.
                    </p>
                    <ScrollArea className="h-[100px] w-full rounded-md border mt-2 bg-muted">
                      <pre className="p-4">
                        <code>{`npm install @radix-ui/react-icons
npm install @radix-ui/react-slot
npm install class-variance-authority
npm install clsx
npm install tailwind-merge`}</code>
                      </pre>
                    </ScrollArea>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Usage</h3>
                    <p className="text-sm text-muted-foreground">
                      Import and use components in your application.
                    </p>
                    <ScrollArea className="h-[100px] w-full rounded-md border mt-2 bg-muted">
                      <pre className="p-4">
                        <code>{`import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Click me</Button>
}`}</code>
                      </pre>
                    </ScrollArea>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Components API Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Components API</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Button</TableCell>
                  <TableCell>
                    <Badge>Stable</Badge>
                  </TableCell>
                  <TableCell>
                    Displays a button or a component that looks like a button.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Dialog</TableCell>
                  <TableCell>
                    <Badge>Stable</Badge>
                  </TableCell>
                  <TableCell>
                    A modal dialog that interrupts the user with important
                    content.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Navigation Menu</TableCell>
                  <TableCell>
                    <Badge>Stable</Badge>
                  </TableCell>
                  <TableCell>
                    A collection of navigation links for your website.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          {/* Contributing Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contributing</h2>
            <div className="prose dark:prose-invert">
              <p className="text-muted-foreground mb-4">
                We're open to contributions! If you'd like to contribute, please
                follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Fork the repository</li>
                <li>Create a new branch</li>
                <li>Make your changes</li>
                <li>Submit a pull request</li>
              </ol>
              <div className="mt-4">
                <Button
                  onClick={() =>
                    window.open(
                      "https://github.com/lakshaymeghlan/component-hub",
                      "_blank"
                    )
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
