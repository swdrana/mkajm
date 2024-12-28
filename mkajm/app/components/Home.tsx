"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-[#4A8C2C]">
      <div className=" container mx-auto relative pt-10">
        <center>
          <h1 className=" text-5xl font-bold text-white">Lorem consectetur, adipisicing elit. </h1>
          <p className=" text-[#C3FD9F] py-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore praesentium eaque quam veritatis iusto, minus laboriosam.</p>
          <Link href="/update" className="bg-[#C3FD9F] text-[#4A8C2C] font-bold hover:bg-[#4A8C2C] border border-[#C3FD9F] hover:text-[#C3FD9F] py-2 px-6 rounded-md transition-all">
                Login
              </Link>
        </center>

        <Image
          src="/c.png"
          className=" absolute"
          alt="Logo"
          width={200}
          height={100}
        />
        <Image
          src="/cloud-sm.png"
          className=" absolute"
          alt="Logo"
          width={200}
          height={100}
        />
        <center>
          <Image src="/mosqueo.png" alt="Logo" width={800} height={100} />
        </center>
      </div>
    </div>
  );
}
