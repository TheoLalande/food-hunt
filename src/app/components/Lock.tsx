import LockTop from "./svgs/LockTop";
import LockBottom from "./svgs/LockBottom";

const Lock = () => {
  return (
    <div className="flex flex-col items-center relative z-10">
      <div className="absolute mb-10 ml-[2px]">
        <LockTop />
      </div>
      <div className="mt-4">
        <LockBottom />
      </div>
    </div>
  );
};

export default Lock;
