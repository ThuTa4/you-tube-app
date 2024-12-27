import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

export const sideBarlist = [
  {
    name: "Home",
    icon: <MdHome size={25} />,
    src: "http://localhost:3000",
  },
  {
    name: "Shorts",
    icon: <SiYoutubeshorts size={20} />,
    src: "http://localhost:3000/Short",
  },
  {
    name: "Subscriptions",
    icon: <MdOutlineSubscriptions size={20} />,
    src: "http://localhost:3000/Subscriptions",
  },
  {
    name: "History",
    icon: <MdHistory size={25} />,
    src: "http://localhost:3000/History",
  },
  {
    name: "Playlist",
    icon: <CgPlayList size={25} />,
    src: "http://localhost:3000/Playlist",
  },
  {
    name: "Your videos",
    icon: <GoVideo size={25} />,
    src: "http://localhost:3000/YourVideos",
  },
  {
    name: "Watch later",
    icon: <MdOutlineWatchLater size={25} />,
    src: "http://localhost:3000/WatchLater",
  },
  {
    name: "like videos",
    icon: <BiLike size={25} />,
    src: "http://localhost:3000/likeVideos",
  },
];
