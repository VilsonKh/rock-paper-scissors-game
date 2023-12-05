import React, { useState } from 'react';
import classes from './App.module.scss';
import Header from './Header/Header';
import GameContent from './GameContent/GameContent';
import RulesModal from './RulesModal/RulesModal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className={classes.app}>
      <Header/>
      <GameContent/>
      <button onClick= {() => {setIsModalOpen(true)}} className={classes.buttonRules}>RULES</button>
      {isModalOpen && <RulesModal setModal={setIsModalOpen}/>}
    </div>

  );
}

export default App;
