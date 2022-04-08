import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Compra da cafeteira italiana</td>
                        <td className="withdraw">-R$69,90</td>
                        <td>Utilidades</td>
                        <td>08/04/2022</td>
                    </tr>
                    <tr>
                        <td>Salário CIandT</td>
                        <td className="deposity">R$1090,90</td>
                        <td>Trabalho</td>
                        <td>05/04/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
};