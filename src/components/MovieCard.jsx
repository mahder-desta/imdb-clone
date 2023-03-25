import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FiThumbsUp } from "react-icons/fi";
export default function MovieCard({ data }) {
  return (
    <Link href={`/movie/${data.id}`}>
      <div
        className=" relative cursor-pointer 
       rounded-lg transition-shadow duration-300 group
  "
      >
        <Image
          width={600}
          height={350}
          alt={data.title}
          className="rounded-lg group-hover:opacity-70 transition-opacity 
          duration-200 sm:hover:shadow-lg sm:shadow-md"
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
        />
        <div className="absolute rounded-lg flex flex-col justify-end bottom-0 p-3 bg-gradient-to-b from-transparent to-black w-full h-full">
          {/* <p className="font-light text-gray-00 line-clamp-2 opacity-75">
            {data.overview}
          </p> */}

          <h2 className="text-lg text-gray-300 font-semibold line-clamp-1">
            {data.title || data.name}
          </h2>
          <div className="flex gap-4 text-sm">
            <p className="font-light text-gray-00 line-clamp-2 opacity-75">
              {data.release_date || data.first_air_date}
            </p>
            <p className="flex items-center font-semibold text-sm">
              <FiThumbsUp className=" text-amber-500 mr-1" /> {data.vote_count}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
