import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import MainPage from './components/Main';
import SecondPage from './components/Details';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/details" element={<SecondPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
