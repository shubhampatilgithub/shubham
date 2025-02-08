"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import axios from "axios"; // Assuming you use Axios for API 
import { FiDownload } from "react-icons/fi";





import { FaTable, FaMap, FaDownload, FaPlus, FaMinus } from "react-icons/fa";

export default function Main() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar starts open
  const [data, setData] = useState<any[]>([]); // State to store backend data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const [view, setView] = useState<"map" | "table">("map");



  // Fetch data from backend
//   useEffect(() => {
//     axios
//       .get("https://api.example.com/data") // Replace with your actual API URL
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError("Failed to load data.");
//         setLoading(false);
//       });
//   }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`w-80 bg-teal-900 text-white p-5 transition-all ${isOpen ? "block" : "hidden"}`}>
        <h2 className="text-xl font-bold mb-4">Select Data</h2>

        {/* Compare Maps */}
        <div className="mb-4">
          <p className="font-semibold">Compare maps</p>
          <div className="flex gap-2 mt-2">
            <button className="px-4 py-1 bg-gray-200 text-black rounded">Single</button>
            <button className="px-4 py-1 bg-gray-200 text-black rounded">Dual</button>
          </div>
        </div>

        {/* Dropdowns */}
        {[
          { label: "Disease & SDOH", options: ["HIV"] },
          { label: "Indicator", options: ["HIV diagnoses"] },
          { label: "Geography", options: ["US Map-State Level"] },
          { label: "Age Group", options: ["Ages 13 years and older"] },
          { label: "Race/Ethnicity", options: ["All races/ethnicities"] },
        ].map(({ label, options }, index) => (
          <div className="mb-4" key={index}>
            <p className="font-semibold">{label}</p>
            <select className="w-full p-2 text-black rounded">
              {options.map((option, idx) => (
                <option key={idx}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Main Content Area (Beside Sidebar) */}
      <div className="flex-1 p-5">
       

      <div className="max-w-4xl mx-auto p-4">
      {/* Navbar */}
      <nav className="bg-gray-100 p-2 flex gap-2">
        {["Home", "Charts", "Maps", "Tables"].map((item) => (
          <button key={item} className="bg-purple-500 text-white px-4 py-1 rounded-md">
            {item}
          </button>
        ))}
      </nav>

      {/* Header */}
      <div className="p-4 text-gray-700 text-sm">
        <p>HIV diagnoses | 2022 | Ages 13 years and older | All races/ethnicities | Both sexes | All transmission categories | US Map-State Level</p>
      </div>

      {/* Toggle & Download */}
      <div className="flex justify-between items-center p-2">
        <div className="flex gap-2">
          <button 
            className={`px-4 py-1 border rounded-md ${view === "map" ? "bg-gray-800 text-white" : "bg-gray-300"}`}
            onClick={() => setView("map")}
          >
            🗺️ Map
          </button>
          <button 
            className={`px-4 py-1 border rounded-md ${view === "table" ? "bg-gray-800 text-white" : "bg-gray-300"}`}
            onClick={() => setView("table")}
          >
            📊 Table
          </button>
        </div>

        <button className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-md border">
          <FiDownload />
          Download
        </button>
      </div>

      {/* Map/Table View */}
      <div className="flex justify-center items-center h-[400px] border">
        {view === "map" ? (
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/USA_orthographic.svg/800px-USA_orthographic.svg.png" alt="US Map" className="max-w-full" />
        ) : (
          <p className="text-gray-600">📊 Table View Coming Soon...</p>
        )}
      </div>
    </div>

      </div>
    </div>
  );
}
