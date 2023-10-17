import React from "react";
import { CardType } from "@/app/helpers/types";

export default function Card({
  title,
  value,
  measure,
  Icon,
  subtext,
}: CardType) {
  return (
    <div className="dark:bg-gray-800/80 bg-black/30 dark:text-white h-[7rem] min-w-[150px] sm:w-full md:w-full mt-5 ml-0 rounded-2xl shadow-md p-[20px] relative">
      <div>
        <p className="text-[10px] flex items-center align-middle">
          <span className="font-semibold">{title}</span>
        </p>
        <div className="absolute right-2 bottom-[0px]">
          <Icon className="ml-3 text-[4.5rem] dark:text-orange-400/30 text-white/20" />
        </div>
        <p className="font-bold text-2xl">
          {value}
          {measure}
        </p>
        <p className="text-[.7rem] mt-1">
          <span className="dark:text-orange-400 text-white">
            {subtext}
            {measure}
          </span>{" "}
          in next 5 hours
        </p>
      </div>
    </div>
  );
}
