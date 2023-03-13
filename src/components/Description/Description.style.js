import styled from "styled-components";

export const Wrapper = styled.div`
    width: 80%;
    min-height: 60vh;
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

export const DescriptionParagraph = styled.p`
    margin-block: 1.5rem;
    padding-inline: 3rem;
    text-align: center;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
`;

export const DescriptionItem = styled.div`
    padding: 2.5rem;
    h2{
        margin-block-end: 0.5rem;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-block-end: 2rem;
    img{
        border-radius: 20px;
    }
`;