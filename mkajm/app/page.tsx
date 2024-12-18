import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-semibold">Welcome to the Iftar Schedule App</h1>
        <p className="mt-4">Use the navigation bar to view or update the Iftar data.</p>
      </div>
    </div>
  );
}
