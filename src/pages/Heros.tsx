import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeroAbility from '../components/HeroAbility';
import HeroList from '../components/HeroList';

const MemoizedHerosList = memo(
  ({
    herosDataList,
  }: {
    herosDataList: {
      id: string;
      name: string;
      image: string;
    }[];
  }) => {
    console.log('MemoizedHerosList');
    return <HeroList herosDataList={herosDataList} />;
  }
);

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  width: 80vw;
  max-width: 1200px;
`;

function Heros({
  herosDataList,
}: {
  herosDataList: {
    id: string;
    name: string;
    image: string;
  }[];
}) {
  const location = useLocation();

  // get heroId from location /heros/:heroId
  const heroId = location.pathname.split('/').pop();
  console.log('heroId', heroId);

  // if (heroId) {
  //   console.log('heroId', heroId);
  // } else {
  //   console.log('No heroId');
  // }
  const abilityValues = {
    str: 2,
    int: 7,
    agi: 9,
    luk: 7,
  };
  return (
    <HeroContainer>
      <MemoizedHerosList herosDataList={herosDataList} />
      <HeroAbility abilityValues={abilityValues} />
    </HeroContainer>
  );
}

export default Heros;
