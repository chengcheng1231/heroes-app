import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FocusContainer from '../elements/FocusContainer';
import {
  HeroAvatar,
  HeroAvatarContainer,
  HeroCardContainer,
  HeroInfo,
  HeroName,
  HeroCardOuterContainer,
} from './HeroCardStyles';

const HeroCardOuter = ({
  children,
  selected,
  hero,
  prefix,
}: {
  children: React.ReactNode;
  selected: boolean;
  hero: { id: string; name: string; image: string };
  prefix: string;
}) => {
  const navigate = useNavigate();
  const handleClick = (heroId: string) => {
    navigate(`${prefix}/${heroId}`);
  };
  return (
    <HeroCardOuterContainer selected={selected} onClick={() => handleClick(hero.id)}>
      {selected && <FocusContainer />}
      {children}
    </HeroCardOuterContainer>
  );
};

const HeroCard = ({
  hero,
}: {
  hero: {
    id: string;
    name: string;
    image: string;
  };
}) => {
  return (
    <HeroCardContainer>
      <HeroAvatarContainer>
        <HeroAvatar src={hero.image} alt="hero" width={200} height={200} loading="lazy" />
      </HeroAvatarContainer>
      <HeroInfo>
        <HeroName>{hero.name}</HeroName>
      </HeroInfo>
    </HeroCardContainer>
  );
};

export { HeroCard, HeroCardOuter };
