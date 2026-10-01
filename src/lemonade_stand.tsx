import { assets, profits, income,expensesUsed } from './calculations';
import promptSync from 'prompt-sync';

export function main() {
    const prompt = promptSync();
    const day = 1;
    const percentage = 0;
    const lemonade = 0.02;
    const weather = {"hot and dry":"Heatwave is predcted for today!" , "sunny":"", "cloudy": "", "light rain": percentage + "Chance of Rain"};
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
    //increase  by day keep playing while loop?
    
}

main();