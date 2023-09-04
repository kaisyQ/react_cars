import React from "react";

import Input from "../Ui/Input/Input";

import Button from "../Ui/Button/Button";

import AddBrandElements from "./AddBrandElements";


interface IAddBrandProps {
    createBrand: (brandName: string) => void
}

const AddBrand: React.FC<IAddBrandProps> = ({ createBrand }) => {

    const [isAddMode, setIsAddMode] = React.useState(false);

    const [brandName, setBrandName] = React.useState('');

    const onCreateBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        if(!brandName) {
            return;
        }
        createBrand(brandName);
    }

    const onCloseEditingClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        setIsAddMode(false);
    }

    return (
        <>
            <AddBrandElements.Wrapper>

                {
                   
                    isAddMode ? <>
                    
                        <AddBrandElements.CreateBlock>
                            
                            <Input 
                                title="Brand Name*" 
                                value={brandName} 
                                onChange={(ev) => setBrandName(ev.target.value)}
                            />
                            

                            <AddBrandElements.Btns>
                            
                                <Button onClick={onCreateBtnClick}>
                                    Create
                                </Button> 
                        
                                <Button onClick={onCloseEditingClick}>
                                    Stop Editing
                                </Button>
                        
                            </AddBrandElements.Btns>
                        </AddBrandElements.CreateBlock>
                    </>
                    : 
                    
                    <Button 
                        onClick={() => setIsAddMode(true)}
                    >
                            Add new brand
                    </Button>

                }

            </AddBrandElements.Wrapper>
        </>
    );
}

export default AddBrand;