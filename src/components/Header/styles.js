import styled from "styled-components";

export const Container = styled.div`
    padding: 0 12.3rem;
    width: 100%;
    height: 10.4rem;
    display: flex;
    align-items: center;
    gap: 3.2rem;
    background: #00111A;
    grid-area: header;

    >input {
        width: 30rem;
    }

    > .logo {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        background: #00111A;

        h1 {
            font-size: 2.5rem;
            width: max-content;
        }
    }

    div {
        background: #0D1D25;
        border: none;
    }

    > button {
        width: 21.6rem;
        white-space: nowrap;
    }

    > .buttonText {
        width: 13.9rem;
        height: 2.6rem;
        background: transparent;
        border: none;
        font-weight: 400;
        font-size: 1.6rem;
        color: #C4C4CC;
    }

    > .logout {
        background: transparent;
        border: none;
        padding-top: 3.6rem;
        padding-bottom: 3.6rem;
        display: flex;
        align-items: center;
        width: 3.2rem;
        height: 3.2rem;

        svg {
            font-size: 3.2rem;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 13rem;

        button {
            display: none;
        }

        .logout {
            display: none;
        }

        > .logo {
            display: none;
        }
    }
    `;