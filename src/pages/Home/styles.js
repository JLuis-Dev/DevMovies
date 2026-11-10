import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

export const Background = styled.div`
    position: relative;
    min-height: 100vh;
    padding: 90px 24px 32px;
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.55);
    }

    @media (max-width: 768px) {
        min-height: auto;
        padding-top: 110px;
    }
`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 55%;

    h1{
        font-size: clamp(2.2rem, 5vw, 5rem);
        font-weight: 700;
        color: #fff;
    }

    p{
        font-size: clamp(16px, 1.5vw, 20px);
        font-weight: 500;
        color: #fff;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 16px 0;
    }
`

export const Poster = styled.div`
    z-index: 2;
    width: min(32%, 400px);

    img{
        display: block;
        width: 100%;
        border-radius:30px;
        box-shadow: rgb( 100 100 111 / 20%) 0px 7px 29px 0px;
        animation: ${scale} 0.5s linear;
    }

    @media (max-width: 768px) {
        width: min(40%, 240px);
    }

    @media (max-width: 520px) {
        display: none;
    }
`

export const Conteiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1500px;

    @media (max-width: 768px) {
        gap: 20px;
    }
`

export const ConteinerButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 30px;

    @media (max-width: 520px) {
        button {
            font-size: 16px;
            padding: 9px 14px;
        }
    }
`