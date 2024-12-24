import Navber from "./components/navbar";
import SideBar from "./components/sideBar";
import Main from "./components/main";

export default function Home() {
  return (
    <div className="w-screen  h-screen  text-white">
      <Navber />
      <div className="flex flex-row  h-[92vh] w-full bg-[#0F0F0F  ]">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}
