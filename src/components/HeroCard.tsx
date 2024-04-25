import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroAvatar, HeroAvatarContainer, HeroCardContainer, HeroInfo, HeroName } from './HeroCardStyles';

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
    navigate(`/heroes/${heroId}`);
  };

  return (
    <HeroCardContainer
      onClick={() => handleClick(hero.id)}
      selected={selected}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <HeroAvatarContainer>
        <HeroAvatar src={hero.image} alt="hero" $hover={onHover} width={200} height={200} loading="lazy" />
      </HeroAvatarContainer>
      <HeroInfo>
        <HeroName>{hero.name}</HeroName>
      </HeroInfo>
    </HeroCardContainer>
  );
};

export default HeroCard;
