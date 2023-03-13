import {
  DescriptionItem,
  DescriptionParagraph,
  DescriptionWrapper,
  ImageWrapper,
  Wrapper,
} from "./Description.style";
import Image from "next/image";
import test from "../../../public/images/foto.jpg";

export const Description = () => {
  return (
    <Wrapper>
        <h1>Sobre nosotros</h1>
        <DescriptionParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,</DescriptionParagraph>
      <DescriptionWrapper>
        <DescriptionItem>
          <ImageWrapper>
            <Image height={300} priority={true} alt="test" src={test} />
          </ImageWrapper>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </DescriptionItem>
        <DescriptionItem>
          <ImageWrapper>
            <Image height={300} priority={true} alt="test" src={test} />
          </ImageWrapper>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </DescriptionItem>
        <DescriptionItem>
          <ImageWrapper>
            <Image height={300} priority={true} alt="test" src={test} />
          </ImageWrapper>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </DescriptionItem>
      </DescriptionWrapper>
    </Wrapper>
  );
};
export default Description;
