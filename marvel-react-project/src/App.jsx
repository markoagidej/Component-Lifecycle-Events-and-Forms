import './App.css'
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import { useState } from 'react';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedID: null
    };
  }

  handleCharacterSelection = (characterID) => {
    this.setState({selectedID: characterID})
  }

  render() {
    const { selectedID } = this.state

    return (
      <div className={"row"}>
        <div className={"column"}>
          <CharacterList onCharacterSelect={this.handleCharacterSelection}/>
        </div>
        <div className={"column"}>
          {selectedID &&
            <CharacterDetail characterId={selectedID}/>
          }
        </div>
      </div>
    )
  }  
}

export default App
