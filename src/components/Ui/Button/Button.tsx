import styled from "styled-components";

const Button = styled.button`
    position: relative;
    padding: 1rem 3rem;
    background-color: #fff;
    border: 2px solid #000;
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

export default Button;