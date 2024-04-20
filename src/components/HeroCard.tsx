import styled from 'styled-components';

const HeroCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: ${(props) => `1px solid ${props.theme.colors.grey}`};
  padding: 10px;
  border-radius: 15px;
  margin: 0 10px 0 10px;
`;

const HeroAvatar = styled.img`
  width: '100%';
`;

const HeroName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts};
  margin: 10px;
  color: ${(props) => props.theme.colors.white};
`;

const HeroCard = () => {
  return (
    <HeroCardContainer>
      <HeroAvatar src="http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg" alt="hero" />
      <HeroName>Iron Man</HeroName>
      {/* <h1>{hero.name}</h1>
      <p>{hero.ability}</p> */}
    </HeroCardContainer>
  );
};

export default HeroCard;
