import { assets, profits, income, expensesUsed } from './calculations';
import promptSync from 'prompt-sync';
import { getWeather, soldItemsBasedOnWeather } from './weather';

const lemonadeGlass = 0.02;
const centsPerDollar = 100;

function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
}

function readNumberInput(prompt: ReturnType<typeof promptSync>, message: string): number {
    const rawValue = prompt(message).trim();
    const parsedValue = Number(rawValue);

    return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function printDailyReport(day: number, glassesMade: number, adSigns: number, charge: number, itemsSold: number) {
    console.log('\n');
    console.log('$$ LEMONSVILLE DAILY FINANCIAL REPORT $$');
    console.log(`Day ${day}`);
    console.log('Stand 1');
    console.log(`Glasses Sold: ${itemsSold}`);
    console.log(`${charge} Per Glass`);
    console.log(`Income ${formatCurrency(income(glassesMade, charge))}`);
    console.log(`${glassesMade} Glasses Made`);
    console.log(`Expenses ${formatCurrency(expensesUsed(adSigns, glassesMade))}`);
    console.log(`${adSigns} signs made`);
    console.log(`Profit: ${formatCurrency(profits(glassesMade, charge, adSigns))}`);
    console.log(`Assets ${formatCurrency(assets(glassesMade, charge, adSigns))}`);
    console.log(`Price per glass: ${formatCurrency(charge)}`);
}

export function main() {
    const prompt = promptSync();
    let day = 1;
    let gameRunning = true;

    while (gameRunning) {
        const weather = getWeather();
        console.log(`${weather.name} - ${weather.message}`);
        console.log(`On Day ${day} the cost of lemonade is ${formatCurrency(lemonadeGlass)}`);
        console.log('Lemonade Stand 1');

        const glassesMade = readNumberInput(prompt, 'How many glasses of lemonade do you wish to make? ');
        const adSigns = readNumberInput(prompt, 'How many advertising signs (15 cents each) do you want to make? ');
        const charge = readNumberInput(prompt, 'What price (in cents) do you wish to charge for lemonade? ') / centsPerDollar;
        const itemsSold = soldItemsBasedOnWeather(weather, glassesMade);

        printDailyReport(day, glassesMade, adSigns, charge, itemsSold);

        const quit = prompt('Continue? yes, quit with no: ').trim().toLowerCase();
        gameRunning = quit !== 'no' && quit !== 'n';
        day += 1;
    }
}

main();