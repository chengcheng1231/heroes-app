import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Heros from './pages/Heros';
import store from './redux/store';
import theme from './static/theme';

const Theme = ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const BackGroundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${(props) => `${props.theme.colors.black}`};
`;

function App() {
  return (
    <Provider store={store}>
      <Theme>
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
