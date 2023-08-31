import styled from 'styled-components';

const Wrapper = styled.div`
    
    padding: 2rem;

    width: calc((100% / 4) - 20px);
    
    margin: 10px;

    box-shadow: -2px 4px 21px 6px rgba(0,0,0,0.15);
    
    background-color: rgba(235, 186, 52);


    border-radius: 5px;


    @media only screen and (max-width: 768px) {
        width: calc((100% / 3) - 20px);
    }

    @media only screen and (max-width: 568px) {
        width: calc((100% / 2) - 20px);
    }

    @media only screen and (max-width: 448px) {
        width: 100%;
    }

`;

const InfoWrapper = styled.div`
    
    display: flex;
    
    align-items: center;
    
`;

const CarInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-grow: 1;
    flex-shrink: 1;
`;

const Model = styled.h4`

`;

const Brand = styled.h5`

`;

const Rudder = styled.h5`

`;

const Arrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    width: 4rem;
    height: 4rem;

`;



export default {
    Wrapper, CarInfo, Model, Brand, Rudder, Arrow, InfoWrapper
}