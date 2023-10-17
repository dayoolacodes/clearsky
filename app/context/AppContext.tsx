"use client";
import React, { createContext, useState, useContext, FC } from "react";
import { Degree } from "../helpers/enums";
import { AppContextType, FCProps } from "../helpers/types";

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<FCProps> = ({ children }) => {
  const [appState, setAppState] = useState({
    degree: Degree.CELSIUS,
    weatherData: {
      location: { country: "", name: "" },
      current: {
        temp_c: 0,
        temp_f: 0,
        wind_kph: 0,
        humidity: 0,
        pressure_mb: 0,
        condition: { text: "", icon: "", code: 0 },
      },
      forecast: {
        forecastday: [
          {
            astro: {
              sunrise: "",
              sunset: "",
            },
            hour: [
              {
                temp_c: 0,
                temp_f: 0,
                wind_kph: 0,
                humidity: 0,
                pressure_mb: 0,
              },
            ],
          },
        ],
      },
    },
  });
  const { Provider } = AppContext;

  return <Provider value={{ appState, setAppState }}>{children}</Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within a App provider");
  }

  return context;
};
