import React, { useState } from "react";

import ListElements from "./DropDownListElements";


interface IDropDownListProps {
  options: string[],
  onSelect: (option: string) => void,
  title: string
};


const DropdownList: React.FC<IDropDownListProps> = ({ options, onSelect, title }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <ListElements.Wrapper>
        
        <ListElements.Button 
            onClick={(ev) => {
                    ev.preventDefault();
                    setIsOpen(!isOpen);
                }
            }
        >
            { selectedOption || title }
        </ListElements.Button>
        
        {
            isOpen && (
                <ListElements.Options>
                {
                    options.map((option) => (
                        <ListElements.Option key={option} onClick={() => handleSelect(option)}>
                            { option }
                        </ListElements.Option>)
                    )
                }
                </ListElements.Options>
            )
        }
        
        </ListElements.Wrapper>
    );
}


export default DropdownList;