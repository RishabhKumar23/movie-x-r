import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-96 bg-black">
      <div className="bg-yellow-300 w-full h-96 flex items-center justify-center mb-4">
        {/* Output text will be displayed here */}

      </div>
      <div className="flex items-center gap-3 w-full">
        <Input className="border-yellow-2 text-white" />
        <Button>+</Button>
      </div>
    </div>
  );
}
