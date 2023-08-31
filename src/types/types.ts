

export interface IRoute {
    path: string,
    element: React.ReactNode
}


export type WheelType = 'Левый руль' | 'Правый руль';

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