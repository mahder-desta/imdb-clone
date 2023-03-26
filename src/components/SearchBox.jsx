"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  //   useEffect(() => {
  //     const timeoutId = setTimeout(() => {
  //       console.log;
  //     }, 300);

  //     return () => clearTimeout(timeoutId);
  //   }, [search]);

  const handleSearchInput = (e) => {
    e.preventDefault();
    if (!search) return;

    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSearchInput}
      className="max-w-6xl lg:mx-auto mx-4 flex gap-2 mt-4 items-center justify-center"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`flex-1 lg:max-w-xl h-10 bg-transparent outline-none 
        border-2 border-transparent border-b-gray-500 focus:border-b-amber-500 ${
          search && "border-b-gray-500"
        }`}
        type="text"
        placeholder="Search movies..."
      />
      <button
        type="submit"
        disabled={!search}
        className="font-semibold text-amber-500 hover:text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
