import Logo from "./svgs/Logo";
import Lock from "./Lock";

const NavBar = () => {
  return (
    <div>
      <div className="flex absolute h-12  w-screen z-30 mt-11">
        <div className="flex flex-row items-center w-1/4  ml-20 gap-8">
          <Logo />
          <p className="font-bold text-2xl ">Food Hunt</p>
        </div>
        <div className="gap-12 flex flex-row w-2/4 items-center justify-center text-xl font-medium">
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
        <div className="flex  w-1/4 justify-end items-end mr-28">
          <Lock />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
