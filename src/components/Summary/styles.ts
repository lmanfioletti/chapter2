import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
    gap: 2rem;
    margin-top: -10rem;

    @media (max-width: 733px){
        display: block;
        flex-direction: column;
    }

`
