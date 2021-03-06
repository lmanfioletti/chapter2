import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 1rem 12rem;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;


        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }



`;
/*
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

`;*/