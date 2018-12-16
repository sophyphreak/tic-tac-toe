import React from 'react';
import TitleBar from './TitleBar';
import Game from './Game';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <TitleBar />
        <p></p>
        <Game />
      </div>
    );
  }
};

export default App;
