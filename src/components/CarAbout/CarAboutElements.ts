import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 3rem 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media only screen and (max-width: 300px) { 
        text-align: center;
    }
`;

const Brand = styled.h3`
    font-size: 3.5rem;

`;

const Model = styled.h2`
    font-size: 4.5rem;
`;

const RudderPostion = styled.h3`
    font-size: 2.5rem;
`;


export default {
    Wrapper, InfoWrapper, Brand, Model, RudderPostion
};