import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: ${(props) => (props.$withHeaderSpacing ? '110px 4vw 36px' : '28px 4vw 36px')};
    background: #000;

    h2 {
        margin: 0 0 24px;
        color: #fff;
        font-size: clamp(22px, 2.4vw, 32px);
    }

    .posters {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
        gap: 28px 18px;
        width: 100%;
    }

    .posters > * {
        width: 100%;
        max-width: 300px;
        justify-self: center;
    }

    > button {
        display: block;
        margin: 32px auto 0;
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

        .posters {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px 12px;
        }
    }
`;
