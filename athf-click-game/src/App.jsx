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

  resetGame() {
    this.setState({ score: 0, clickedArr: [] })
    // this.randomize(this.characters)
  }

  handleClick = (event) => {
    console.log(event.target.src)
    if (this.state.clickedArr.indexOf(event.target.src) !== -1) {
      this.setState({ message: "You've already clicked that!" })
      this.resetGame();
    }
    else if (this.state.topScore === this.state.score) {
      this.state.clickedArr.push(event.target.src)
      this.setState({ message: "Correct guess!", score: + 1, topScore: + 1 })
    }
    else {
      this.state.clickedArr.push(event.target.src)
      this.setState({ message: "Correct guess!", score: + 1 })
    }

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
              value={character.id}
              onClick={this.handleClick}
            />
          ))}
        </div>

      </div>
    )
  }
}

export default App;