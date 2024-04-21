import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeroAbility from '../components/HeroAbility';
import HeroList from '../components/HeroList';
import { getPathAfterPrefix } from '../shared/utils';

type dispatchType = (action: { type: string; payload?: any }) => void;

// React.memo(Component, [areEqual(prevProps, nextProps)]);

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
    return <HeroList herosDataList={herosDataList} />;
  },
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps.herosDataList) === JSON.stringify(nextProps.herosDataList);
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
  heroAbility,
  fetchHerosList,
  fetchHeroProfile,
}: {
  herosDataList: {
    id: string;
    name: string;
    image: string;
  }[];
  heroAbility: {
    str: number;
    int: number;
    agi: number;
    luk: number;
  };
  fetchHerosList: () => void;
  fetchHeroProfile: (heroId: string) => void;
}) {
  const location = useLocation();
  const prefix = '/heros';
  // get heroId from location /heros/:heroId
  const heroId = getPathAfterPrefix(location.pathname, prefix);
  console.log('heroId', heroId);

  useEffect(() => {
    fetchHerosList();
  }, []);

  useEffect(() => {
    if (heroId) {
      fetchHeroProfile(heroId);
    }
  }, [heroId]);

  return (
    <HeroContainer>
      <MemoizedHerosList herosDataList={herosDataList} />
      {heroId ? <HeroAbility abilityValues={heroAbility} /> : null}
    </HeroContainer>
  );
}

const mapStateToProps = (state: any) => ({
  herosDataList: state.heros.herosDataList,
  heroAbility: state.heros.heroAbility,
});

const mapDispatchToProps = (dispatch: dispatchType) => {
  return {
    fetchHerosList: () => {
      dispatch({
        type: 'FETCH/HEROS_LIST',
      });
    },
    fetchHeroProfile: (heroId: string) => {
      dispatch({
        type: 'FETCH/HERO_PROFILE',
        payload: { heroId },
      });
    },
  };
};

const HerosConnected = connect(mapStateToProps, mapDispatchToProps)(Heros);

export default HerosConnected;
