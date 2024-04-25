import { useEffect, useState } from 'react';
import Button from '../elements/Button';
import { heroAbilityType } from '../types/heroes';
import {
  AbilityValue,
  AbilityValueButtonSection,
  AbilityValueContainer,
  AbilityValueControlledSection,
  AbilityValueSection,
  AbilityValueTitle,
  AlertText,
  HeroAbilityContainer,
  RemainingText,
} from './HeroAbilityStyles';

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
