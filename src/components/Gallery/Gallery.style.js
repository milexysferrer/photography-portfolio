import styled from "styled-components";

export const GalleryWrapper = styled.div`
    padding-inline: 10rem;
    padding-block: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        }
    @media only screen and (max-width: 700px) {
        padding-inline: 1rem;
        padding-block: 4rem;
    }
`;

export const ImageCard = styled.div`
    width: 100%;
    display: grid;
    img{
        width: 100%;
        height: 100%;
        margin: auto;
    }
`;

export const GalleryTitle = styled.h1`
    text-align: center;
    font-size: 36px;
    text-align: center;
    background-color: #728288;
    color: #ffffff;
    padding-block: 1rem;
    letter-spacing: 2px;
    width: 80%;
    margin: auto;
    @media only screen and (max-width: 700px) {
        width: 90%;
    }
    `;

export const Wrapper = styled.div`
   background-color: #D1E1EC;
    width: 100%;
    height: auto;
    padding-top: 4rem;
`;