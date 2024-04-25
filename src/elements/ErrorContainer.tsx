import styled from 'styled-components';

const ErrorComponent = styled.div`
  position: fixed;
  top: 80px;
  height: auto;
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 700;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  padding: 10px;
  z-index: 3;
  text-align: center;

  // show animation from top to bottom
  animation: fadeIn 0.5s ease-in-out;
  @keyframes fadeIn {
    0% {
      top: -100px;
    }
    100% {
      top: 80px;
    }
  }

  > p {
    margin: 0px;
  }
`;

const ErrorContainer = ({ message }: { message: string }) => {
  return (
    <ErrorComponent>
      <p>{message}</p>
    </ErrorComponent>
  );
};

export default ErrorContainer;
