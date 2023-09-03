import React from "react";

import Input from "../Ui/Input/Input";

import Radio from "../Ui/Radio/Radio";

import Button from "../Ui/Button/Button";

import DropdownList from "../Ui/DropDownList/DropDownList";

import CarCreateFormElements from "./CarCreateFormElements";

import { LEFT_WHEEL, RIGHT_WHEEL } from "../../constants/constants";

import type { WheelType } from "../../types/types";

import AddBrand from "../AddBrand/AddBrand";

interface ICarCreateFormProps {
    brandNames: Array<string>,
    createCar: (name: string, brandName: string, wheelPosition: WheelType) => void
}

const CarCreateForm: React.FC<ICarCreateFormProps> = ({ brandNames, createCar }) => {

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

    const onCreateCarClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        
        if (name && brandName) {
            createCar(name, brandName, letfWheel ? LEFT_WHEEL : RIGHT_WHEEL)
        }
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
                    
                    <Button onClick={onCreateCarClick}>Create</Button>
                
                </CarCreateFormElements.Form>
            
            </CarCreateFormElements.Wrapper>
        </>
    );
}

export default CarCreateForm;