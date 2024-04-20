import styled from 'styled-components';
import HeroCard from './HeroCard';

const HeroListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  flex-wrap: wrap;
`;

const HeroList = ({
  herosDataList,
}: {
  herosDataList: {
    id: string;
    name: string;
    image: string;
  }[];
}) => {
  // const heroes = useHeroes();
  console.log('HeroList111');
  return (
    <HeroListContainer>
      {/* <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard /> */}
      {herosDataList.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </HeroListContainer>
  );
};

export default HeroList;
