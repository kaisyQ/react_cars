import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { getBrandNames } from "../../store/brands/brandsSelector";

import { fetchBrands } from "../../store/brands/brandsSlice";

import CarCreateForm from "./CarCreateForm";

const CarCreateFormContainer = () => {
    
    const dispatch = useAppDispatch();

    const brandNames = useAppSelector(state => getBrandNames(state));

    React.useEffect(() => {
        dispatch(fetchBrands());
    }, [])

    return (
        <>
            <CarCreateForm brandNames={brandNames} />
        </>
    );
}

export default CarCreateFormContainer;