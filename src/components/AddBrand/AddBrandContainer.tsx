import React from "react";

import AddBrand from "./AddBrand";

import { useAppDispatch } from "../../hooks/hooks";

import { fetchToCreateBrand } from "../../store/brands/brandsSlice";

const AddBrandContainer = () => {

    const dispatch = useAppDispatch();

    return (
        <>
            <AddBrand createBrand={(brandName: string) => {dispatch(fetchToCreateBrand(brandName))}} />
        </>
    );
}

export default AddBrandContainer;