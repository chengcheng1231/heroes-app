import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeroAbility from '../components/HeroAbility';
import HeroList from '../components/HeroList';
import LoadingOverlay from '../elements/LoadingOverlay';
import { getPathAfterPrefix } from '../shared/utils';
import { heroAbilityType } from '../types/heros';

type dispatchType = (action: { type: string; payload?: any }) => void;

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
  loading,
  herosDataList,
  heroAbility,
  fetchHerosList,
  fetchHeroProfile,
  editHeroProfile,
}: {
  loading: boolean;
  herosDataList: {
    id: string;
    name: string;
    image: string;
  }[];
  heroAbility: heroAbilityType;
  fetchHerosList: () => void;
  fetchHeroProfile: (heroId: string) => void;
  editHeroProfile: (heroId: string, heroProfile: heroAbilityType) => void;
}) {
  // get heroId from location /heros/:heroId
  // Start
  const location = useLocation();
  const prefix = '/heros';
  const heroId = getPathAfterPrefix(location.pathname, prefix);
  // End

  // fetch heros list when component is mounted
  useEffect(() => {
    fetchHerosList();
  }, []);

  // fetch hero profile when heroId is available
  useEffect(() => {
    if (heroId) {
      fetchHeroProfile(heroId);
    }
  }, [heroId]);

  return (
    <HeroContainer>
      {loading ? <LoadingOverlay /> : null}
      <MemoizedHerosList herosDataList={herosDataList} />
      {heroId ? <HeroAbility heroId={heroId} abilityValues={heroAbility} editHeroProfile={editHeroProfile} /> : null}
    </HeroContainer>
  );
}

const mapStateToProps = (state: any) => ({
  herosDataList: state.heros.herosDataList,
  heroAbility: state.heros.heroAbility,
  loading: state.heros.loading,
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
    editHeroProfile: (heroId: string, heroProfile: heroAbilityType) => {
      dispatch({
        type: 'EDIT/HERO_PROFILE',
        payload: { heroId, heroProfile },
      });
    },
  };
};

const HerosConnected = connect(mapStateToProps, mapDispatchToProps)(Heros);

export default HerosConnected;
