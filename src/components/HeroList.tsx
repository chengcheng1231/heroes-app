import styled from 'styled-components';
import HeroCard from './HeroCard';

const HeroListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  overflow: scroll;
  flex-wrap: wrap;
`;

const HeroList = () => {
  // const heroes = useHeroes();
  console.log('HeroList');
  return (
    <HeroListContainer>
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      {/* {heroes.map((hero) => (
        <li key={hero.id}>{hero.name}</li>
      ))} */}
    </HeroListContainer>
  );
};

export default HeroList;
