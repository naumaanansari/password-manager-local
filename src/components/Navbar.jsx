import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-2 md:p-4 flex justify-around items-center text-white sticky top-0 w-full z-30">
        <div className="text-white font font-semibold text-xl md:text-2xl">
            <span className=" text-green-500">&lt;</span>
            <span className="">Pass</span>
            <span className=" text-green-500">MAN/&gt;</span>
        </div>
        {/* <ul className="flex justify-around items-center gap-4">
          <li className="">Home</li>
          <li className="">Contact</li>
        </ul> */}
      <div className="">
        <button className="p-0.5 px-2 md:px-3 bg-green-800  rounded-full hover:bg-green-700" >
          <a href="https://github.com/naumaanansari" className="flex items-center gap-1 md:gap-3">
          <img src="/icons/github.svg" alt="github" className="invert w-5 md:w-8 "/>
          <p className="font-semibold text-white text-md md:text-lg  ">Github</p>
          </a>
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
