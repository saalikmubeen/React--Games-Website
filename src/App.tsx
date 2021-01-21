import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';

const App = (): JSX.Element => {

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={["/", "/games/:id"]} component={HomePage} />
    </div>
  )
}

export default App;
