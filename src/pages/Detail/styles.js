import styled, { keyframes } from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0);

    }
    to {
        transform: scale(1);
    }


`


export const Background = styled.div`
    background-image: url(${(props) => props.image});
    height: clamp(240px, 50vh, 560px);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    }
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    max-width: 1500px;
    margin: -100px auto 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-top: -60px;
        padding: 0 20px;
    }
`
export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 1;

    img {
        width: min(32vw, 300px);
        border-radius: 30px;
        box-shadow: rgb( 100 100 111 / 20%) 0px 7px 29px 0px;
        animation: ${scale} 0.5s linear;
    }

    @media (max-width: 768px) {
        height: auto;

        img {
            width: min(60vw, 300px);
        }
    }
`


export const Info = styled.div`
    padding: 20px;
    /* background-color: rgba(0, 0, 0, 0.8); */
    width: 50%;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
        font-size: 50px;
        font-weight: 700;
        color: #fff;
    }

    p {
        font-weight: 700;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    max-width: 800px;
    border-radius: 30px;
    margin: 0 20px;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0;

        h2 {
            font-size: clamp(28px, 6vw, 42px);
        }
    }
`;

export const ConteinerMovies = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;
        height: 100%;
        margin: 20px 0;
    }

    h4 {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    iframe {
        border: none;
        aspect-ratio: 16 / 9;
        height: auto;
    }

    @media (max-width: 600px) {
        padding: 16px;
    }
`
