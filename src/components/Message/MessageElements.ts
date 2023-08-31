import styled from 'styled-components';


const Title = styled.h1`
    margin-bottom: 2rem;
`;

const BtnWrapper = styled.div`
    
    display: inline-flex;
    
    position: relative;
    
    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(66, 125, 72);
        transition: .4s ease-in-out;
    }

    :hover&:after {
        transition: .4s ease-in-out;
        left: 1.5rem;
        top: 1.5rem;
    }
`;

const BackHomeButton = styled.button`
    padding: 2rem 3rem;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    z-index: 1;

`;

export default {
    Title, BackHomeButton, BtnWrapper
};