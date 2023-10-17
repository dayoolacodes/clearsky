import React from "react";
import Card from "./Card";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { GiWindSlap } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineWaves } from "react-icons/md";
import { AppContextType, CardType } from "@/app/helpers/types";
import { Degree } from "@/app/helpers/enums";
import dayjs from "dayjs";
import { degIn5hr } from "@/app/utils";

export default function Cards({ appState }: AppContextType) {
  if (!appState.weatherData.current) {
    return;
  }

  const fifthHour = dayjs().add(5, "hours").hour() ?? 0; // get fifth hour from now
  const actualDay = dayjs().hour() + 5 < 23 ? 0 : 1; //get correct day after adding 5hours. 0 => today, 1 => next day

  const cardsArr: CardType[] = [
    {
      title: "Current Temperature",
      value:
        appState.degree === Degree.FAHRENHEIT
          ? appState.weatherData.current.temp_f
          : appState.weatherData.current.temp_c,
      measure: <>&deg;{appState.degree}</>,
      Icon: LiaTemperatureLowSolid,
      subtext:
        appState.degree === Degree.FAHRENHEIT
          ? degIn5hr({
              future:
                appState.weatherData.forecast.forecastday[actualDay].hour[
                  fifthHour
                ].temp_f,
              current: appState.weatherData.current.temp_f,
            })
          : degIn5hr({
              future:
                appState.weatherData.forecast.forecastday[actualDay].hour[
                  fifthHour
                ].temp_c,
              current: appState.weatherData.current.temp_c,
            }),
    },
    {
      title: "Wind Speed",
      value: appState.weatherData.current.wind_kph,
      measure: " km/p",
      Icon: GiWindSlap,
      subtext: degIn5hr({
        future:
          appState.weatherData.forecast.forecastday[actualDay].hour[
            fifthHour
          ].wind_kph,
        current: appState.weatherData.current.wind_kph,
      }),
    },
    {
      title: "Humidity",
      value: appState.weatherData.current.humidity,
      measure: " %",
      Icon: WiHumidity,
      subtext: degIn5hr({
        future:
          appState.weatherData.forecast.forecastday[actualDay].hour[
            fifthHour
          ].humidity,
        current: appState.weatherData.current.humidity,
      }),
    },
    {
      title: "Pressure",
      value: appState.weatherData.current.pressure_mb,
      measure: "mm",
      Icon: MdOutlineWaves,
      subtext: degIn5hr({
        future:
          appState.weatherData.forecast.forecastday[actualDay].hour[
            fifthHour
          ].pressure_mb,
        current: appState.weatherData.current.pressure_mb,
      }),
    },
  ];

  return (
    <div className="w-full relative lg:flex gap-4 items-center flex-wrap md:block sm:block">
      {cardsArr.map((card, index) => {
        return (
          <div key={card.title + index} className="grow">
            <Card {...{ ...card }} />
          </div>
        );
      })}
    </div>
  );
}
