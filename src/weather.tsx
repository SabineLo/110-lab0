// Purpose: generate a random weather condition and a message for the day
 
export function getWeather() {
    const weatherOptions = [
        { name: "hot and dry", message: "Heatwave is predicted for today!" },
        { name: "sunny", message: "A beautiful, clear day." },
        { name: 
            "cloudy", message: "A cool, cloudy day." },
        { name: "light rain", message: "There is a 20% chance of rain." }
    ];

    const randomIndex = Math.floor(Math.random() * weatherOptions.length);
    return weatherOptions[randomIndex];
}

export function soldItemsBasedOnWeather(weather: { name: string; message: string }, glassMade: number) {
        if (weather.name === "hot and dry") {
           let itemsSold = getRandomInt(1, glassMade);
           return itemsSold;
        }else if (weather.name === "sunny") {
            let itemsSold = getRandomInt(1, glassMade);
            return itemsSold;
        }else if (weather.name === "cloudy") {
            let itemsSold = getRandomInt(1, glassMade / 2);
            return itemsSold;
        }else if (weather.name === "light rain") {
            let itemsSold = getRandomInt(1, 3);
            return itemsSold;
        }
        return 0;
}

export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}