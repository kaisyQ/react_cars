import styled from "styled-components";

interface ILabelSpanProps {
    focused: boolean,
    value: string
}

const Wrapper = styled.div`
    width: 100%;
    position: relative;
`;

const Input = styled.input`
    width: 100%;
    background-color: #000;
    padding: 2.2rem 3.2rem;
    font-size: 2rem;
    font: inherit;

    transition: .5s ease-in-out;
    color: #fff; 
    border: 5px solid rgba(66, 125, 72);

    
    &:focus {
        background-color: #000;
        color: #fff;
        transition: .5s background-color,color ease-in-out;
    }
`;

const Label = styled.label`
`;

const LabelSpan = styled.span<ILabelSpanProps>`
    font-size: ${props => props.focused || props.value ? '1.2rem' : '1.8rem'};
    font-weight: 600;
    color: #fff;

    position: absolute;
    left: 2rem;
    top: ${props => props.focused || props.value ? '.7rem' : '50%'};
    color: ${props => props.focused || props.value ? '#fff' : '#000'};
    color: #fff;
    transform: ${props => props.focused || props.value ? '0' : 'translateY(-50%)'};
    transition: .2s ease-in-out;

    pointer-events: none;
`;


export default {
    Input, Wrapper, Label, LabelSpan
};