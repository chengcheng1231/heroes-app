import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
    return <HeroList herosDataList={herosDataList} />;
  }
);

const herosDataList = [
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
];

function Heros() {
  // const { heroId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/heros/3');
  };

  // console.log('heroId', heroId);
  // console.log('searchParams', searchParams);
  // console.log('location', location);

  // get heroId from location /heros/:heroId
  const heroId = location.pathname.split('/').pop();
  console.log('heroId', heroId);

  // if (heroId) {
  //   console.log('heroId', heroId);
  // } else {
  //   console.log('No heroId');
  // }
  return (
    <>
      {/* <HeroList herosDataList={herosDataList} /> */}
      <MemoizedHerosList herosDataList={herosDataList} />
      <h1>Hero {heroId}</h1>
    </>
  );
}

export default Heros;
