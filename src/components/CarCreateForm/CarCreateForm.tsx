import React from "react";

import Input from "../Ui/Input/Input";

import Radio from "../Ui/Radio/Radio";

import Button from "../Ui/Button/Button";

import DropdownList from "../Ui/DropDownList/DropDownList";

import CarCreateFormElements from "./CarCreateFormElements";

import { LEFT_WHEEL, RIGHT_WHEEL } from "../../constants/constants";

import { createCar } from "../../api/api";

import AddBrand from "../AddBrand/AddBrand";

interface ICarCreateFormProps {
    brandNames: Array<string>
}

const CarCreateForm: React.FC<ICarCreateFormProps> = ({ brandNames }) => {

    const [name, setName] = React.useState('');
    const [brandName, setBrandName] = React.useState('');
    const [letfWheel, setLeftWheel] = React.useState(false);

    const handleBrandNameSelect = (option: string) => {
        setBrandName(option);
    }   

    const leftRadioChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (letfWheel) {
            return;
        }
        setLeftWheel(true);
    }

    const rightRadioChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (!letfWheel) {
            return;
        }
        setLeftWheel(false);
    }
    
    return (
        <>

            <CarCreateFormElements.Wrapper>

                <CarCreateFormElements.Form>
                
                    <Input title="Name*" value={name} onChange={(ev) => setName(ev.target.value)}/>
                    
                    {
                        brandNames ? <>
                            <DropdownList 
                                title="Select brand"
                                options={brandNames} 
                                onSelect={handleBrandNameSelect}
                            />
                        </> : null
                    }

                    <AddBrand />
                    
                    <CarCreateFormElements.RadioWrapper>
                    
                        <Radio text={LEFT_WHEEL} checked={letfWheel} onChange={leftRadioChange} />
                        
                        <Radio text={RIGHT_WHEEL} checked={!letfWheel} onChange={rightRadioChange} />
                    
                    </CarCreateFormElements.RadioWrapper>
                    
                    <Button onClick={async (ev) => {
                        ev.preventDefault();
                        
                        const response = await createCar(
                            name, brandName, letfWheel ? LEFT_WHEEL : RIGHT_WHEEL
                        );

                        console.log(response);
                        
                        
                    }}>Create</Button>
                
                </CarCreateFormElements.Form>
            
            </CarCreateFormElements.Wrapper>
        </>
    );
}

export default CarCreateForm;