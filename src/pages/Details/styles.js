import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80vh;
  
    > main {
        > div {
            .backToPage {
                background: transparent;
                border: none;
                color: ${({ theme }) => theme.COLORS.GRAY};
                display: flex;
                align-items: center;
                gap: 1.1rem;
                font-weight: 500;
                font-size: 2.4rem;
                margin-top: 2.4rem;
                padding-left: 15.4rem;
            }

            svg {
                font-size: 22rem;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }

            @media (min-width: 768px) {
                padding-inline: 0;
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.4rem 12.3rem;
    
    .plate {
        width: 39rem;
        height: 39rem;
        margin-left: 10.5rem;
    }

    > .information {
        display: flex;
        flex-direction: column;
        margin-left: 3rem;

        .description {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-block: 3rem;
        }

        .description h2 {
            font-weight: 500;
            font-size: 4rem;
        }

        .description p {
            font-size: 2.4rem;
            margin-left: 2.5rem;
            padding: 3.5rem;
        }

        .ingredients {
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 2.3rem;
            margin-top: 2.7rem;
        }

        .price {
            display: flex;
            align-items: center;
            gap: 4rem;
            margin-top: 4rem;
            strong {
                font-weight: 400;
                font-size: 3.2rem;
                line-height: 160%;
                text-align: center;
                color: #82F3FF;
            }

            .btn {
                background: none;
                border: none;
                color: ${({ theme }) => theme.COLORS.WHITE};
                display: flex;
                align-items: center;
                position: relative;
                z-index: 2;
            }

            @media (min-width: 768px) {
                padding-inline: 0;
                
                > strong {
                    min-width: 14rem;
                }
            }
        }
    }
`;