import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { apiLists } from "../../static/movieApiLists";
import { url } from "inspector";

export default function Index() {
  const [getMovieDetails, setMovieDetails] = useState<any>({});
  const [getMovieVideo, setMovieVideo] = useState<any>({});
  const [getMovieCredits, setMovieCredits] = useState<any>({});

  const router = useRouter();
  const { id } = router.query;

  const apiFetch = async (url: string) => {
    const res = await fetch(url);
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

  console.log("getMovieDetails", getMovieDetails);
  console.log("getMovieVideo", getMovieVideo);
  console.log("getMovieCredits", getMovieCredits);

  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
}
