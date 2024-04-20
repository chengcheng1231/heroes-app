import { useLocation, useNavigate } from 'react-router-dom';

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
  // console.log('heroId', heroId);

  // if (heroId) {
  //   console.log('heroId', heroId);
  // } else {
  //   console.log('No heroId');
  // }
  return (
    <div>
      <button onClick={onClick}>Go to hero 3</button>
    </div>
  );
}

export default Heros;
