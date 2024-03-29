import { City } from "../redux/citiesSlice";

const APIKEY : string = "95cf4a6cc1df99fb470485a959c61a03";

async function getWeather(city: string): Promise<City> {
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return {
    name: data.name,
    //weatherMain: data.weather[0].main,
    temperature: data.main?.temp,
  };
}

const names = ["Jinotega", "Leon", "Matagalpa", "Managua"];


export   { getWeather, names };