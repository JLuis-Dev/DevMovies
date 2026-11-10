import styled from "styled-components";




export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 10px;
    div {
        display: flex;
        flex-direction: column;
    }

    p {
        color: #fff;
    }

    img {
        width: clamp(88px, 12vw, 140px);
        aspect-ratio: 2 / 3;
        object-fit: cover;
        border-radius: 10px;
    }

    p {
        max-width: 140px;
        overflow-wrap: anywhere;
    }

    @media (max-width: 600px) {
        gap: 12px;

        img {
            width: min(22vw, 100px);
        }

        p {
            max-width: min(22vw, 100px);
            font-size: 13px;
        }
    }
`

export const Title = styled.h4`
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
`
