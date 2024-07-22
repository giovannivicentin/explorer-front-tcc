import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    background: #00111A;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: footer;
    padding: 1.7rem 12.3rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1.1rem;

        h1 {
            font-weight: 700;
            font-size: 2.5rem;
            color: rgba(255, 255, 255, 0.3);
        }
    }

    > span {
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: #FFFAF1;
    }
    `;