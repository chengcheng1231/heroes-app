import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FocusContainer from '../elements/FocusContainer';
import { HeroAvatar, HeroAvatarContainer, HeroCardContainer, HeroInfo, HeroName } from './HeroCardStyles';

const MemorizedHeroAvatarContainer = memo(({ heroImage, onHover }: { heroImage: string; onHover: boolean }) => (
  <HeroAvatarContainer>
    <HeroAvatar src={heroImage} alt="hero" $hover={onHover} width={200} height={200} loading="lazy" />
  </HeroAvatarContainer>
));

MemorizedHeroAvatarContainer.displayName = 'HeroAvatarContainer';

const HeroCard = ({
  hero,
  selected,
  prefix,
}: {
  hero: {
    id: string;
    name: string;
    image: string;
  };
  selected: boolean;
  prefix: string;
}) => {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();
  const handleClick = (heroId: string) => {
    navigate(`${prefix}/${heroId}`);
  };

  return (
    <FocusContainer selected={selected}>
      <HeroCardContainer
        onClick={() => handleClick(hero.id)}
        selected={selected}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <MemorizedHeroAvatarContainer heroImage={hero.image} onHover={onHover} />
        <HeroInfo>
          <HeroName>{hero.name}</HeroName>
        </HeroInfo>
      </HeroCardContainer>
    </FocusContainer>
  );
};

export default HeroCard;
