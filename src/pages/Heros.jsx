import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function HeroAbility() {
  // const { heroId } = useParams();
  const location = useLocation();
  const searchParams = useSearchParams();
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/heros/3');
  };

  // console.log('heroId', heroId);
  console.log('searchParams', searchParams);
  console.log('location', location);

  // get heroId from location /heros/:heroId
  const heroId = location.pathname.split('/').pop();
  console.log('heroId', heroId);

  // if (heroId) {
  //   console.log('heroId', heroId);
  // } else {
  //   console.log('No heroId');
  // }
  return (
    <div>
      <h1>HeroAbility</h1>
      <button onClick={onClick}>Go to hero 3</button>
    </div>
  );
}

export default HeroAbility;
