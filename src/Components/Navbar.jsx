import React from "react";

const Navbar = () => {
  return (
    <div className="p-9 flex items-center  border-yellow-700 border-2 justify-between">
      {/*<------ Logo with brand name -------> */}
      <div className="flex border border-sky-500 items-center">
        <div className="border border-red-500">
          <img src="Images/Navbar-logo.png" />
        </div>
        <div>
          <h2 className="text-white text-3xl border border-pink-500 font-zcoolkuaile">
            Saviour
          </h2>
        </div>
      </div>

      {/* <------ Center navigation bar -------> */}
      <div className="text-white flex rounded-full bg-191818 p-4 w-1/2  border border-red-600">
        <ul className="font-zcoolkuaile flex flex-1 justify-between">
          <li>Home</li>
          <li>IDO</li>
          <li>Tokenomics</li>
          <li>Roadmap</li>
          <li>Coming Soon</li>
          <li>
            <i className="fa-solid fa-angle-down" ></i>
          </li>
        </ul>
      </div>

      {/* <---- Connect Button -----> */}
      <div>
        <button>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Navbar;
