import styled from "styled-components";

const Wrapper = styled.div`
    padding: 2rem;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;


const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default {
    Wrapper, CreateContainer, Inputs
};