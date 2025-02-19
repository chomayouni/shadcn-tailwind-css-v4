import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function App() {
  // State for table values
  const [data, setData] = useState([
    { name: "Speed Value", type: "uint16", range: "0-300 km/h", value: 254 },
    { name: "Speed Limit", type: "uint8", range: "0-255 km/h", value: 244 },
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
    <div className="flex h-screen bg-[url('/textures/fabric.webp')] bg-cover bg-center">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content with Glass Effect */}
      <div className="flex flex-col flex-1 bg-white/30 backdrop-blur-xl shadow-xl border border-white/10 p-6">
        
        {/* Header */}
        <header className="p-4 bg-gray-900 text-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold">Interface Name: Vehicle Speed</h1>
        </header>

        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Speed</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold">{data[0].value} km/h</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Speed Limit</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold">{data[1].value} km/h</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Measurement Unit</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold">{data[2].value}</CardContent>
          </Card>
        </div>

        {/* Table Section */}
        <div className="mt-8 bg-white/40 backdrop-blur-md p-4 rounded-lg shadow-lg">
          <Table>
            <TableHeader>
              <TableRow>
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
        </div>

        {/* Button to Update Values */}
        <div className="mt-6 flex justify-center">
          <Button onClick={updateValues} variant="default">
            Update Values
          </Button>
        </div>

      </div>
    </div>
  );
}

export default App;
