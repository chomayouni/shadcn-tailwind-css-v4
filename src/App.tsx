import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Sidebar from "@/components/ui/sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={viteLogo} className="h-8 mr-2" alt="Vite logo" />
            <img src={reactLogo} className="h-8" alt="React logo" />
          </div>
          <h1 className="text-2xl">Vite + React</h1>
        </header>
        <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
          <h2 className="text-5xl text-center mb-8">Tailwind CSS v4 and Shadcn UI base Test</h2>
          <div className="flex justify-center mb-8">
            <Button variant="default">Button</Button>
          </div>
          <Alert className="mb-8">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
          <div className="card bg-white p-4 rounded-lg shadow-md">
            <button onClick={() => setCount((count) => count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              count is {count}
            </button>
            <p className="mt-4">
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>Click on the Vite and React logos to learn more</p>
        </footer>
      </div>
    </div>
  );
}

export default App;