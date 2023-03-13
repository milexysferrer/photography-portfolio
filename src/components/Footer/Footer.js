import { ImageWrapper, Wrapper, ContactWrapper, FooterWrapper } from "./Footer.style";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from "next/image";
import test from "../../../public/images/foto.jpg";

const Footer = () => {

  return (
    <Wrapper>
        <h1>CONTACTO</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <FooterWrapper>
            <ImageWrapper>
                <Image src={test} height={300}/>
            </ImageWrapper>
            <ContactWrapper>
                <div>
                    <WhatsAppIcon sx={{color: "#1E394D", fontSize: 80}}/>
                    <a href="#">+56 9 7545 1656</a>
                </div>
                <div>
                    <InstagramIcon sx={{color: "#1E394D", fontSize: 80}}/>
                    <a href="#">@pajaro.errante.audioviasual</a>
                </div>
                <div>
                    <YouTubeIcon sx={{color: "#1E394D", fontSize: 80}}/>
                    <a href="#">Pixion Films Chile</a>
                </div>
            </ContactWrapper>
        </FooterWrapper>
    </Wrapper>
  );
};

export default Footer;