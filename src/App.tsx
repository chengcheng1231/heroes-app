import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { BackGroundContainer, Header, HeaderImageContainer } from './AppStyles';
import Heroes from './pages/Heroes';
import store from './redux/store';
import heroesImage from './static/images/heroes.webp';
import theme from './static/theme';
const Theme = ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <Header>
          <HeaderImageContainer>
            <img src={heroesImage} alt="logo" width="100px" />
          </HeaderImageContainer>
        </Header>
        <BackGroundContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/heroes" />} /> {/* Redirect to /heroes when the app starts */}
              <Route path="/heroes/*" element={<Heroes />} />
            </Routes>
          </BrowserRouter>
        </BackGroundContainer>
      </Theme>
    </Provider>
  );
}

export default App;
