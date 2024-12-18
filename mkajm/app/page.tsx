"use client";
import axios from "axios";
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [startDate, setStartDate] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("22.841158181245707");
  const [longitude, setLongitude] = useState<string>("89.0529766932413");
  const [message, setMessage] = useState<string>("");

  // Handle form submission for generating schedule
  const handleGenerateSchedule = async () => {
    if (!startDate || !latitude || !longitude) {
      setMessage("Start date, latitude, and longitude are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/ifter-list/generate", // Replace with your backend API URL
        { startDate, latitude, longitude }
      );

      setMessage(response.data.message); // Display success message
    } catch (error: any) {
      setMessage("Error generating schedule: " + error.message);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-semibold">Generate Ramadan Schedule</h1>

        {/* Input form for generating schedule */}
        <div className="flex flex-col gap-4">
          <input
            type="date"
            className="p-2 border rounded"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>

        {/* Button to generate schedule */}
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          onClick={handleGenerateSchedule}
        >
          Generate Schedule
        </button>

        {/* Display message */}
        {message && <p className="text-center mt-4 text-sm">{message}</p>}
      </main>
    </div>
  );
}
