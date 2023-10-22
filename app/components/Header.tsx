import React from "react";
import { Search } from "./Search";
import dayjs from "dayjs";
import SwitchComponent from "./SwitchComponent";

export function Header() {
  return (
    <div className="lg:flex md:block sm:block w-full justify-between items-center lg:p-0 md:relative sm:relative">
      <Logo />
      <div className="lg:block md:hidden sm:hidden hidden">
        <Search />
      </div>
      <div className="lg:flex sm:mt-2 items-center justify-center">
        <Date />
        <div className="lg:hidden">
          <Search />
        </div>
        <SwitchComponent />
      </div>
    </div>
  );
}

export default Header;

const Logo = () => {
  return (
    <div
      className="font-bold cursor-pointer text-3xl dark:text-white hover:text-slate-500 transition max-w-[150px]"
      onClick={() => window.location.reload()}
    >
      ClearSky
    </div>
  );
};

const Date = () => {
  return (
    <div className="lg:mx-5 text-sm dark:text-white">
      {dayjs().format("dddd hh:mma")}
    </div>
  );
};
