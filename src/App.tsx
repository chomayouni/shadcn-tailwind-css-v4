import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function App() {
  // State for table values
  const [data, setData] = useState([
    { name: "Speed Value", type: "uint16", range: "0-300 km/h", value: 60 },
    { name: "Speed Limit", type: "uint8", range: "0-255 km/h", value: 120 },
    { name: "Unit", type: "string", range: "km/h or mph", value: "km/h" },
  ]);

  // Function to update values dynamically
  const updateValues = () => {
    setData([
      { name: "Speed Value", type: "uint16", range: "0-300 km/h", value: Math.floor(Math.random() * 300) },
      { name: "Speed Limit", type: "uint8", range: "0-255 km/h", value: Math.floor(Math.random() * 255) },
      { name: "Unit", type: "string", range: "km/h or mph", value: Math.random() > 0.5 ? "km/h" : "mph" },
    ]);
  };

  return (
    //<div className="flex h-screen">
    <div className="flex h-screen bg-[url('/textures/carbon_fibre.webp')] bg-cover bg-center">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 bg-gray-100">
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl">Interface Name: Vehicle Speed</h1>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">
          {/* Info Boxes */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{data[0].value} km/h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Speed Limit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{data[1].value} km/h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Measurement Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{data[2].value}</p>
              </CardContent>
            </Card>
          </div>

          {/* Data Table */}
          <Table className="bg-white shadow-md rounded-lg">
            <TableHeader>
              <TableRow className="bg-gray-200">
                <TableHead>Data Element</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Range</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.range}</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Update Button */}
          <div className="flex justify-center mt-6">
            <Button onClick={updateValues} variant="default">
              Update Values
            </Button>
          </div>
        </main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>Vehicle Speed Interface Dashboard</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
