import { GalleryTitle, GalleryWrapper, ImageCard, Wrapper } from "./Gallery.style";
import Image from "next/image";
import test from "../../../public/images/foto.jpg";

export const Gallery = () => {
  return (
    <Wrapper>
      <GalleryTitle>PROYECTOS</GalleryTitle>
      <GalleryWrapper>
        <ImageCard>
          <Image priority={true} alt="test" src={test} />
        </ImageCard>
        <ImageCard>
          <Image priority={true} alt="test" src={test} />
        </ImageCard>
        <ImageCard>
          <Image priority={true} alt="test" src={test} />
        </ImageCard>
        <ImageCard>
          <Image priority={true} alt="test" src={test} />
        </ImageCard>
        <ImageCard>
          <Image priority={true} alt="test" src={test} />
        </ImageCard>
        <ImageCard>
          <Image priority={true} alt="test" src={test} />
        </ImageCard>
        <ImageCard>
          <Image priority={true} alt="test" src={test} />
        </ImageCard>
        <ImageCard>
          <Image priority={true} alt="test" src={test} />
        </ImageCard>
        <ImageCard>
          <Image priority={true} alt="test" src={test} />
        </ImageCard>
      </GalleryWrapper>
    </Wrapper>
  );
};

export default Gallery;
