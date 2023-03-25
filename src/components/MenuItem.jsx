import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="flex items-center  hover:text-amber-600">
      <Icon className="text-2xl sm:hidden my-2" />
      <p className="hidden sm:inline my-2 text-sm">{title} </p>
    </Link>
  );
}
