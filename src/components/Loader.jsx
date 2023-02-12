import React from "react";
import { BounceLoader, DotLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-[30%] left-[35%]">
      <DotLoader color={"#ee9a40"} size={300} />
      <p className="text-[#6059f7]">Loading...</p>
    </div>
  );
};

export default Loader;
