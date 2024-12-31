import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { apiLists } from "../../static/movieApiLists";
import { url } from "inspector";
import Navber from "../components/navbar";
import VideosList from "../components/videoList";

export default function Index() {
  const [getMovieDetails, setMovieDetails] = useState<any>({});
  const [getMovieVideo, setMovieVideo] = useState<any>({});
  const [getMovieCredits, setMovieCredits] = useState<any>({});

  const router = useRouter();
  const { id } = router.query;
  const iframeRef = useRef(null);

  const apiFetch = async (url: string) => {
    const res = await fetch(url);
    console.log("...........", res);
    return await res.json();
  };

  async function handleAwait() {
    setMovieDetails(await apiFetch(apiLists("movie", id + "").detailsEndPoint));
    setMovieVideo(await apiFetch(apiLists("movie", id + "").videosEndPoint));
    setMovieCredits(await apiFetch(apiLists("movie", id + "").creditsEndPoint));
  }

  useEffect(() => {
    if (id != undefined) {
      handleAwait();
    }
  }, [id]);

  return (
    <div className="w-full h-screen">
      <Navber />
      <div className="flex flex-row w-full h-[92vh]">
        <div className="w-[72%]  p-[50px] flex flex-row justify-center">
          {getMovieVideo?.results?.length ? (
            <iframe
              src={`https://www.youtube.com/embed/${getMovieVideo?.results[0]?.key}`}
              ref={iframeRef}
              title="video"
              className="w-[70%] h-[600px] pt-[30px] rounded-xl"
            ></iframe>
          ) : getMovieCredits?.cast?.length ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${getMovieCredits?.cast[0]?.profile_path}`}
            />
          ) : (
            <></>
          )}
        </div>
        <div className=" w-[28%] flex flex-col overflow-y-scroll">
          <VideosList />
        </div>
      </div>
    </div>
  );
}
