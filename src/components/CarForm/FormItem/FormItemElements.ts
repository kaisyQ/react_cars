import styled from "styled-components";

interface ILabelSpanProps {
    focused: boolean,
    value: string
}

const FormItem = styled.div`
    width: 100%;
    position: relative;
`;

const FormInput = styled.input`
    width: 100%;
    background-color: #fff;
    padding: 2.2rem 3.2rem;
    font-size: 2rem;
    font: inherit;

    transition: .5s ease-in-out;
    
    &:focus {
        outline: 5px solid rgba(66, 125, 72);
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

    position: absolute;
    left: 2rem;
    top: ${props => props.focused || props.value ? '.4rem' : '50%'};
    color: ${props => props.focused || props.value ? '#fff' : '#000'};
    transform: ${props => props.focused || props.value ? '0' : 'translateY(-50%)'};
    transition: .2s ease-in-out;

    pointer-events: none;
`;


export default {
    FormInput, FormItem, Label, LabelSpan
};