import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import App from '../App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;