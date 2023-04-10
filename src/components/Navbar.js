import logoIcon from "./assets/Navbar/logo.svg";
import locationIcon from "./assets/Navbar/location.png";
import searchIcon from "./assets/Navbar/search-icon.png";
import cart from "./assets/Navbar/cart.png";
import { useState } from "react";

export const Navbar = () => {
  const [menuShown, setMenuShown] = useState(false);

  const toggleMenu = () => {
    setMenuShown((prevValue) => !prevValue);
  };

  return (
    <header className="grid grid-cols-2 xl:grid-cols-1 justify-between items-center py-7">
      <img className="w-7 xl:hidden" src={logoIcon} alt="logo" />
      {/* menu */}
      <nav
        className={`${
          menuShown
            ? `absolute top-0 left-0 w-full h-screen flex-col bg-white transition-all items-start pt-20`
            : `relative flex-row hidden xl:flex`
        } flex xl:justify-between gap-[77px] overflow-hidden`}
      >
        <img className="w-7 hidden xl:inline-flex" src={logoIcon} alt="logo" />
        <section
          className={`${
            menuShown ? `flex-col w-[90%] mx-auto` : `flex-row`
          } flex gap-16 xl:gap-10 justify-center items-center`}
        >
          {/* close button */}
          <div
            className={`${
              menuShown ? `block` : `hidden`
            } text-6xl absolute top-4 right-10 cursor-pointer text-[#9CA3AF]`}
            onClick={() => setMenuShown((prevValue) => !prevValue)}
          >
            &times;
          </div>
          <div className="grid md:grid-cols-[auto,1fr] gap-3 md:gap-0 md:border py-4 md:rounded-[50px] w-full max-w-xl">
            {/* location section */}
            <section className="flex justify-start items-center order-last flex-none flex-grow-0 text-[#9CA3AF] py-2 px-2 md:py-0.5 md:px-6 gap-[9.5px] border rounded-lg w-full md:border-0 md:rounded-none">
              <img src={locationIcon} alt="location icon" />
              <input
                type="text"
                placeholder="Location"
                className="w-full md:w-20 outline-none"
              />
            </section>
            {/* search section */}
            <section className="flex justify-start items-center flex-none flex-grow-0 text-[#9CA3AF] py-2 px-2 md:py-0.5 md:px-6 gap-[9.5px] border rounded-lg w-full md:border-0 md:rounded-none md:border-r-2 md:border-[#6B7280]">
              <img src={searchIcon} alt="search icon" />
              <input
                type="text"
                placeholder="Search tests, doctors"
                className="w-full md:w-fit outline-none"
              />
            </section>
          </div>
          {/* menu */}
          {/* <div className="w-full pl-2 xl:pl-0"> */}
            <ul className="flex justify-start items-start sm:justify-center sm:items-center pl-2 xl:pl-0 xl:justify-between flex-col xl:flex-row text-[#6B7280] gap-10 xl:gap-14 2xl:gap-9 mb-0 w-full">
              <li className="cursor-pointer transition">Lab tests</li>
              <li className="cursor-pointer transition">About us</li>
              <li className="cursor-pointer transition">Pricing</li>
              <li className="cursor-pointer transition">Health Center</li>
            </ul>
          {/* </div> */}
        </section>
        {/* buttons */}
        <section className="flex justify-between items-center gap-6 flex-col w-full 2xl:w-fit mx-auto xl:flex-row text-lg">
          {/* shopping cart */}
          <img
            src={cart}
            alt="cart"
            className="cursor-pointer hidden xl:flex"
          />
          {/* log in button */}
          <button className="rounded-[50px] w-[90%] max-w-xs xl:w-fit px-6 py-2 border transition border-gray-300 hover:bg-[#2B7669] hover:text-white">
            Log In
          </button>
          {/* Take quiz button */}
          <button className="rounded-[50px] w-[90%] max-w-xs xl:w-fit px-6 py-2 text-white transition bg-[#2B7669] border hover:bg-white hover:border-black hover:text-black">
            Take Quiz
          </button>
        </section>
      </nav>
      {/* hamburger */}
      <div
        onClick={toggleMenu}
        className="hamburger grid justify-self-end justify-between flex-col xl:hidden gap-1.5 cursor-pointer p-3 rounded-md"
      >
        <span className="w-9 h-[3px] bg-black"></span>
        <span className="w-9 h-[3px] bg-black"></span>
        <span className="ml-auto mr-0 w-6 h-[3px] bg-black"></span>
      </div>
    </header>
  );
};
