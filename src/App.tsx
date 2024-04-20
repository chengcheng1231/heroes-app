import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import HeroList from './components/HeroList';
import Heros from './pages/Heros';
import theme from './static/theme';

const Theme = ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const BackGroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => `${props.theme.colors.black}`};
`;

function App() {
  return (
    <Theme>
      <BackGroundContainer>
        <HeroList />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/heros" />} /> {/* Redirect to /heros when the app starts */}
            <Route path="/heros/*" element={<Heros />} />
          </Routes>
        </BrowserRouter>
      </BackGroundContainer>
    </Theme>
  );
}

export default App;
