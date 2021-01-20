import React from 'react';
import HomePage from './pages/HomePage';
import GlobalStyles from './components/GlobalStyles';

const App = (): JSX.Element => {

  return (
    <div>
      <GlobalStyles/>
      <HomePage/>
    </div>
  )
}

export default App;
