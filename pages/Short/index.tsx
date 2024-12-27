import { useEffect, useState } from "react";
import Navber from "../components/navbar";
import { narutoApi } from "../../static/movieApiLists";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import { HiDotsVertical } from "react-icons/hi";

export default function Index() {
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
    <div className="w-screen h-screen">
      <Navber />
      <div className=" flex flex-col items-center">
        {getMovies?.results?.map((movie: any, index: number) => (
          <div
            key={index}
            className="w-[460px] h-[700px] rounded-xl mx-[10px] flex flex-row justify-start  mb-[80px] mt-[30px]"
          >
            <div className="w-[400px]  h-[700px]">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                className=" rounded-xl cursor-pointer w-full h-full  object-cover"
              />
            </div>
            <div className="w-[60px]  h-[700px] flex flex-col justify-end items-center">
              <div className="w-[45px] h-[45px] bg-[#565556] mb-[10px] rounded-full flex flex-row items-center justify-center">
                <AiFillLike className=" size-[25px]" />
              </div>
              <p className="mb-[20px]">Like</p>
              <div className="w-[45px] h-[45px] bg-[#565556] mb-[10px] rounded-full flex flex-row items-center justify-center">
                <AiFillDislike className=" size-[25px]" />
              </div>
              <p className="mb-[20px]">Dislike</p>
              <div className="w-[45px] h-[45px] bg-[#565556] mb-[10px] rounded-full flex flex-row items-center justify-center">
                <BiCommentDetail className=" size-[25px]" />
              </div>
              <p className="mb-[20px]">{Math.ceil(movie.popularity)}K</p>
              <div className="w-[45px] h-[45px] bg-[#565556] mb-[10px] rounded-full flex flex-row items-center justify-center">
                <PiShareFatFill className=" size-[25px]" />
              </div>
              <p className="mb-[20px]">Share </p>
              <div className="w-[45px] h-[45px] bg-[#565556] mb-[10px] rounded-full flex flex-row items-center justify-center">
                <HiDotsVertical className=" size-[25px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
