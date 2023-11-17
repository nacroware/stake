




interface Stats{
    totalDeposits: number;
    totalReferralPayout: number;
}

export interface Plan{
    name: string;
    hourlyReturn: number;
}

interface Investment {
    plan: Plan,
    amount: number;
    createdAt: number;
    withdrawn: number;
    isClosed: boolean;
}

interface User {
    refered: number;
    referralReward: number;
    withdrawn: number;
    deposits: number;
    investments: Investment[]
}