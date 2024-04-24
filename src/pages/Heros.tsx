import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeroAbility from '../components/HeroAbility';
import HeroList from '../components/HeroList';
import LoadingOverlay from '../elements/LoadingOverlay';
import { getPathAfterPrefix } from '../shared/utils';
import herosBackground from '../static/images/herosBackground.webp';
import { heroAbilityType } from '../types/heros';

type dispatchType = (action: { type: string; payload?: { heroId?: string; heroProfile?: heroAbilityType } }) => void;

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

const PageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Banner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 42%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.9) 100%);
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.9) 100%);
    z-index: 1;
  }
`;

const BannerCover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
`;

const BackgroundImage = styled.img`
  width: 100%;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 35vh auto 0 auto;

  @media (max-width: ${(props) => props.theme.devicesWidth.laptop}) {
    margin: 20vh auto 0 auto;
  }
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
  }, [fetchHerosList]);

  // fetch hero profile when heroId is available
  useEffect(() => {
    if (heroId) {
      fetchHeroProfile(heroId);
    }
  }, [heroId, fetchHeroProfile]);

  return (
    <PageContainer>
      <Banner>
        <BannerCover />
        <BackgroundImage src={herosBackground} alt="herosBackground" />
      </Banner>
      <HeroContainer>
        {loading ? <LoadingOverlay /> : null}
        <MemoizedHerosList herosDataList={herosDataList} />
        {heroId ? <HeroAbility heroId={heroId} abilityValues={heroAbility} editHeroProfile={editHeroProfile} /> : null}
      </HeroContainer>
    </PageContainer>
  );
}

const mapStateToProps = (state: {
  heros: {
    herosDataList: {
      id: string;
      name: string;
      image: string;
    }[];
    heroAbility: heroAbilityType;
    loading: boolean;
  };
}) => ({
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
