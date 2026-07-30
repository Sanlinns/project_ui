import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex gap-3 p-10">
      <Button>Binhlaig Button</Button>

      <Button variant="outline">
        Learn More
      </Button>

      <Button loading loadingText="Saving...">
        Save
      </Button>
    </div>
  );
}