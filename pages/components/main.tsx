import React, { useEffect, useState } from "react";
import { narutoApi } from "../../static/movieApiLists";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();
  const [getMovies, setMovies] = useState<any>({});

  const apiFetch = async (url: string) => {
    const res = await fetch(url);
    const results = await res.json();
    console.log("........", results);
    setMovies(results);
  };

  useEffect(() => {
    apiFetch(narutoApi);
    console.log("apiFetch", apiFetch);
  }, []);

  return (
    <div className="w-full h-full flex flex-row items-start justify-start flex-wrap">
      {getMovies?.results?.map((movie: any, index: number) => (
        <div
          key={index}
          className="w-[335px] h-[250px]   rounded-xl   mx-[10px] mt-[10px] "
          onClick={() => router.push(`/details?id=${movie.id}`)}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            className=" rounded-xl    "
          />
          <div className=" font-bold text-[17px] text-nowrap mt-[5px]">
            {movie.title}
          </div>
          <div className="flex flex-row text-gray-300  mt-[5px] text-[14px]">
            <span>{movie.vote_count}k .</span>
            <span className="ml-[5px]">{movie.release_date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
