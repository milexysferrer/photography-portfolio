import { BannerWrapper } from "./Banner.style";

const Banner = () => {
    const idPlayer = "v0rmj1uWulI"
  return (
    <>
      <BannerWrapper>
      <iframe
          src={`https://www.youtube.com/embed/${idPlayer}?rel=0?version=3&autoplay=1&controls=0&showinfo=0&disablekb=1&loop=1&muted=1&playlist=${idPlayer}&color=white&iv_load_policy=3&vq=hd1080`}
          title="YouTube video player"
          allow="autoplay"
          allowFullScreen
        />
      </BannerWrapper>
    </>
  );
};

export default Banner;
