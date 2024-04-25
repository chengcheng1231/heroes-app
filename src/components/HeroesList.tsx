import { useLocation } from 'react-router-dom';
import { HeroCard, HeroCardOuter } from './HeroCard';
import { HeroesListContainer } from './HeroesListStyles';

const HeroesList = ({
  heroesDataList,
  prefix,
}: {
  heroesDataList: {
    id: string;
    name: string;
    image: string;
  }[];
  prefix: string;
}) => {
  const location = useLocation();
  const heroId = location.pathname.split('/').pop();
  return (
    <HeroesListContainer>
      {heroesDataList.map((hero) => (
        <HeroCardOuter key={hero.id} selected={hero.id === heroId} hero={hero} prefix={prefix}>
          <HeroCard hero={hero} />
        </HeroCardOuter>
      ))}
    </HeroesListContainer>
  );
};

export default HeroesList;
