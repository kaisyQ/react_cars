import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 2rem 1rem;

    min-height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;

    background-color: black;
    color: white;
    
    @media only screen and (max-width: 400px){
        flex-direction: column;
    }
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
    margin: 0 1rem;
`;
const Email = styled.span`
    font-size: 1.6rem;
`;

export default {
    Wrapper, LogoWrapper, Logo, UserWrapper, Email
}