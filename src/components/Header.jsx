import React from "react";
import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between xl:mx-auto max-w-6xl mx-4 py-6">
        <div className="flex gap-8 lg:gap-12">
          <MenuItem title="HOME" address="/" Icon={AiFillHome} />
          <MenuItem
            title="ABOUT"
            address="/about"
            Icon={BsFillInfoCircleFill}
          />
        </div>

        <div className="flex gap-6 items-center">
          <ThemeSwitcher />
          <Link href="/">
            <h2 className="text-2xl">
              <span className="font-bold py-1 px-2 rounded-lg bg-amber-500 mr-1">
                IMdb
              </span>
              <span className="hidden sm:inline">Clone</span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
