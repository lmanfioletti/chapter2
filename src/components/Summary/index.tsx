import { Card } from "../Card";
import { Container } from "./styles";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"


export function Summary() {
    return (
        <Container>
            <Card title="Entradas" value={17400.00} imgLink={incomeImg} />
            <Card title="Saídas" value={1450.00} imgLink={outcomeImg} />
            <Card title="Total" value={15000.00} imgLink={totalImg} />
        </Container>
    );
}