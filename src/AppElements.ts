import styled from 'styled-components';


const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: rgba(240, 86, 86);
    font-size: 2rem;
`;

const ContentWrapper = styled.main`
    flex-grow: 1;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;


export default {
    Wrapper, ContentWrapper
}
