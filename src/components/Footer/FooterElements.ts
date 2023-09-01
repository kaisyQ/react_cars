import styled from 'styled-components';

const Wrapper = styled.div`
    
    padding: 2rem 1rem;

    min-height: 150px;

    display: flex;

    align-items: center;

    gap: 3rem;

    justify-content: space-around;

    background-color: black;
    
    color: white;
    

    @media only screen and (max-width: 768px){

        flex-direction: column;
    }
`;


const LogoWrapper = styled.div`
    max-width: 160px;
`;


const Logo = styled.img`
    display: block;
    width: 100%;
`;

const CopyRight = styled.p`
    text-align: center;
    padding: 3rem;
    background-color: #fff;
    color: #000;
`;

export default {
    Wrapper, LogoWrapper, Logo, CopyRight
}