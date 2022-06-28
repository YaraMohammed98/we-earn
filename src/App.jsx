import './App.css';
import Home from './components/Homepage/Home';
import { Routes , Route } from 'react-router-dom';
import Investion from './components/InvestingPage.jsx/Investion';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<Investion />} />
      </Routes>

  );
}

export default App;
