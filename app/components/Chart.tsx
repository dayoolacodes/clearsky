"use client";
import React from "react";
import { AppContextType } from "../helpers/types";
import { Degree } from "../helpers/enums";
import { AxisOptions, Chart as ReactChart } from "react-charts";
import ResizableBox from "./RisezableBox";
import { useTheme } from "next-themes";

export default function Chart({ appState }: AppContextType) {
  const { theme } = useTheme();
  const dataSet = appState.weatherData.forecast.forecastday.map(
    ({ date, day }: any) => {
      return {
        date,
        degree:
          appState.degree === Degree.CELSIUS ? day.avgtemp_c : day.avgtemp_f,
      };
    }
  ).slice(1); //next 7days minus today

  const data: { label: string; data: MyDatum[] }[] = [
    {
      label: "Weather",
      data: dataSet,
    },
  ];

  type MyDatum = { date: Date; degree: number };

  const primaryAxis = React.useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.degree,
        elementType: "area",
      },
    ],
    []
  );

  return (
    <div className="dark:bg-gray-800/80 bg-black/30 dark:text-white mt-10 w-full lg:p-10 sm:p-3 text-sm font-semibold rounded-3xl">
      <p className="mb-6">
        Average temperature chart for the next 7 days in &deg;{appState.degree}
      </p>
      <ResizableBox height={180} responsive={true}>
        <ReactChart
          options={{
            dark: theme === "light" ? false : true,
            data,
            primaryAxis,
            secondaryAxes,
            defaultColors: [theme === "light" ? "rgb(251,146,60)" : "white"],
          }}
        />
      </ResizableBox>
    </div>
  );
}
