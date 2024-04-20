import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Heros from './pages/Heros';

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #bf4f74;
// `;

// Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// const Banner = styled.div`
//   background-color: #282c34;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100px;
//   font-size: 24px;
// `;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/heros" />} /> {/* Redirect to /heros when the app starts */}
          <Route path="/heros/*" element={<Heros />} />
        </Routes>
      </BrowserRouter>
      {/* <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
      </Wrapper> */}
    </div>
  );
}

export default App;
