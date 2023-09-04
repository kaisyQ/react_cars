import React from "react";

import InputElements from "./InputElements";

interface IInputProps {
    title: string,
    value: string,
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}


const Input: React.FC<IInputProps> = (props) => {

    const [focused, setFocused] = React.useState(false);
    
    return (
        <>
            <InputElements.Wrapper>
            
                <InputElements.Label>
                    
                    <InputElements.LabelSpan value={props.value} focused={focused&&focused}>
                        {props.title}
                    </InputElements.LabelSpan>
                
                    <InputElements.Input 

                        value={props.value}
                    
                        onChange={props.onChange}

                        onFocus={() => setFocused(true)} 
                    
                        onBlur={() => setFocused(false)}
                        
                    />

                </InputElements.Label>

            </InputElements.Wrapper>
        </>
    );
}

export default Input;