import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import HeroAbility from '../components/HeroAbility';
import HeroesList from '../components/HeroesList';
import ErrorContainer from '../elements/ErrorContainer';
import LoadingOverlay from '../elements/LoadingOverlay';
import { getPathAfterPrefix } from '../shared/utils';
import heroesBackground from '../static/images/heroesBackground.webp';
import { heroAbilityType } from '../types/heroes';
import { BackgroundImage, Banner, BannerCover, HeroContainer, PageContainer } from './HeroesStyles';
type dispatchType = (action: { type: string; payload?: { heroId?: string; heroProfile?: heroAbilityType } }) => void;

function Heros({
  loading,
  heroesDataList,
  heroAbility,
  fetchHerosList,
  fetchHeroProfile,
  editHeroProfile,
  clearError,
  error,
}: {
  loading: boolean;
  heroesDataList: {
    id: string;
    name: string;
    image: string;
  }[];
  clearError: () => void;
  error: string | null;
  heroAbility: heroAbilityType;
  fetchHerosList: () => void;
  fetchHeroProfile: (heroId: string) => void;
  editHeroProfile: (heroId: string, heroProfile: heroAbilityType) => void;
}) {
  // get heroId from location /heroes/:heroId
  // Start
  const location = useLocation();
  const prefix = '/heroes';
  const heroId = getPathAfterPrefix(location.pathname, prefix);
  // End

  // change document title based on heroId
  useEffect(() => {
    if (heroId) {
      document.title = 'Hero Profile Page';
    } else {
      document.title = 'Hero List Page';
    }
  }, [heroId]);

  // fetch heroes list when component is mounted
  useEffect(() => {
    fetchHerosList();
  }, [fetchHerosList]);

  // fetch hero profile when heroId is available
  useEffect(() => {
    if (heroId) {
      fetchHeroProfile(heroId);
    }
  }, [heroId, fetchHeroProfile]);

  // fade out error component after 3 seconds
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        clearError();
      }, 5000);
    }
  }, [error, clearError]);

  return (
    <PageContainer>
      <Banner>
        <BannerCover />
        <BackgroundImage src={heroesBackground} alt="heroesBackground" />
      </Banner>
      {error ? <ErrorContainer message={error} /> : null}
      <HeroContainer>
        {loading ? <LoadingOverlay /> : null}
        <HeroesList heroesDataList={heroesDataList} />
        {heroId ? <HeroAbility heroId={heroId} abilityValues={heroAbility} editHeroProfile={editHeroProfile} /> : null}
      </HeroContainer>
    </PageContainer>
  );
}

const mapStateToProps = (state: {
  heroes: {
    heroesDataList: {
      id: string;
      name: string;
      image: string;
    }[];
    heroAbility: heroAbilityType;
    loading: boolean;
    error: string | null;
  };
}) => ({
  heroesDataList: state.heroes.heroesDataList,
  heroAbility: state.heroes.heroAbility,
  loading: state.heroes.loading,
  error: state.heroes.error,
});

const mapDispatchToProps = (dispatch: dispatchType) => {
  return {
    fetchHerosList: () => {
      dispatch({
        type: 'FETCH/HEROES_LIST',
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
    clearError: () => {
      dispatch({
        type: 'CLEAR/HEROES/ERROR',
      });
    },
  };
};

const HerosConnected = connect(mapStateToProps, mapDispatchToProps)(Heros);

export default HerosConnected;
