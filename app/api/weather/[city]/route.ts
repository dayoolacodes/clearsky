import { NextResponse } from "next/server";

export const GET = async (request: Request, context: any) => {
  const { city } = context.params;
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?days=8&key=${process.env.NEXT_PUBLIC_API_KEY}&aqi=no&q=${city}`,
    { cache: "no-cache" }
  );
  const data = await res.json();
  return NextResponse.json(data);
};
