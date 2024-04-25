import { useLocation } from 'react-router-dom';
import HeroCard from './HeroCard';
import { HeroesListContainer } from './HeroesListStyles';

const HeroesList = ({
  heroesDataList,
}: {
  heroesDataList: {
    id: string;
    name: string;
    image: string;
  }[];
}) => {
  const location = useLocation();
  const heroId = location.pathname.split('/').pop();
  return (
    <HeroesListContainer>
      {heroesDataList.map((hero) => (
        <HeroCard key={hero.id} hero={hero} selected={hero.id === heroId} />
      ))}
    </HeroesListContainer>
  );
};

export default HeroesList;
