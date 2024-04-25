import styled from 'styled-components';

const HeroCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  border-radius: 15px;
  box-shadow: ${(props) => `0px 2px 2px 0px ${props.theme.colors.grey}`};
  cursor: pointer;
  overflow: hidden;
  transition: border 0.5s;
  z-index: 1;
  transition: transform 0.5s;
`;

const HeroAvatarContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 200px;
  position: relative;
  background-color: ${(props) => props.theme.colors.black};

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 30px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.9) 100%);
    z-index: 1;
  }
`;

const HeroAvatar = styled.img`
  z-index: 1;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  height: 50px;
  z-index: 2;
`;

const HeroName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts};
  margin: 10px;
  color: ${(props) => props.theme.colors.white};
  z-index: 2;
`;

const HeroCardOuterContainer = styled.div<{ selected: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  border-radius: 15px;
  z-index: 2;
  margin: 12px;

  transition: transform 0.5s;
  transform: ${(props) => props.selected && 'scale(1.1)'};
`;

export { HeroAvatar, HeroAvatarContainer, HeroCardContainer, HeroInfo, HeroName, HeroCardOuterContainer };
