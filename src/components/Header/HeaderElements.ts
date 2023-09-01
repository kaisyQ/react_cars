import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 2rem 1rem;

    min-height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: black;
    color: white;
    
`;

const LogoWrapper = styled.div`
    max-width: 120px;
`;


const Logo = styled.img`
    display: block;
    width: 100%;
`;

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;
const Email = styled.span`
    font-size: 1.6rem;
`;

export default {
    Wrapper, LogoWrapper, Logo, UserWrapper, Email
}