const sales = 0;
const expenses = 0;
const numGlass = 0;
const adAmount = 0;
const charge = 0;
const lemonade = 0;
export function profits() {
    return sales - expenses;
}

export function glassSold() {
    return numGlass + adAmount;
}

export function adUse() {
    return adAmount * 0.15;
}

export function assets() {
    return 2;
}

export function expensesUsed() {
    return (lemonade * numGlass + adUse());
}

export function income() {
    return numGlass * charge;
}
