import styled from 'styled-components';

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Banner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 42%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.9) 100%);
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.9) 100%);
    z-index: 1;
  }
`;

const BannerCover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
`;

const BackgroundImage = styled.img`
  width: 100%;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 35vh auto 0 auto;

  @media (max-width: ${(props) => props.theme.devicesWidth.laptop}) {
    margin: 20vh auto 0 auto;
  }
`;

export { BackgroundImage, Banner, BannerCover, HeroContainer, PageContainer };
