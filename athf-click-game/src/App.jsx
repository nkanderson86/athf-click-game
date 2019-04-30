import React, { Component } from "react";
import Nav from "./components/NAV"
import Card from "./components/Card"
import Title from "./components/Title"
import athf from "./ATHF.json"


class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    maxScore: 12,
    message: "Click on any character to start!",
    characters: athf,
    clickedArr: []
  }

  randomize = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i]
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  handleClick = () => {
    alert("Nick needs to finish this game")

  }


  render() {
    return (
      <div className="App">
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Title />
        <div className="row">
          {this.state.characters.map((character, i) => (
            <Card
              key={character.id}
              image={character.image}
              onClick={this.handleClick}
            />
          ))}
        </div>

      </div>
    )
  }
}

export default App;