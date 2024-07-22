import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    
    background:  ${({ theme, isNew }) => isNew ? 'transparent' :
    theme.COLORS.BACKGROUND_700};
    color:  ${({ theme }) => theme.COLORS.GRAY_300};


    border: ${({ theme, isNew }) => isNew ? `1px dashed  ${theme.COLORS.GRAY_300}` : 'none'};
    border-radius: 1.0rem;
    padding-right: 1.6rem;
    
    
    > button {
        border: none;
        background: none;
        color:  ${({ theme }) => theme.COLORS.WHITE};
        
    }
    input {
        height: 3.2rem;
        width: 10.0rem;
        padding: 1.4rem;
       
        color:  ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
         
        font-size: 1.6rem;
       
        
    }
`;
