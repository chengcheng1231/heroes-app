import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeroCard from './HeroCard';

const HeroListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  flex-wrap: wrap;
  width: 100%;
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
  const location = useLocation();
  const heroId = location.pathname.split('/').pop();
  return (
    <HeroListContainer>
      {herosDataList.map((hero) => (
        <HeroCard key={hero.id} hero={hero} selected={hero.id === heroId} />
      ))}
    </HeroListContainer>
  );
};

export default HeroList;
