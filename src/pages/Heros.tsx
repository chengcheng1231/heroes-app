import { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeroAbility from '../components/HeroAbility';
import HeroList from '../components/HeroList';
import { getPathAfterPrefix } from '../shared/utils';

type dispatchType = (action: { type: string }) => void;

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
  fetchHerosList,
}: {
  herosDataList: {
    id: string;
    name: string;
    image: string;
  }[];
  fetchHerosList: () => void;
}) {
  const location = useLocation();
  const prefix = '/heros';
  // get heroId from location /heros/:heroId
  const heroId = getPathAfterPrefix(location.pathname, prefix);
  console.log('heroId', heroId);

  useEffect(() => {
    fetchHerosList();
  }, []);
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
      {heroId ? <HeroAbility abilityValues={abilityValues} /> : null}
    </HeroContainer>
  );
}

const mapStateToProps = (state: any) => ({
  herosDataList: state.heros.herosDataList,
});

const mapDispatchToProps = (dispatch: dispatchType) => {
  return {
    fetchHerosList: () => {
      dispatch({
        type: 'FETCH_HEROS_LIST',
      });
    },
  };
};

const HerosConnected = connect(mapStateToProps, mapDispatchToProps)(Heros);

export default HerosConnected;
