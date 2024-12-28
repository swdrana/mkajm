import Image from "next/image";
import Link from "next/link";

const navData: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "View Data", href: "/data" },
  { name: "Update Data", href: "/update" },
];
export default function Navbar() {
  return (
    <nav className=" py-1 bg-[#4A8C2C] text-white">
      <div className=" container mx-auto">
        <div className=" flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src="/alnoor-white.png"
              alt="Logo"
              width={200}
              height={100}
            />
          </Link>
          <ul className="flex space-x-4">
            {navData.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[#C3FD9F] hover:text-gray-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className=" ">
              <Link
                href="/update"
                className="bg-[#C3FD9F] text-[#4A8C2C] font-bold hover:bg-[#4A8C2C] border border-[#C3FD9F] hover:text-[#C3FD9F] py-2 px-6 rounded-md transition-all"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
