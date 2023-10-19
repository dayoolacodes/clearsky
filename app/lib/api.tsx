export const getCurrentWeather = async ({ city }: { city: string }) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&aqi=no&q=${city}`
  );
  const data = await res.json();

  return data;
};

export const getWeather = async ({ city }: { city: string }) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?days=8&key=${process.env.NEXT_PUBLIC_API_KEY}&aqi=no&q=${city}`
  );
  const data = await res.json();

  return data;
};
