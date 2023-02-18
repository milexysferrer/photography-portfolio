import styled from "styled-components";

export const BannerWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-width: 100%;
        height: 100%;
        border: none;
        pointer-events: none;
        @media only screen and (max-width: 1024px) {
            height: 70%;
        }
        @media only screen and (max-width: 700px) {
            height: 40%;
        }
        @media only screen and (max-width: 400px) {
            height: 30%;
        }
    }
`