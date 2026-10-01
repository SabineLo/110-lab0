import { assets } from './calculations';
import promptSync from 'prompt-sync';

function main() {
    const prompt = promptSync();
    const day = 1;
    // stands = 1;
    const percentage = 0;
    //how much to buy
    const lemonade = 0.02;
    const adCost = 0.15;
    const weather = {"hot and dry":"Heatwave is predcted for today!" , "sunny":"", "cloudy": "", "light rain": percentage + "Chance of Rain"};
    //random for weather

    console.log("On Day " + day + "the cost of lemonade is $" + lemonade);
    console.log("Lemonade Stand 1");
    console.log("Assets " + assets());
    const glassMade = prompt("How many glasses of lemonade do you wish to make? ")
    console.log(`You made ${glassMade}.`);
}

main();