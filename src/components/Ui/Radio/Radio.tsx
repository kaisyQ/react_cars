import React from 'react';

import RadioElements from './RadioElements';

interface IRadioProps {
    checked: boolean,
    text: string,
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: React.FC<IRadioProps> = ({checked, onChange, text}) => {
    console.log(checked);
    return (
        <>
            <RadioElements.Wrapper checked={checked}>

                <RadioElements.Label checked={checked}>

                    <RadioElements.Input onChange={onChange} type='checkbox' checked={checked} />

                    <RadioElements.Radio checked={checked} />

                    <RadioElements.Span>{text}</RadioElements.Span>

                </RadioElements.Label>

            </RadioElements.Wrapper>
        </>
    );
}

export default Radio;