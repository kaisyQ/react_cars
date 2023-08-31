import styled from "styled-components";

const Wrapper = styled.nav`
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const BtnWrapper = styled.div`
`;

const  Btn = styled.button`
    position: relative;
    padding: 1rem 3rem;
    background-color: #fff;
    cursor: pointer;

    transition: .4s ease-in-out;
    
    &:hover {
        background: #000;
        color: #fff;
        transition: .4s ease-in-out;
    }


    &:hover&::after {
        background-color: #fff;
        width: 100%;
        transition: .4s ease-in-out;

    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        height: .5rem;
        width: 0;
        background-color: inherit;
    }
`;

export default {
    Wrapper, BtnWrapper, Btn
};