import { Dispatch, SetStateAction } from "react";
import { Degree, Theme } from "./enums";

export interface FCProps {
  children?: React.ReactNode;
}

export type AppContextType = {
  appState: AppStateType;
  setAppState: Dispatch<SetStateAction<AppStateType>>;
};

export type AppStateType = {
  degree: Degree;
  weatherData: WeatherDataType;
};

export type WeatherDataType = {
  location: {
    name: string;
    country: string;
    region?: string;
    lat?: number;
    lon?: number;
    tz_id?: string;
    localtime_epoch?: number;
    localtime?: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    last_updated_epoch?: number;
    last_updated?: string;
    is_day?: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph?: number;
    wind_kph: number;
    wind_degree?: number;
    wind_dir?: string;
    pressure_mb: number;
    pressure_in?: number;
    precip_mm?: number;
    precip_in?: number;
    humidity: number;
    cloud?: number;
    feelslike_c?: number;
    feelslike_f?: number;
    vis_km?: number;
    vis_miles?: number;
    uv?: number;
    gust_mph?: number;
    gust_kph?: number;
  };
  forecast: {
    forecastday: {
      astro: {
        sunset: string;
        sunrise: string;
      };
      hour: {
        temp_f: number;
        temp_c: number;
        wind_kph: number;
        humidity: number;
        pressure_mb: number;
      }[];
    }[];
  };
};

export type DebounceType = {
  initialValue: string;
  delay?: number;
};

export type CardType = {
  title: string;
  value: number | undefined;
  measure: string | React.ReactNode;
  Icon: React.ElementType;
  subtext: string | number;
};
