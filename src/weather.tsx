// Purpose: generate a random weather condition and a message for the day
export function getWeather() {
    const weatherOptions = [
        { name: "hot and dry", message: "Heatwave is predicted for today!" },
        { name: "sunny", message: "A beautiful, clear day." },
        { name: "cloudy", message: "A cool, cloudy day." },
        { name: "light rain", message: "There is a 20% chance of rain." }
    ];

    const randomIndex = Math.floor(Math.random() * weatherOptions.length);
    return weatherOptions[randomIndex];
}