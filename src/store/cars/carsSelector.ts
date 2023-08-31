import type { RootState } from "../store";


export const getCarsItems = (state: RootState) => state.cars.items;

export const getCurrentCar = (state: RootState) => state.cars.current;
