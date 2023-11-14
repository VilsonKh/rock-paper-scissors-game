import React from 'react';
import classes from './App.module.scss';
import Header from './Header/Header';
import GameContent from './GameContent/GameContent';

function App() {
  return (
    <div className={classes.app}>
      <Header/>
      <GameContent/>
    </div>
  );
}

export default App;
