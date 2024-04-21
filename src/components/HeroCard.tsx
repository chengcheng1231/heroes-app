import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface HeroCardContainerProps {
  selected: boolean;
}

const HeroCardContainer = styled.div<HeroCardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: ${(props) => `1px solid ${props.theme.colors.grey}`};
  padding: 10px;
  border-radius: 15px;
  margin: 0 10px 0 10px;
  width: 200px;
  height: 300px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? props.theme.colors.red : 'transparent')};
`;

const HeroAvatar = styled.img`
  width: '100%';
`;

const HeroName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts};
  margin: 10px;
  color: ${(props) => props.theme.colors.white};
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
  const navigate = useNavigate();
  const handleClick = (heroId: string) => {
    navigate(`/heros/${heroId}`);
  };

  return (
    <HeroCardContainer onClick={() => handleClick(hero.id)} selected={selected}>
      <HeroAvatar src={hero.image} alt="hero" />
      <HeroName>{hero.name}</HeroName>
    </HeroCardContainer>
  );
};

export default HeroCard;
