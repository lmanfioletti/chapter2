import logoImg from '../../assets/logo.svg'
import { Container } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : HeaderProps) {


    return (
        <Container>
            <img src={logoImg} alt="lm money" />
            <button type="button" onClick={onOpenNewTransactionModal} >
                Nova transação
            </button>
        </Container>
    )
}