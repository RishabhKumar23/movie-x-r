'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GridDistortion from '@/GridDistortion/GridDistortion';
import { Alert } from '@/components/ui/alert';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitHandle = async () => {
    setError(null); // Reset error state
    try {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputValue }),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseData(data);
      } else {
        setError('Failed to fetch data from the server.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching data.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-96 gap-3">
      <GridDistortion className="absolute inset-0 z-[-1]" />
      <div className="flex items-center gap-2 w-full">
        <Input
          className="border-yellow-200 text-white h-12"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button onClick={onSubmitHandle} className="h-12 w-12">
          +
        </Button>
      </div>
      {error && (
        <Alert className="mt-4" variant="destructive">
          {error}
        </Alert>
      )}
      {responseData && (
        <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow-md w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Response
          </h5>
          <p className="font-normal text-gray-700">
            {JSON.stringify(responseData, null, 2)}
          </p>
        </div>
      )}
    </div>
  );
}
