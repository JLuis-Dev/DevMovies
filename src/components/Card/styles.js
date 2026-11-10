import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    align-items: stretch;

    img{
        display: block;
        width: 300px;
        max-width: 100%;
        aspect-ratio: 2 / 3;
        object-fit: cover;
        border-radius: 16px;
    }

    h3{
        color: white;
        margin-top: 12px;
        font-size: clamp(14px, 1.2vw, 18px);
        line-height: 1.35;
    }
`
