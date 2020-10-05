import React from 'react';

import './App.css';
import Profile from './profile/profile';
import developpeur from './images/developpeur.jpg';



function App() {
  const handleName=name=>alert('Bienvenu '+name);
  return (
    <div className="App">
     <Profile firstName="Ahmed" lastName="Ben Mohamed" profession="developpeur Web" 
     handleName={handleName}>
      {developpeur}
      </Profile>

     
    
     
    </div>
  );
}

export default App;
