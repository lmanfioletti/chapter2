import { Card } from "../Card";
import { Container } from "./styles";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../hooks/useTransactions";


export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposity'){ 
        acc.deposits += transaction.amount 
        acc.total += transaction.amount
    }else{
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
        }
        return acc;
    
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
            <Card title="Entradas" value={summary.deposits} imgLink={incomeImg} />
            <Card title="Saídas" value={summary.withdraws} imgLink={outcomeImg} />
            <Card title="Total" value={summary.total} imgLink={totalImg} />
        </Container>
    );
}