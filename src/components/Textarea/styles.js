import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 27.5rem;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: 0.1rem solid white;
    resize: none;
    padding: 1.6rem;
    border-radius: 1rem;
    margin-bottom: 4rem;
    margin-top: 1rem;
`;