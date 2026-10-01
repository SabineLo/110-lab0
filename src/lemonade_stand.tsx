import { assets, profits, income,expensesUsed } from './calculations';
import promptSync from 'prompt-sync';
import {getWeather} from './weather';

//Purpose of this file is to take in the inputs for the lemonade stand and to output the report.
export function main() {
    const prompt = promptSync();
    let day = 1;
    const lemonade = 0.02;
    let gameRunning: boolean = true;
    
    while(gameRunning){
    let weather = getWeather();
    console.log(weather.name, weather.message);

    console.log("On Day " + day + " the cost of lemonade is $" + lemonade);
    console.log("Lemonade Stand 1");

    const glassMade = Number(prompt("How many glasses of lemonade do you wish to make? "));
    const adSigns = Number(prompt("How many advertising signs (15 cents each) do you want to make? "));
    const charge = Number(prompt("What price (in cents) do you wish to charge for lemonade? ")) / 100;
    
    console.log('\n');
    console.log("$$ LEMONSVILLE DAILY FINANCIAL REPORT $$");
    console.log("Day " + day);
    console.log("Stand 1");
    console.log("Glasses Sold: " + glassMade);
    console.log( charge + " Per Glass");
    console.log("Income $" + income(glassMade, charge));
    console.log(glassMade + " Glasses Made");
    console.log("Expenses $" + expensesUsed(adSigns, glassMade));
    console.log(adSigns + " signs made");
    console.log("Profit: $" + profits(glassMade, charge, adSigns).toFixed(2));
    console.log("Assets $ " + assets(glassMade, charge, adSigns));
    console.log("Price per glass: $" + charge);
    
    //This allows us to quit 
    const quit = prompt("Continue yes, quit write no?");
    if (quit == "no" || quit =="n"){
        gameRunning = false;
    }

    day += 1
    }
}

main();