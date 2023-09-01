import styled from "styled-components";


const Wrapper = styled.div`
    width: 100%;
    margin: 2rem 1rem;

`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    @media only screen and (max-width: 300px) {
        flex-direction: column;
    }
`;

export default {
    Wrapper, Nav
}