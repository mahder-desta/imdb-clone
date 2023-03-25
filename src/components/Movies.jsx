import React from "react";
import MovieCard from "./MovieCard";

export default function Movies({ movies = [] }) {
  return (
    <div className="  grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 pb-8">
      {movies.map((movie) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
    </div>
  );
}
