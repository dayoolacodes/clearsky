"use client";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDebouncedValue } from "../helpers/hooks";
import { useAppContext } from "../context/AppContext";
import { getWeather } from "../lib/api";
import { WeatherDataType } from "../helpers/types";

export const Search = () => {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebouncedValue({ initialValue: search });
  const { setAppState } = useAppContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    if (!debouncedValue) return;

    getWeather({ city: debouncedValue })
      .then((resp: WeatherDataType) => {
        if (resp.current) {
          setErrMsg(" ");
          setAppState((val) => ({
            ...val,
            weatherData: resp,
          }));
        } else {
          setErrMsg("Location Not Found");
          return null;
        }
      })
      .catch((err) => err);
  }, [setAppState, debouncedValue, search]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col lg:items-center dark:text-white" data-testid="search_component">
      <div className="relative flex lg:mx-5 md:mt-5 sm:mt-5">
        <CiSearch className="absolute top-3 left-2 dark:text-white" />
        <input
          type="text"
          className="pl-8 pr-3 h-10 font-light sm:w-full md:w-full lg:w-96 text-xs dark:bg-gray-800/40 outline-none rounded-xl  border-#f4f1ed-500 border-[1px] "
          placeholder="Search Locations"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          ref={inputRef}
        />
      </div>
      {debouncedValue && <div className="font-semibold md:mt-3 sm:mt-3">{errMsg}</div>}
    </div>
  );
};
