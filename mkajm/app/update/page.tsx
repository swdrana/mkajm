"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Home from "../page";

export default function Update() {
  const [id, setId] = useState<number | string>("");
  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const handleUpdate = async () => {
    if (!id || !name || !time) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5001/api/ifter-list/`, // Backend API URL for updating data
        { id, name, time }
      );
      alert(response.data.message);  // Display success message
    } catch (error) {
      alert("Error updating entry");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-xl font-semibold">Update Iftar Entry</h1>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 border rounded"
          />
          <button
            onClick={handleUpdate}
            className="p-2 border rounded bg-blue-500 text-white"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
