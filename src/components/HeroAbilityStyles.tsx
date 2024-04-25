import styled from 'styled-components';

const HeroAbilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px;
  max-width: 1000px;
  width: 100%;
  z-index: 2;
  margin: 30px 0px 0px 0px;

  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);

  @media (max-width: ${(props) => props.theme.devicesWidth.mobile}) {
    flex-direction: column;
    width: 90%;
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

export {
  AbilityValue,
  AbilityValueButtonSection,
  AbilityValueContainer,
  AbilityValueControlledSection,
  AbilityValueSection,
  AbilityValueTitle,
  AlertText,
  HeroAbilityContainer,
  RemainingText,
};
