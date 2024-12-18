"use client"; // Mark this file as a client component

import axios from "axios";
import { useEffect, useState } from "react";

export default function Data() {
  const [iftarData, setIftarData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [editingItem, setEditingItem] = useState<any | null>(null); // Store the item being edited
  const [formData, setFormData] = useState<any>({
    ramajan: 0,
    iftarTime: "",
    sahriTime: "",
    name: "",
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to control modal visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/ifter-list/"
        );
        setIftarData(response.data.data); // Assuming your API response has a "data" field
      } catch (error: any) {
        setError("Error fetching data.");
        console.error("Error fetching iftar data:", error); // Log the error for debugging
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  // Function to handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "name" ? value.split(",") : value, // For name, split by comma
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5001/api/ifter-list/update-info`,
        formData,
        {
          params: { id: editingItem._id }, // Send the ID in the params
        }
      );
      // Update local data after successful update
      setIftarData((prevData) =>
        prevData.map((item) =>
          item._id === editingItem._id ? { ...item, ...formData } : item
        )
      );
      setEditingItem(null);
      setIsModalOpen(false); // Close the modal after successful submission
      setFormData({
        ramajan: 0,
        iftarTime: "",
        sahriTime: "",
        name: "",
      });
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // Function to start editing an item
  const handleEdit = (item: any) => {
    console.log("Edit button clicked for item:", item);
    setEditingItem(item);
    setFormData({
      ramajan: item.ramajan,
      iftarTime: item.iftarTime,
      sahriTime: item.sahriTime,
      name: item.name.join(", "), // Joining names if it's an array
    });
    setIsModalOpen(true); // Open the modal when editing
    console.log("Updated editingItem:", item);
    console.log("Updated formData:", {
      ramajan: item.ramajan,
      iftarTime: item.iftarTime,
      sahriTime: item.sahriTime,
      name: item.name.join(", "),
    });
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null); // Reset editing item when modal is closed
  };

  // Function to handle clicking outside the modal to close it
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Conditional rendering for loading and error states
  if (loading) {
    return <div className="text-white">Loading...</div>; // Text color adjusted for dark mode
  }

  if (error) {
    return <div className="text-white">{error}</div>; // Text color adjusted for dark mode
  }

  return (
    <div className="text-white  px-4 py-6">
      {" "}
      {/* Set background and text color for dark mode */}
      <h1 className="text-xl font-semibold mb-4">Iftar List</h1>
      {/* Responsive table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Ramajan
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Day</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Iftar Time
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Sahri Time
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {iftarData.map((item) => (
              <tr key={item._id} className="border-b border-gray-600">
                <td className="px-4 py-2">{item.ramajan}</td>
                <td className="px-4 py-2">
                  {item.name.length > 0
                    ? item.name.join(", ")
                    : "No name available"}
                </td>
                <td className="px-4 py-2">
                  {item.bnDate || "No date available"}
                </td>
                <td className="px-4 py-2">
                  {item.date
                    ? new Date(item.date).toLocaleDateString("bn", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "-"}
                </td>

                <td className="px-4 py-2">{item.day || "No day available"}</td>
                <td className="px-4 py-2">
                  {item.iftarTime || "No iftar time available"}
                </td>
                <td className="px-4 py-2">
                  {item.sahriTime || "No sahri time available"}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal for editing */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-lg flex justify-center items-center"
          onClick={handleBackdropClick} // Close modal when clicking outside
        >
          <div
            className="bg-gray-700 p-6 rounded-md w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Edit Ramadan Data</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block">Iftar Time</label>
                  <input
                    type="text"
                    name="iftarTime"
                    value={formData.iftarTime}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded-md"
                  />
                </div>
                <div>
                  <label className="block">Sahri Time</label>
                  <input
                    type="text"
                    name="sahriTime"
                    value={formData.sahriTime}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded-md"
                  />
                </div>
                <div>
                  <label className="block">Ramajan</label>
                  <select
                    name="ramajan"
                    value={formData.ramajan}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded-md"
                  >
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
                </div>
                <div>
                  <label className="block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded-md"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md"
              >
                Save Changes
              </button>
            </form>
            <button
              className="mt-4 ml-2 text-red-500 hover:text-red-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
