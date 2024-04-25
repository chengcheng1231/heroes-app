import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  width: 100%;
  height: 50px;
  padding: 10px 0px;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0) 100%);
`;

const HeaderImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackGroundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  width: 70vw;
  max-width: 1400px;
  margin: 0 auto;

  background-color: ${(props) => `${props.theme.colors.black}`};

  @media (max-width: ${(props) => props.theme.devicesWidth.tablet}) {
    width: 80vw;
  }

  @media (max-width: ${(props) => props.theme.devicesWidth.mobile}) {
    width: 100vw;
  }
`;

export { BackGroundContainer, Header, HeaderImageContainer };
