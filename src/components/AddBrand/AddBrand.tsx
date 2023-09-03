import React from "react";

import Input from "../Ui/Input/Input";

import Button from "../Ui/Button/Button";

import { useAppDispatch } from "../../hooks/hooks";

interface IAddBrandProps {
    createBrand: (brandName: string) => void
}

const AddBrand: React.FC<IAddBrandProps> = ({ createBrand }) => {

    const [isAddMode, setIsAddMode] = React.useState(false);

    const [brandName, setBrandName] = React.useState('');

    const dispatch = useAppDispatch();

    const onCreateBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        if(!brandName) {
            return;
        }
        createBrand(brandName);
    }

    return (
        <>
            <div>

                {
                   
                    isAddMode ? <>
                    
                        <div>
                            
                            <Input 
                                title="Brand Name*" 
                                value={brandName} 
                                onChange={(ev) => setBrandName(ev.target.value)}
                            />
                            
                            <Button onClick={onCreateBtnClick}>Create</Button> 
                        </div>
                    </>
                    : 
                    
                    <Button 
                        onClick={() => setIsAddMode(true)}
                    >
                            Add new brand
                    </Button>

                }

            </div>
        </>
    );
}

export default AddBrand;