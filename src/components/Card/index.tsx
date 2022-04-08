import { Container } from "./styles";

export interface CardProps {
    title: string;
    imgLink: string;
    value: number;
}

export function Card({ title, imgLink, value }: CardProps) {
    if (title == "Total"){
        console.log(title);
        return (
            <Container style={{ background: 'var(--green)', color: 'var(--shape)' }}>
                <header >
                    <p>{title}</p>
                    <img src={imgLink} alt={title.toLowerCase()} />
                </header>
                <strong>R${value}</strong>
            </Container>
        )
    }
    else {
        return (
            <Container >
                <header >
                    <p>{title}</p>
                    <img src={imgLink} alt={title.toLowerCase()} />
                </header>
                <strong>R${value}</strong>
            </Container>
        );
    }
}