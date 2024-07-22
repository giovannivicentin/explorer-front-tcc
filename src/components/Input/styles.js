import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    border: 0.1rem solid transparent;
    border-radius: 1rem;
    
    height: 5.6rem;

    /* Apply border color on hover */
    &:hover {
        border-color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    /* Focus within styling for input */
    &:focus-within {
        border-color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    > input {
        height: 5.6rem;
        width: 100%;
        padding: 1.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        font-size: 1.6rem;
    }
    
    > svg {
        margin-left: 1.8rem;
    }
`;
