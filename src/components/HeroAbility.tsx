import styled from 'styled-components';
import Button from '../elements/Button';

const HeroAbilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: ${(props) => `1px solid ${props.theme.colors.grey}`};
  border-radius: 15px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.devicesWidth.mobile}) {
    flex-direction: column;
  }
`;

const AbilityValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  @media (max-width: ${(props) => props.theme.devicesWidth.mobile}) {
    align-items: stretch;
  }
`;

const AbilityValueSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AbilityValueTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts};
  margin-right: 50px;
  color: ${(props) => props.theme.colors.white};
`;

const AbilityValueButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  justify-content: space-between;
`;

const AbilityValue = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts};
  margin: 10px;
  color: ${(props) => props.theme.colors.white};
`;

const AbilityValueControlledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;

  @media (max-width: ${(props) => props.theme.devicesWidth.mobile}) {
    align-items: flex-end;
  }
`;

const HeroAbility = ({
  abilityValues,
}: {
  abilityValues: {
    str: number;
    int: number;
    agi: number;
    luk: number;
  };
}) => {
  return (
    <HeroAbilityContainer>
      <AbilityValueContainer>
        {Object.entries(abilityValues).map(([key, value]) => (
          <AbilityValueSection key={key}>
            <AbilityValueTitle>{key.toUpperCase()}</AbilityValueTitle>
            <AbilityValueButtonSection>
              <Button text="+" onClick={() => console.log('click')} width="30px" height="30px" />
              <AbilityValue>{value}</AbilityValue>
              <Button text="-" onClick={() => console.log('click')} width="30px" height="30px" />
            </AbilityValueButtonSection>
          </AbilityValueSection>
        ))}
      </AbilityValueContainer>
      <AbilityValueControlledSection>
        <AbilityValue>剩餘點數: 0</AbilityValue>
        <Button text="儲存" onClick={() => console.log('儲存')} width="120px" height="30px" />
      </AbilityValueControlledSection>
    </HeroAbilityContainer>
  );
};

export default HeroAbility;
