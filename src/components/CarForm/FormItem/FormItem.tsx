import React from "react";

import FormItemElements from "./FormItemElements";

interface IFormItemProps {
    title: string,
    inputChangeEv: (ev: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

const FormItem: React.FC<IFormItemProps> = ({title, value, inputChangeEv}) => {

    const [focused, setFocused] = React.useState(false);
    
    
    return (
        <>
            <FormItemElements.FormItem>
                        
                <FormItemElements.Label>
                    
                    <FormItemElements.LabelSpan value={value} focused={focused}>
                        {title}
                    </FormItemElements.LabelSpan>
                
                    <FormItemElements.FormInput 

                        value={value}
                    
                        onChange={inputChangeEv}

                        onFocus={() => setFocused(true)} 
                    
                        onBlur={() => setFocused(false)}
                        
                    />

                </FormItemElements.Label>

            </FormItemElements.FormItem>
        </>
    );
}

export default FormItem;