import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    background: ${({theme}) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    border-radius: 1.0rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    &:disabled {
        cursor: auto;
        opacity: 0.5;
    }
`;