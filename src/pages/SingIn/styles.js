import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
  
    > div {
        display: flex;
        align-items: center;
        gap: 1.9rem;
    }

    @media (max-width: 860px) {
        display: block;
        width: 100%;
        margin: 0 auto;
        > div {
            display: none;
        }
    }
`;

export const Form = styled.form`
    width: 47.6rem;
    height: 60rem;
    margin-top: 9.6rem;
    padding: 6.4rem;
    border-radius: 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > h1 {
        margin-bottom: 3.1rem;
        text-align: center;
    }

    > a {
        text-align: center;
        margin-top: 3.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > .button-form {
        margin-top: 1.8rem;
    }

    @media (max-width: 500px) {
        margin-top: 0;
        width: 100%;
        height: 100vh;
    }
`;
