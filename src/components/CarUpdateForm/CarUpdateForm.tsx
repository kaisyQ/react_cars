import React from "react";

import Button from "../Ui/Button/Button";

import Input from "../Ui/Input/Input";

import Radio from "../Ui/Radio/Radio";

import DropdownList from "../Ui/DropDownList/DropDownList";

import { LEFT_WHEEL, RIGHT_WHEEL } from "../../constants/constants";

import CarUpdateFormElements from "./CarUpdateFormElements";

import type { ICar, WheelType } from "../../types/types";

interface ICarUpdateFormProps {
    
    id: string,

    currentCar: ICar,
    
    brandNames: Array<string>,
    
    updateCar: (id: string, name: string, brandName: string, wheelPosition: WheelType) => void
}

const CarUpdateForm: React.FC<ICarUpdateFormProps> = (props) => {

    const [name, setName] = React.useState('');
    const [brandName, setBrandName] = React.useState('');
    const [letfWheel, setLeftWheel] = React.useState(false);

    React.useEffect(() => {

        if (!props.currentCar) {
            return;
        }
        setName(props.currentCar.name);
        setBrandName(props.currentCar.brand.name);
        setLeftWheel(props.currentCar.brand.wheelPosition === LEFT_WHEEL);

    }, [props.currentCar])


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

    const onCarUpdateBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        props.updateCar(props.id, name, brandName, letfWheel ? LEFT_WHEEL : RIGHT_WHEEL);
    }

    return (
        <>
            <CarUpdateFormElements.Wrapper>

                <CarUpdateFormElements.Form>

                    <Input title="Name*" value={name} onChange={(ev) => setName(ev.target.value)}/>
    
                    {
                        props.brandNames ? <>
                            <DropdownList 
                                title="Select brand"
                                options={props.brandNames} 
                                onSelect={handleBrandNameSelect}
                                defaultOption={props.currentCar.brand.name}
                            />
                        </> : null
                    }
        
                    <CarUpdateFormElements.RadioWrapper>
                    
                        <Radio text={LEFT_WHEEL} checked={letfWheel} onChange={leftRadioChange} />
                        
                        <Radio text={RIGHT_WHEEL} checked={!letfWheel} onChange={rightRadioChange} />
                    
                    </CarUpdateFormElements.RadioWrapper>
        
                    <Button onClick={onCarUpdateBtnClick}>Update</Button>

                </CarUpdateFormElements.Form>

            </CarUpdateFormElements.Wrapper>

        
        </>
    );
}

export default CarUpdateForm