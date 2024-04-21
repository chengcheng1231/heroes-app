import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import { heroAbilityType } from '../types/heros';

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

const RemainingText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts};
  color: ${(props) => props.theme.colors.white};
  margin: 8px 0px;
`;

const AlertText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts};
  color: ${(props) => props.theme.colors.red};
  margin: 0px 0px 10px 0px;
`;

const HeroAbility = ({
  heroId,
  abilityValues,
  editHeroProfile,
}: {
  heroId: string;
  abilityValues: heroAbilityType;
  editHeroProfile: (heroId: string, heroProfile: heroAbilityType) => void;
}) => {
  const [abilityValuesState, setAbilityValuesState] = useState({
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  });
  const [remainingPoints, setRemainingPoints] = useState(0);
  const [alert, setAlert] = useState('');

  // handle ability value change
  const handleAbilityValueChange = (key: string, value: number) => {
    // make sure remaining points is not negative
    const changingRemainingPoints =
      remainingPoints + (abilityValuesState[key as keyof typeof abilityValuesState] - value);
    if (changingRemainingPoints < 0) {
      return;
    }

    // make sure ability value is not negative
    if (value < 0) {
      return;
    }

    setAlert('');
    setAbilityValuesState({ ...abilityValuesState, [key]: value });
    setRemainingPoints(changingRemainingPoints);
  };

  // edit hero profile
  const handleSave = () => {
    if (remainingPoints > 0) {
      setAlert('請分配完剩餘點數');
      return;
    }
    editHeroProfile(heroId, abilityValuesState);
  };

  // update abilityValuesState when abilityValues is changed by redux store
  useEffect(() => {
    setAbilityValuesState(abilityValues);
  }, [abilityValues]);

  // if heroId is changed, reset remaining points
  useEffect(() => {
    setRemainingPoints(0);
  }, [heroId]);

  return (
    <HeroAbilityContainer>
      <AbilityValueContainer>
        {Object.entries(abilityValuesState).map(([key, value]) => (
          <AbilityValueSection key={key}>
            <AbilityValueTitle>{key.toUpperCase()}</AbilityValueTitle>
            <AbilityValueButtonSection>
              <Button text="+" onClick={() => handleAbilityValueChange(key, value + 1)} width="30px" height="30px" />
              <AbilityValue>{value}</AbilityValue>
              <Button text="-" onClick={() => handleAbilityValueChange(key, value - 1)} width="30px" height="30px" />
            </AbilityValueButtonSection>
          </AbilityValueSection>
        ))}
      </AbilityValueContainer>
      <AbilityValueControlledSection>
        <RemainingText>剩餘點數: {remainingPoints}</RemainingText>
        {alert && <AlertText>{alert}</AlertText>}
        <Button text="儲存" onClick={() => handleSave()} width="120px" height="30px" />
      </AbilityValueControlledSection>
    </HeroAbilityContainer>
  );
};

export default HeroAbility;
