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
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it,</p>
        <FooterWrapper>
            <ImageWrapper>
                <Image src={test} height={300}/>
            </ImageWrapper>
            <ContactWrapper>
                <div>
                    <WhatsAppIcon sx={{color: "#1E394D", fontSize: 80}}/>
                    <a href="https://wa.me/56975451656" target="_blank">+56 9 7545 1656</a>
                </div>
                <div>
                    <InstagramIcon sx={{color: "#1E394D", fontSize: 80}}/>
                    <a href="https://instagram.com/pajaro.errante.audiovisual?igshid=YmMyMTA2M2Y=" target="_blank">@pajaro.errante.audiovisual</a>
                </div>
                <div>
                    <YouTubeIcon sx={{color: "#1E394D", fontSize: 80}}/>
                    <a href="https://www.youtube.com/@pixion.filmschile" target="_blank">Pixion Films Chile</a>
                </div>
            </ContactWrapper>
        </FooterWrapper>
    </Wrapper>
  );
};

export default Footer;