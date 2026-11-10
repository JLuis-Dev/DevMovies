import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 10px;

    span {
        font-weight: 700;
        color: #fff;
        border-radius: 30px;
        border: 2px solid #fff;
        padding: 8px 16px;
        background-color: #0f0f0f;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 600px) {
        margin-top: 18px;

        span {
            padding: 6px 12px;
            font-size: 14px;
        }
    }
`
