import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/globals';

import { AuthProvider } from './hooks/auth';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyle />
    </Router>
  );
};

export default App;
