import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: 
    "header" 
    "content"
    "footer";
`;

export const FrontCover = styled.div`
  margin-top: 6.4rem;
  margin-inline: auto;

  > img {
    width: 63.2rem;
    margin-top: 3.1rem;
  }
`;

export const Content = styled.div`
    grid-area: content;
    padding: 16.4rem 12.4rem 10rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 3.8rem;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border-radius: 0.8rem;
        height: 26rem;
        position: relative;

        div {
            margin-right: 4.7rem;
        }

        img {
            position: absolute;
            bottom: 0;
            left: 0;
            display: inline-block;

            @media (max-width: 700px) {
                width: 100%;
                max-width: 40%;
            }
        }
    }

    @media (max-width: 1100px) {
        width: 100%;
        margin: auto;

        > div {
            width: 80rem;
            justify-content: center;
            text-align: center;

            img {
                display: none;
            }
        }
    }

    @media (max-width: 900px) {
        max-width: 40rem;
        padding-top: 6.4rem;
        margin: auto;

        > div {
            width: 40rem;
            justify-content: center;
            text-align: center;

            img {
                display: none;
            }
        }
    }
`;