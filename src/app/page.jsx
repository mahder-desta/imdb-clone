const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "trending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre == "topRated" ? "movie/top-rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 100 } }
  );

  if (!res.ok) {
    throw new Error("Failed to load data");
  }

  const data = await res.json();

  const results = data.results;

  console.log(results);

  return <div></div>;
}
