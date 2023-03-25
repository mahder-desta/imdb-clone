"use client";

// import React from "react";

export default function Error({ error, reset }) {
  return (
    <div className="text-center">
      <p>Something went wrong!</p>
      <button className="text-amber-500 font-semibold hover:text-amber-600">
        Try again
      </button>
    </div>
  );
}
