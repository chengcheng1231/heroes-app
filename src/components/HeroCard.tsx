import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface HeroCardContainerProps {
  selected: boolean;
}

const HeroCardContainer = styled.div<HeroCardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  border-radius: 15px;
  margin: 0 10px 0 10px;
  box-shadow: 0 2px 8px 0 ${(props) => props.theme.colors.white};
  cursor: pointer;
  overflow: hidden;
  background-color: ${(props) => (props.selected ? 'tranparent' : props.theme.colors.black)};
  // add border surround animation when selected is true
  // border: ${(props) => (props.selected ? '2px solid #f00' : 'none')};
  transition: border 0.5s;
  z-index: 1;
`;

const HeroAvatarContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 200px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
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

const HeroCard = ({
  hero,
  selected,
}: {
  hero: {
    id: string;
    name: string;
    image: string;
  };
  selected: boolean;
}) => {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();
  const handleClick = (heroId: string) => {
    navigate(`/heros/${heroId}`);
  };

  return (
    <HeroCardContainer
      onClick={() => handleClick(hero.id)}
      selected={selected}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <HeroAvatarContainer>
        <HeroAvatar src={hero.image} alt="hero" $hover={onHover} />
      </HeroAvatarContainer>
      <HeroInfo>
        <HeroName>{hero.name}</HeroName>
      </HeroInfo>
    </HeroCardContainer>
  );
};

export default HeroCard;
