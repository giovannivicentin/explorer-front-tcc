import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 51.2rem;
    
    background: rgba(0, 0, 0, 0.32);
    border: 0.1rem solid rgba(0, 0, 0, 0.65);
    border-radius: 0.8rem;

    padding-inline: 10%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-left: 2.7rem;

    position: relative;

    > img {
        width: 24.5rem;
        height: 24.5rem;
        opacity: 89%;
        border-radius: 50%;
        transform: scale(0.9);
        transition: all ease 0.2s;
        cursor: pointer;
        align-items: center;
    }

    > img:hover {
        transform: scale(1);
    }

    > button {
        width: 100%;
        height: 8.1rem;
        border: none;
        background: transparent;
        display: flex;
        font-size: 1.6rem;
        align-items: center;
        justify-content: center;
        gap: 1.4rem;
        border-bottom: 3.6rem;

        h3 {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: 700;
            font-size: 2.4rem;
            margin-bottom: 0.4rem;
        } 
    }

    > p {
        width: 22rem;
        height: 4.4rem;
        font-weight: 400;
        font-size: 1.4rem;
        text-align: center;
        justify-content: center;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > strong {
        width: 22rem;
        height: 5.1rem;
        margin-top: 1.6rem;

        font-weight: 400;
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS.BLUE};
    }

    > div {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin-bottom: 3.6rem;

        span {
            font-size: 2rem;
        }

        span:nth-child(2) {
            font-weight: 700;
            font-size: 2rem;
        }
    }

    > .favorites {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        position: absolute;
        top: 0;
        margin-left: 10rem;
    }

    > .edit-plate {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        padding-right: 25rem;
        position: relative;
        top: 2.5rem;
    }
`;
