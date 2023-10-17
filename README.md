# ClearSky Weather App with Next.js 13

This is a simple weather app built with Next.js 13 that allows you to check the weather forecast for different locations. It uses  [Weather Api](https://www.weatherapi.com/)  for fetching weather data.

## Features

- View current weather conditions for a specific location.
- Get a 7-day weather forecast.
- Get weather of locations in &deg;C and &deg;F.
- Dark and Light mode.

## Installation

To run this app locally, follow these steps:

1\. Clone the repository to your local machine:

```bash
git clone https://github.com/dayoolacodes/clearsky.git
```

2\. Navigate to the project directory:

```bash
cd clearsky
```

3\. Install the dependencies:

```
npm install

```

4\. Configure API Keys:

   - You will need to obtain an API key from [Weather Api](https://www.weatherapi.com/)  and configure it in your project. Refer to the [API Docs](https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2-oas3-oas3.1-oas3.1/#/APIs) for more details.

5\. Start the development server:

```
yarn dev
```

6\. Open your browser and access the app at [http://localhost:3000](http://localhost:3000).

## Configuration

You can configure the app by modifying the following files:

- Create a `.env` file in the project root and configure it with your API key as follows:

```plaintext
NEXT_PUBLIC_API_KEY=your_api_key_here
```

## Usage

- Enter a location in the search bar to get the current weather and 7-day forecast.


## Acknowledgments

- [Weather API](https://www.weatherapi.com/) for providing weather data.


## Resources

- Next.js 13 Documentation: [https://nextjs.org/docs](https://nextjs.org/docs)

- [API Provider Documentation]: [Weather API Docs](https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2-oas3-oas3.1-oas3.1/#/APIs)

