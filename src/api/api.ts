import axios from "axios";

import type { WheelType } from "../types/types";

import { ROLE_ADMIN, ROLE_MANAGER } from "../constants/constants";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    withCredentials: true,
});


export const getCars = () => instance.get('cars/index');

export const getCarById = (id: string) => instance.get(`cars/${id}`);

export const createCar = (name: string, brandName: string, wheelPosition: WheelType) => instance.post('cars/create', {
    name, wheelPosition, brandName
});

export const updateCar = (id: string, name: string, brandName: string, wheelPosition: WheelType) => instance.put(`cars/update/${id}`, {
    name, brandName, wheelPosition
});

export const deleteCar = (id: string) => instance.delete(`cars/delete/${id}`);



export const checkMe = () => instance.get('auth/check');

export const signIn = (email: string, password: string) => instance.post('auth/login', { email, password });

export const logout = () => instance.delete('auth/logout');



export const getBrandsNames = () => instance.get('brands/index/names');

export const createBrand = (name: string) => instance.post('brands/create', { name });


export const createAdmin = (email: string, password: string) => 
    axios.post('http://localhost:8000/admin/users/create', {
        email, password, roles: [ROLE_ADMIN]
});

export const createManager = (email: string, password: string) => 
    axios.post('http://localhost:8000/admin/users/create', {
        email, password, roles: [ROLE_MANAGER]
});