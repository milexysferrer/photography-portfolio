import { GalleryWrapper, ImageCard } from "./Gallery.style";
import Image from "next/image";
import test from "../../../public/images/foto.jpg";

export const Gallery = () => {
    return (
        <GalleryWrapper>
            <ImageCard>
                <Image  priority={true} alt="test" src={test}/>
            </ImageCard>
            <ImageCard>
                <Image  priority={true} alt="test" src={test}/>
            </ImageCard>
            <ImageCard>
                <Image  priority={true} alt="test" src={test}/>
            </ImageCard>
            <ImageCard>
                <Image  priority={true} alt="test" src={test}/>
            </ImageCard>
            <ImageCard>
                <Image  priority={true} alt="test" src={test}/>
            </ImageCard>
            <ImageCard>
                <Image  priority={true} alt="test" src={test}/>
            </ImageCard>
            <ImageCard>
                <Image  priority={true} alt="test" src={test}/>
            </ImageCard>
            <ImageCard>
                <Image  priority={true} alt="test" src={test}/>
            </ImageCard>
            <ImageCard>
                <Image  priority={true} alt="test" src={test}/>
            </ImageCard>
        </GalleryWrapper>
    )
}

export default Gallery;
