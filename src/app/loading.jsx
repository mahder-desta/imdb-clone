import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="text-center text-2xl text-amber-600 flex justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="h-64" src="spinner.svg" alt="Loading..." />
    </div>
  );
}
