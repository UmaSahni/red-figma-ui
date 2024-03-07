import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <div className="p-9 flex items-center  justify-between">
      
      {/*<------ Hamburger Icon -------> */}
      <div onClick={()=>setToggle(!toggle)}  className="hamburger-icon">
        <i class={ toggle ? "fa-solid fa-times": "fa-solid fa-bars"  }></i>
      </div>
      
      {/*<------ Logo with brand name -------> */}
      <div className="flex  items-center">
        <div className="">
          <img width={"80%"} src="Images/Navbar-logo.png" />
        </div>
        <div>
          <h2 className="text-white text-3xl   font-zcoolkuaile">
            Saviour
          </h2>
        </div>
      </div>

      {/* <------ Center navigation bar -------> */}

      <div className={ toggle ? "main-navigation-hidden" :  "main-navigation"}>
        <ul className="font-zcoolkuaile flex flex-1 justify-between">
          <li>Home</li>
          <li>IDO</li>
          <li>Tokenomics</li>
          <li>Roadmap</li>
          <li>Coming Soon</li>
          <li>
            <i className="fa-solid fa-angle-down"></i>
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
