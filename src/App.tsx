import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchGames } from './actions/gameActions';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch])

  return (
    <div>
       Hello world
    </div>
  )
}

export default App;
