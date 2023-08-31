import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 4rem 0 4rem 5rem;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
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