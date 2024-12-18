import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/data" className="hover:text-gray-400">View Data</Link>
        </li>
        <li>
          <Link href="/update" className="hover:text-gray-400">Update Data</Link>
        </li>
      </ul>
    </nav>
  );
}
