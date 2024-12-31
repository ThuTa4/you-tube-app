import { useEffect, useRef, useState } from "react";
import { playingApi } from "../../static/movieApiLists";
import { useRouter } from "next/router";
import Navber from "../components/navbar";

export default function Index() {
  const router = useRouter();
  const [getMovies, setMovies] = useState<any>({});

  const apiFetch = async (url: string) => {
    const res = await fetch(url);
    const results = await res.json();
    console.log("........", results);
    setMovies(results);
  };

  useEffect(() => {
    apiFetch(playingApi);
    console.log("apiFetch", apiFetch);
  }, []);

  return (
    <div>
      <Navber />
      <div className="w-full h-full pl-[400px]">
        <div className="w-[750px] h-full flex flex-row items-start justify-start  flex-wrap overflow-x-hidden ">
          {getMovies?.results?.map((movie: any, index: number) => (
            <div
              key={index}
              className="w-[500px] h-[250px]   rounded-xl   mx-[10px] mt-[10px] flex flex-row justify-between"
            >
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  className=" rounded-xl cursor-pointer max-w-[350px]"
                  onClick={() => router.push(`/details?id=${movie.id}`)}
                />
              </div>
              <div className=" ml-[50px] flex flex-col justify-start w-[400px]">
                <div className=" font-bold text-[17px] mt-[5px]  ">
                  {movie.title}
                </div>
                <div className="flex flex-col text-gray-300  mt-[5px] text-[14px]">
                  <div>
                    <span className="">{movie.vote_count}k .</span>
                  </div>
                  <span className="ml-[5px] ">{movie.release_date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
