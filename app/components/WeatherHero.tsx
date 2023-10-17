import React from "react";
import { AppContextType } from "../helpers/types";
import { Degree } from "../helpers/enums";
import dayjs from "dayjs";

export default function WeatherHero({ appState, setAppState }: AppContextType) {
  const switchDeg = () => {
    setAppState((val) => ({
      ...val,
      degree:
        appState.degree === Degree.FAHRENHEIT
          ? Degree.CELSIUS
          : Degree.FAHRENHEIT,
    }));
  };


  const rightExtras = [
    {
      name: "UV index",
      value: appState.weatherData.current.uv,
    },
    {
      name: "Dawn time",
      value: appState.weatherData.forecast.forecastday[0].astro.sunrise,
    },
    {
      name: "Dusk time",
      value: appState.weatherData.forecast.forecastday[0].astro.sunset,
    },
    {
      name: "Local time",
      value: dayjs(appState.weatherData.location.localtime).format("hh:mm A"),
    },
  ];

  return appState.weatherData.location ? (
    <div className="lg:rounded-xl my-6 md:min-h-[24rem] lg:h-96 md:rounded-md sm:rounded-none p-5 md:p-0 sm:p-0 sm:w-full dark:text-white flex flex-wrap gap-4">
      <div className="lg:rounded-2xl md:rounded-xl sm:rounded-xl p-10 z-[10] sm:pt-5 bg-gray-800/40 grow flex flex-col justify-center">
        <p className="text-3xl">
          {appState.weatherData.location.name},{" "}
          {appState.weatherData.location.country}
        </p>
        <p className="font-medium text-[48px]">
          {appState.degree === Degree.FAHRENHEIT
            ? appState.weatherData.current.temp_f
            : appState.weatherData.current.temp_c}
          &deg;{appState.degree}
        </p>
        <button
          className="bg-red-900/80 w-28 px-3 py-1 rounded-md cursor-pointer text-xs text-white"
          onClick={switchDeg}
        >
          Switch to &deg;
          {appState.degree === Degree.FAHRENHEIT
            ? Degree.CELSIUS
            : Degree.FAHRENHEIT}
        </button>
      </div>
      <div className="lg:w-96 py-10 px-8 border border-black/80 dark:border-white rounded-2xl min-w-[150px] sm:w-full md:w-full">
        {rightExtras.map(({ name, value }, id) => {
          return (
            <div
              key={name + id}
              className="flex justify-between items-center border-b border-black/80 dark:border-white pb-2 mt-5 w-full"
            >
              <span>{name}</span>
              <span className="text-2xl font-bold">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="dark:text-white h-[50vh] w-full flex justify-center items-center">
      Unable to find location
    </div>
  );
}
