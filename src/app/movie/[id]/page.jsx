import Image from "next/image";

const API_KEY = process.env.API_KEY;

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to load data");
  }
  return await res.json();
}

export default async function MovieDetail({ params }) {
  const movie = await getMovie(params.id);

  console.log(movie);

  return (
    <div className="w-full pb-8">
      <div className="flex flex-col md:flex-row max-w-6xl mx-4 xl:mx-auto items-center content-center gap-8">
        <Image
          width={500}
          height={300}
          alt={movie.title}
          className="rounded-lg max-w-[100%] max-h-[50%]"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />

        <div>
          <h2 className="text-lg font-bold">{movie.title || movie.name}</h2>
          <p className="mt-3 font-light">
            <span className="font-semibold mr-2">Overview: </span>{" "}
            {movie.overview}
          </p>

          <p className="mt-3 font-light">
            <span className="font-semibold mr-2">Date released: </span>{" "}
            {movie.release_date || movie.first_air_date}
          </p>

          <p className="mt-3 font-light">
            <span className="font-semibold mr-2">Rating: </span>{" "}
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
