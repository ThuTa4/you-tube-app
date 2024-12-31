import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";

export const sideBarlist = [
  {
    name: "Home",
    icon: <MdHome size={25} />,
    src: "http://localhost:3000",
  },
  {
    name: "Shorts",
    icon: <SiYoutubeshorts size={20} />,
    src: "http://localhost:3000/short",
  },
  {
    name: "Subscriptions",
    icon: <MdOutlineSubscriptions size={20} />,
    src: "http://localhost:3000/subscriptions",
  },
  {
    name: "History",
    icon: <MdHistory size={25} />,
    src: "http://localhost:3000/history",
  },
  {
    name: "Playlist",
    icon: <CgPlayList size={25} />,
    src: "https://www.youtube.com/feed/playlists",
  },
  {
    name: "Your videos",
    icon: <GoVideo size={25} />,
    src: "https://studio.youtube.com/channel/UCLrBpIKXkP3zMQaXJtCRGSQ/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D",
  },
  {
    name: "Watch later",
    icon: <MdOutlineWatchLater size={25} />,
    src: "https://www.youtube.com/playlist?list=WL",
  },
  {
    name: "To do List",
    icon: <FcTodoList size={25} />,
    src: "http://localhost:3000/toDoList",
  },
];
