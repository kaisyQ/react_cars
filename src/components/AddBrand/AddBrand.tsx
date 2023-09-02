import React from "react";

import Input from "../Ui/Input/Input";

import Button from "../Ui/Button/Button";

import { createBrand } from "../../api/api";

import { addBrandName } from "../../store/brands/brandsSlice";

import { useAppDispatch } from "../../hooks/hooks";

const AddBrand = () => {

    const [isAddMode, setIsAddMode] = React.useState(false);

    const [brandName, setBrandName] = React.useState('');

    const dispatch = useAppDispatch();

    const onCreateBtnClick = async (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        if(!brandName) {
            return;
        }
        
        const response = await createBrand(brandName);
        console.log(response)
        dispatch(addBrandName(response.data.brandName));

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