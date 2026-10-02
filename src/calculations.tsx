export class LemonadeStandFinancials {
    private static readonly lemonadeGlass = 0.02;
    private static readonly adSignCost = 0.15;

    private assetPrice = 2;

    public profits(glassMade: number, charge: number, adSigns: number): number {
        return this.income(glassMade, charge) - this.expensesUsed(adSigns, glassMade);
    }

    public adUse(adSigns: number): number {
        return adSigns * LemonadeStandFinancials.adSignCost;
    }

    public assets(glassMade: number, charge: number, adSigns: number): number {
        this.assetPrice += this.profits(glassMade, charge, adSigns);
        return this.assetPrice;
    }

    public expensesUsed(adSigns: number, glassMade: number): number {
        return LemonadeStandFinancials.lemonadeGlass * glassMade + this.adUse(adSigns);
    }

    public income(glassMade: number, charge: number): number {
        return glassMade * charge;
    }
}

export const financials = new LemonadeStandFinancials();

export function profits(glassMade: number, charge: number, adSigns: number) {
    return financials.profits(glassMade, charge, adSigns);
}

export function adUse(adSigns: number) {
    return financials.adUse(adSigns);
}

export function assets(glassMade: number, charge: number, adSigns: number) {
    return financials.assets(glassMade, charge, adSigns);
}

export function expensesUsed(adSigns: number, glassMade: number) {
    return financials.expensesUsed(adSigns, glassMade);
}

export function income(glassMade: number, charge: number) {
    return financials.income(glassMade, charge);
}
