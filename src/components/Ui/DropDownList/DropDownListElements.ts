import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
    position: relative;
    padding: 1.5rem 3rem 1.5rem 1.5rem;
    border: 5px solid rgba(66, 125, 72);
    background-color: #000;
    color: #fff;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        right: 1rem;
        top: 50%;
        width: 1rem;
        height: 1rem;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        transform: rotate(45deg) translate(-50%, -50%);

    }
`;

const Options = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    padding: 0;
    margin: 0;
    list-style: none;
`;

const Option = styled.li`
    padding: 1.2rem;
    border: 5px solid rgba(66, 125, 72);
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: .3s ease-in-out;
    &:hover {
        background-color: #fff;
        color: #000;
        transition: .3s ease-in-out;
    }
`;

export default {
    Wrapper, Option, Options, Button
}