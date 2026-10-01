const lemonade = 0.02;
let assetPrice = 2;

export function profits(glassMade: number, charge: number, adSigns: number) {
    return income(glassMade, charge) - expensesUsed(adSigns, glassMade);
}

export function adUse(adSigns: number) {
    return adSigns * 0.15;
}

export function assets(glassMade: number, charge: number, adSigns: number) {
    assetPrice = assetPrice + profits(glassMade, charge, adSigns);
    return assetPrice;
}

export function expensesUsed(adSigns: number, glassMade: number) {
    return lemonade * glassMade + adUse(adSigns);
}

export function income(glassMade: number, charge: number) {
    return glassMade * charge;
}
