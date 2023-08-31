import styled from "styled-components";

interface ILabelProps {
    checked: boolean
}

const Wrapper = styled.div<ILabelProps>`

`;



const Label = styled.label<ILabelProps>`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 2rem;
`;

const Radio = styled.div<ILabelProps>`
    position: relative;
    width: 3rem;
    height: 3rem;
    border: 5px solid blue;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 50%;
        width: 50%; 
        background: ${props => props.checked ? 'blue' : 'white'};
        border-radius: 50%;

        visibility: ${props => props.checked ? 'visible' : 'hidden'};
        opacity: ${props => props.checked ? '1' : '0'};
        transition: .4s ease-in-out;
    }
`;

const Span = styled.span`
    cursor: pointer;
    user-select: none;
`;

const Input = styled.input`
    display: none;
`;

export default {
    Wrapper, Label, Input, Radio, Span
};