import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    withCredentials: true,
});


export const getCars = () => instance.get('cars/index');

export const getCarById = (id: string) => instance.get(`cars/${id}`);



export const checkMe = () => instance.get('auth/check');

export const signIn = (email: string, password: string) => instance.post('auth/login', { email, password });

export const logout = () => instance.delete('auth/logout');

export const getBrandsNames = () => instance.get('brands/index/names');