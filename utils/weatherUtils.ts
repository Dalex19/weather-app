type WeatherType = "sunny" | "cloudy" | "rainy" | "windy";

export function getWeatherType (temperature: number): WeatherType {
    if (temperature > 25) {
        return "sunny";
    } else if (temperature > 10) {
        return "cloudy";
    } else if (temperature > 5) {
        return "rainy";
    } else {
        return "windy";
    }
}

export function getWeatherImage(type: WeatherType): { name: string; source: any; color: string } {
    switch (type) {
      case "sunny":
        return { name: "sunny", source: require("../assets/soleado.png"), color: "#DBFCFF" };
      case "cloudy":
        return { name: "cloudy", source: require("../assets/nublado.png"), color: "#D7D6D6" };
      case "rainy":
        return { name: "rainy", source: require("../assets/lluvia.png"), color: "#A9DEF9" };
      case "windy":
        return { name: "windy", source: require("../assets/viento.png"), color: "#CFDEE7" };
    }
}