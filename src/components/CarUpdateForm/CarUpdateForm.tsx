import React from "react";

import Button from "../Ui/Button/Button";

import Input from "../Ui/Input/Input";

import Radio from "../Ui/Radio/Radio";

import DropdownList from "../Ui/DropDownList/DropDownList";

import { useParams } from "react-router-dom";

import { getCarById, updateCar } from "../../api/api";

import { setCurrentCar } from "../../store/cars/carsSlice";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

import { getCurrentCar } from "../../store/cars/carsSelector";

import { LEFT_WHEEL, RIGHT_WHEEL } from "../../constants/constants";

import { getBrandNames } from "../../store/brands/brandsSelector";

import { getBrandsNames as getBrandNamesFromServer } from "../../api/api";

import { setBrandNames } from "../../store/brands/brandsSlice";

import CarUpdateFormElements from "./CarUpdateFormElements";

const CarUpdateForm = () => {

    const currentCar = useAppSelector(state => getCurrentCar(state));

    const [name, setName] = React.useState('');
    const [brandName, setBrandName] = React.useState('');
    const [letfWheel, setLeftWheel] = React.useState(false);
    
    const { id } = useParams();

    const dispatch = useAppDispatch();

    const brandNames = useAppSelector(state => getBrandNames(state));

    React.useEffect(() => {

        if (!currentCar) {
            return;
        }
        setName(currentCar.name);
        setBrandName(currentCar.brand.name);
        setLeftWheel(currentCar.brand.wheelPosition === LEFT_WHEEL);

    }, [currentCar])

    
    React.useEffect(() => {

        const fetchCarById = async () => {
            if (!id) {
                return;
            }
            
            const response = await getCarById(id);

            dispatch(setCurrentCar(response.data));
        }

        fetchCarById();

    }, []);

    React.useEffect(() => {

        const fetchBrandNames = async () => {
            const response = await getBrandNamesFromServer();
            dispatch(setBrandNames(response.data));
        }

        fetchBrandNames();
    }, [])

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

    console.log(currentCar)
    return (
        <>
            <CarUpdateFormElements.Wrapper>

                <CarUpdateFormElements.Form>

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
        
                    <CarUpdateFormElements.RadioWrapper>
                    
                        <Radio text={LEFT_WHEEL} checked={letfWheel} onChange={leftRadioChange} />
                        
                        <Radio text={RIGHT_WHEEL} checked={!letfWheel} onChange={rightRadioChange} />
                    
                    </CarUpdateFormElements.RadioWrapper>
        
                    <Button onClick={async (ev) => {
                        ev.preventDefault();
                        
                        if (!id) {
                            return;
                        }
                        const response = await updateCar(
                            id, name, brandName, letfWheel ? LEFT_WHEEL : RIGHT_WHEEL  
                        )

                        console.log(response)

                    }}>Update</Button>

                </CarUpdateFormElements.Form>

            </CarUpdateFormElements.Wrapper>

        
        </>
    );
}

export default CarUpdateForm