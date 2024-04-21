import styled from 'styled-components';

const LoadingOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const LoadingSpinner = styled.div`
  border: 4px solid ${(props) => props.theme.colors.grey};
  border-top: 4px solid ${(props) => props.theme.colors.red};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingOverlay = () => {
  return (
    <LoadingOverlayContainer>
      <LoadingSpinner />
    </LoadingOverlayContainer>
  );
};

export default LoadingOverlay;
