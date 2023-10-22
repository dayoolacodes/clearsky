"use client";
import React, { useEffect, useState } from "react";
import Cards from "./components/CardComponent/Cards";
import Header from "./components/Header";
import WeatherHero from "./components/WeatherHero";
import { WeatherDataType } from "./helpers/types";
import { useAppContext } from "./context/AppContext";
import Loader from "./components/Loader";
import Charts from "./components/Chart";

export default function Home() {
  const [loading, setLoading] = useState(true)
  const { appState, setAppState } = useAppContext();

  //initial load with defaultValue -Leeds
  useEffect(() => {
    fetch(`./api/weather/Leeds`)
      .then((resp) => resp.json())
      .then((resp: WeatherDataType) => {
        if (resp.current) {
          setAppState((val) => ({
            ...val,
            weatherData: resp,
          }));
        } else {
          return null;
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <main className="bg-hero_image dark:bg-dark_hero_image bg-cover md:p-5 sm:p-5 lg:py-[1rem] lg:px-[3rem]">
      <Header />
      <WeatherHero {...{ appState, setAppState }} />
      <Cards {...{ appState, setAppState }} />
      <Charts {...{ appState, setAppState }} />
    </main>
  );
}
