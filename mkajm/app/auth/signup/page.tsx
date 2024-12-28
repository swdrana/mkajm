"use client";

import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [isBangladesh, setIsBangladesh] = useState(true);

  console.log(isBangladesh);
  return (
    <div className=" ">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" flex flex-col gap-9">
          <Image src="/alnoor.png" alt="Logo" width={200} height={100} />
          <div className=" flex flex-col ">
            <div className="flex items-center">
              <input
                type="radio"
                id="bangladesh"
                name="country"
                checked={isBangladesh}
                onChange={() => setIsBangladesh(true)}
                hidden
              />
              <label
                htmlFor="bangladesh"
                className={`btn btn-primary p-4 rounded-lg ${
                  isBangladesh ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                Bangladesh
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="othersCountry"  name="country" checked={!isBangladesh} onChange={() => setIsBangladesh(false)} hidden />
              <label
                htmlFor="othersCountry"
                className={`btn btn-primary p-4 rounded-lg ${
                  !isBangladesh ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                Others Country
              </label>
            </div>
          </div>
        </div>
        <form action="" className="flex flex-col">
          <input type="text" name="name" placeholder="Enter your name" />
          <input type="email" name="email" placeholder="Enter your email" />
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
          />
          <input
            type="password"
            name="confirm-password"
            placeholder="Type again your password"
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
