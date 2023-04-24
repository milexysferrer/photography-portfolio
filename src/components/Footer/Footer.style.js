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
    color: #ffffff;
    padding-block: 1rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
`;

export const FooterWrapper = styled.div`
  margin-inline: auto;
  margin-block: 2rem;
  display: flex;
  @media only screen and (max-width: 1024px) {
    margin-block: 1rem;
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  img {
    border-radius: 10px;
    margin-right: 2rem;
  }
  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 1rem;
  padding-left: 2rem;
  div {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
    margin-left: 1rem;
    font-size: 1.5rem;
    color: #000000;
  }
  @media only screen and (max-width: 700px) {
    a {
      font-size: 1rem;
    }
    svg {
      width: 40px;
    }
    div {
      height: 60px;
    }
  }
`;
