import styled from "styled-components";

export const Wrapper = styled.div`
    width: 80%;
    min-height: 50vh;
    margin-inline: auto;
    margin-block: 5rem;
    h1 {
        text-align: center;
        font-size: 36px;
        text-align: center;
        background-color: #728288;
        color: #FFFFFF;
        padding-block: 1rem;
        letter-spacing: 2px;
    }
`;

export const FooterWrapper = styled.div`
    margin-inline: auto;
    margin-block: 2rem;
     display: flex;
`

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    img{
        border-radius: 10px;
        margin-right: 2rem;
    }
`

export const ContactWrapper = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-block: 1rem;
    padding-left: 2rem;
`