import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function CardDemo() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Binhlaig UI</CardTitle>

          <CardDescription>
            Reusable components for React and Next.js projects.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Build modern user interfaces using Binhlaig UI components.
          </p>
        </CardContent>

        <CardFooter>
          <Button className="w-full">
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}