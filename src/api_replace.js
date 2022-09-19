// require('dotenv').config()

export const WEATHER_API_KEY = `5cc5289d7emsh979396c9a9e3eefp186bbejsnc9dbc8408785`

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `b5160f6261b60ed2e93a3754a8a382bc`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
