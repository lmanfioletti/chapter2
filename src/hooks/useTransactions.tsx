import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Transaction, NewTransaction } from "../interfaces";
import { api } from "../services/api";

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextProps {
    transactions: Transaction[];
    createTransaction: (newTransaction: NewTransaction) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextProps>(
    {} as TransactionContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(newTransaction: NewTransaction) {
        const response = await api.post('/transactions', {
            ...newTransaction,
            createdAt: new Date(),
        });
        const { transaction } = response.data;
        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
};

export function useTransactions() {
    return useContext(TransactionsContext);
};