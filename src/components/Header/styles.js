import styled from "styled-components";


export const Container = styled.div`
    z-index: 99;
    width: 100vw;
    max-width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px clamp(16px, 4vw, 50px);
    background-color: ${(props) => (props.changeBackground ? '#000' : 'transparent')};
    transition: background-color 0.6s ease-in-out;

    img{
        width: clamp(100px, 16vw, 220px);
        flex-shrink: 0;
        max-height: 56px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        padding: 10px 20px;
        background-color: #000;

        img {
            width: clamp(72px, 18vw, 140px);
        }
    }

    @media (max-width: 480px) {
        padding: 8px 12px;

        img {
            width: 72px;
        }
    }
`
export const Menu = styled.ul`
    display: flex;
    min-width: 0;
    flex-shrink: 1;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    gap: clamp(12px, 3vw, 32px);
    white-space: nowrap;

    @media (max-width: 768px) {
        gap: clamp(12px, 3vw, 22px);
    }

    @media (max-width: 480px) {
        gap: 12px;
    }
`
export const Li = styled.li`
    cursor: pointer;
    font-weight: 600;
    font-size: clamp(16px, 2vw, 24px);
    position: relative;
    
    a {
        color: #fff;
        text-decoration: none;
        
    }

    &::after {
        content: '';
        height: 3px;
        width: ${(props) => (props.isActive ? '100%' : 0)};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after{
        width:100%;
    }

    @media (max-width: 768px) {
        font-size: clamp(14px, 2.2vw, 18px);

        &::after {
            bottom: -6px;
        }
    }

    @media (max-width: 480px) {
        font-size: 13px;
    }
`
