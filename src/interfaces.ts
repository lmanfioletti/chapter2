export interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

export interface NewTransaction {
    category: string;
    title: string;
    type: string;
    amount: number;
}