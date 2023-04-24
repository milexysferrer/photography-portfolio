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
    }  @media only screen and (max-width: 1024px) {
        width: 90%;
  }
`;

export const DescriptionParagraph = styled.p`
    margin-block: 1.5rem;
    padding-inline: 3rem;
    text-align: center;
    @media only screen and (max-width: 1024px) {
        padding-inline: 1rem;
  }
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
  }
`;

export const DescriptionItem = styled.div`
    padding: 2.5rem;
    h2{
        margin-block-end: 0.5rem;
    }
    @media only screen and (max-width: 800px) {
        padding: 1rem;
        margin-bottom: 1.5rem;
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
    @media only screen and (max-width: 800px) {
        margin-block-end: 1rem;
  }
`;