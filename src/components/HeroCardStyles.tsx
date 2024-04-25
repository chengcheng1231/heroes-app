import styled from 'styled-components';

interface HeroCardContainerProps {
  selected: boolean;
}

const HeroCardContainer = styled.div<HeroCardContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  border-radius: 15px;
  box-shadow: ${(props) => (props.selected ? 'none' : `0px 2px 2px 0px ${props.theme.colors.grey}`)};
  cursor: pointer;
  overflow: hidden;

  transition: border 0.5s;
  z-index: 1;

  transition: transform 0.5s;
  transform: ${(props) => props.selected && 'scale(1.05)'};

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.black};
    z-index: 1;
    opacity: ${(props) => (props.selected ? 0 : 0.3)};
  }
`;

const HeroAvatarContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 200px;
  position: relative;

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

const HeroAvatar = styled.img<{ $hover: boolean }>`
  z-index: 1;
  transition: transform 0.5s;
  transform: ${(props) => props.$hover && 'scale(1.1)'};
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

export { HeroAvatar, HeroAvatarContainer, HeroCardContainer, HeroInfo, HeroName };
