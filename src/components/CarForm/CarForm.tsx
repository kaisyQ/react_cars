import React, { FormEvent } from "react";

import CarFormElements from "./CarFormElements";

import FormItem from "./FormItem/FormItem";

import Radio from "../Ui/Radio/Radio";

import axios from "axios";

import { addCar, updateCar } from "../../store/cars/carsSlice";

import { useAppDispatch } from "../../hooks/hooks";

import { useAppSelector } from "../../hooks/hooks";

import { getCurrentCar } from "../../store/cars/carsSelector";

const CarForm = () => {

    const current = useAppSelector(state => getCurrentCar(state));

    const [model, setModel] = React.useState(current ? current.name : '');
    
    const [brand, setBrand] = React.useState(current ? current.brand.name : '');
    
    const [checkedLeftWheel, setCheckedLeftWheel] = React.useState(current ? current.brand.wheelPosition === 'Левый руль' ? true  : false : false);

    const dispatch = useAppDispatch();

    const modelChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setModel(ev.target.value);
    }

    const brandChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(ev.target.value);
    }

    const submit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        if (!current) {
            const response = await axios.post('http://localhost:8000/models/create', {
                name: model,
                rudderPosition: checkedLeftWheel ? 'Левый руль' : 'Правый руль',
                brand
            })
            if (response.data.model && response.data.brand && response.data.rudderPosition) {
                dispatch(addCar(response.data));
            }
        } else {

            const response = await axios.put(`http://localhost:8000/models/update/${current.id}`, {
                name: model,
                rudderPosition: checkedLeftWheel ? 'Левый руль' : 'Правый руль',
                brand
            })
            dispatch(updateCar(response.data));
        }
    }


    return (
        <>
            <CarFormElements.Wrapper>

                <CarFormElements.Form onSubmit={submit}>

                    <FormItem title={'Model'} value={model} inputChangeEv={modelChange} />

                    <FormItem title={'Brand'} value={brand} inputChangeEv={brandChange} />

                    <Radio text={'Левый руль'} checked={checkedLeftWheel} onChange={ev => {
                        if (!checkedLeftWheel) { 
                            setCheckedLeftWheel(prev => !prev)
                        }
                    }} />

                    <Radio text={'Правый руль'} checked={!checkedLeftWheel} onChange={ev => {
                        if (checkedLeftWheel) { 
                            setCheckedLeftWheel(prev => !prev)
                        }
                    }} />
                    
                    <CarFormElements.SubmitBtn>
                        Create
                    </CarFormElements.SubmitBtn>

                </CarFormElements.Form>

            </CarFormElements.Wrapper>
        </>
    );
}

export default CarForm;