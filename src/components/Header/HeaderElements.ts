import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 2rem 1rem;

    min-height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(235, 186, 52);
`;

const LogoWrapper = styled.div`
    max-width: 200px;
`;


const Logo = styled.img`
    display: block;
    width: 100%;
    border-radius: 5px;
    box-shadow: -2px 4px 21px 6px rgba(0,0,0,0.15);

`;

export default {
    Wrapper, LogoWrapper, Logo
}