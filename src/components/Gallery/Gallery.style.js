import styled from "styled-components";

export const GalleryWrapper = styled.div`
    background-color: #D1E1EC;
    width: 100%;
    height: auto;
    padding-inline: 10rem;
    padding-block: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        }
    @media only screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        padding-inline: 2rem;
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