import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeroCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: ${(props) => `1px solid ${props.theme.colors.grey}`};
  padding: 10px;
  border-radius: 15px;
  margin: 0 10px 0 10px;
`;

const HeroAvatar = styled.img`
  width: '100%';
`;

const HeroName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts};
  margin: 10px;
  color: ${(props) => props.theme.colors.white};
`;

const HeroCard = ({
  hero,
}: {
  hero: {
    id: string;
    name: string;
    image: string;
  };
}) => {
  const navigate = useNavigate();
  const handleClick = (heroId: string) => {
    console.log('heroId', heroId);
    navigate(`/heros/${heroId}`);
  };
  return (
    <HeroCardContainer onClick={() => handleClick(hero.id)}>
      <HeroAvatar src={hero.image} alt="hero" />
      <HeroName>{hero.name}</HeroName>
    </HeroCardContainer>
  );
};

export default HeroCard;
