import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Heros from './pages/Heros';
import store from './redux/store';
import herosImage from './static/images/header.webp';
import theme from './static/theme';

const Theme = ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0) 100%);
`;

const HeaderImage = styled.img`
  width: 100px;
  margin: 20px 0;
`;

const BackGroundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  width: 70vw;
  max-width: 1400px;
  margin: 0 auto;
  background-color: ${(props) => `${props.theme.colors.black}`};
`;

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <Header>
          <HeaderImage src={herosImage} alt="logo" width={100} />
        </Header>
        <BackGroundContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/heros" />} /> {/* Redirect to /heros when the app starts */}
              <Route path="/heros/*" element={<Heros />} />
            </Routes>
          </BrowserRouter>
        </BackGroundContainer>
      </Theme>
    </Provider>
  );
}

export default App;
