import { LEFT_WHEEL, RIGHT_WHEEL } from "../constants/constants";

export interface IRoute {
    path: string,
    element: React.ReactNode
}


export type WheelType = typeof LEFT_WHEEL | typeof RIGHT_WHEEL;

export interface IBrand {
    
    id: string | number,
    
    name: string,
    
    slug: string
    
    wheelPosition: WheelType

}


export interface ICar {
    
    id: string | number,

    name: string,

    slug: string,
    
    brand: IBrand

}