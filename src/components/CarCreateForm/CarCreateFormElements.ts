import styled from "styled-components";

const Wrapper = styled.div`
    margin: 10rem 0;
    max-width: 500px;
    width: 100%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;

`;

export default {
    Wrapper, Form, RadioWrapper
};