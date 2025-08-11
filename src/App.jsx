import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AuthProvider from './context/auth-context';
import Home from './Home';
import H1 from './H1';
import Div from './Div';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
        <div>
          <H1 />
        </div>
        <Div />
        <Home />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;