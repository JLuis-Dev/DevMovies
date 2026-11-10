import styled from "styled-components";

export const Container = styled.div`

    background: #000;
    padding: 0 20px;
    padding-top: ${(props) => (props.$withHeaderSpacing ? '70px' : '0')};
    
    h2 {
        color: #fff;
        font-size: 24px;
        margin: 50px 0 20px 20px;
    }

    .swiper-wrapper {
        display: flex;
    }

    .swiper-slide {
        width: 300px;

    }


    > button {
        display: block;
        margin: 24px auto 0;
        padding: 10px 24px;
        border: 2px solid #fff;
        border-radius: 24px;
        background: transparent;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
    }

    > button:hover:not(:disabled) {
        background: #fff;
        color: #000;
    }

    > button:disabled {
        cursor: wait;
        opacity: 0.6;
    }

    @media (max-width: 600px) {
        padding-right: 16px;
        padding-left: 16px;

        .swiper-slide {
            width: calc((100vw - 44px) / 2);
        }

        h2 {
            margin-left: 0;
        }
    }
`;