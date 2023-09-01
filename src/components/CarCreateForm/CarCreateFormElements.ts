import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Form = styled.form`
    margin: 10rem 2rem;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        align-items: flex-start;
    }

`;

export default {
    Wrapper, Form, RadioWrapper
};