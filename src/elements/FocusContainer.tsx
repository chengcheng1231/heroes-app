import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const BoxWrap = styled.div`
  border-radius: 18px;
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 4px;
`;

const BorderLayer = styled.div`
  background-image: conic-gradient(
    from 45deg,
    ${(props) => props.theme.colors.yellow} 0deg 90deg,
    ${(props) => props.theme.colors.red} 90deg 180deg,
    ${(props) => props.theme.colors.blue} 180deg 270deg,
    ${(props) => props.theme.colors.green} 270deg 360deg
  );
  position: absolute;
  left: 50%;
  top: 50%;
  width: 370px;
  height: 370px;
  margin-left: -185px;
  margin-top: -185px;
  animation: 6s infinite linear ${rotate};
`;

const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  display: flex;
`;

// Surround the children with a border and a rotating gradient
const FocusContainer = () => {
  return (
    <BoxWrap>
      <BorderLayer />
      <BoxContent />
    </BoxWrap>
  );
};

export default FocusContainer;
