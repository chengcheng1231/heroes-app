import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Heros from './pages/Heros';
import theme from './static/theme';

const Theme = ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const BackGroundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${(props) => `${props.theme.colors.black}`};
`;

function App() {
  const herosDataList = [
    {
      id: '1',
      name: 'Daredevil',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
    },
    {
      id: '2',
      name: 'Thor',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
    },
    {
      id: '3',
      name: 'Iron Man',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
    },
    {
      id: '4',
      name: 'Hulk',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
    },
  ];
  return (
    <Theme>
      <BackGroundContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/heros" />} /> {/* Redirect to /heros when the app starts */}
            <Route path="/heros/*" element={<Heros herosDataList={herosDataList} />} />
          </Routes>
        </BrowserRouter>
      </BackGroundContainer>
    </Theme>
  );
}

export default App;
