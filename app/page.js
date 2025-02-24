'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GridDistortion from "@/GridDistortion/GridDistortion";
import { Alert } from "@/components/ui/alert";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  // To store/set user input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // TO send user input to langflow
  const onSubmitHandle = async () => {
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputValue }),
      });

      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-96 gap-3">
      <GridDistortion className="absolute inset-0 z-[-1]" />
      <div className="flex items-center gap-2 w-full">
        <Input
          className="border-yellow-2 text-white h-12"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button onClick={onSubmitHandle} className='h-12 w-12'>+</Button>
      </div>
    </div>
  );
}