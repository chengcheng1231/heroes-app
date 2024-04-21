import { memo } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeroAbility from '../components/HeroAbility';
import HeroList from '../components/HeroList';

type dispatchType = (action: { type: string }) => void;

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
  fetchData,
}: {
  herosDataList: {
    id: string;
    name: string;
    image: string;
  }[];
  fetchData: () => void;
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
      <button
        onClick={() => {
          fetchData();
        }}
      >
        redux test
      </button>
    </HeroContainer>
  );
}

const mapStateToProps = (state: any) => ({
  herosDataList: [
    {
      id: '1',
      name: 'Daredevil',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
    },
    {
      id: '2',
      name: 'Thor',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
    },
    {
      id: '3',
      name: 'Iron Man',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
    },
    {
      id: '4',
      name: 'Hulk',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
    },
  ],
});

const mapDispatchToProps = (dispatch: dispatchType) => {
  return {
    fetchData: () => {
      dispatch({
        type: 'FETCH_DATA_REQUEST',
      });
    },
  };
};

const HerosConnected = connect(mapStateToProps, mapDispatchToProps)(Heros);

export default HerosConnected;
