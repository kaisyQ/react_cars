import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 330px;
    width: 100%;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const SubmitBtn = styled.button`
    padding: 1rem 3rem;
    background: #fff;
`;


export default {
    Wrapper, Form, SubmitBtn
};