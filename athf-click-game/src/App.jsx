import React, { Component } from "react";
import Nav from "./components/NAV"
import Card from "./components/Card"
import Title from "./components/Title"
import athf from "./ATHF.json"


class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    maxScore: 3,
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
  checkWin = () => {
    if (this.state.score === (this.state.characters.length - 1)) {
      alert("You win! Congratulations")
      this.resetGame();
    }
  }

  resetGame = () => {
    this.setState({ score: 0, clickedArr: [] })
    this.randomize(this.state.characters)
  }

  handleCorrect = (id) => {
    if (this.state.topScore === this.state.score) {
      this.state.clickedArr.push(id)
      this.setState({ message: "Correct guess!", score: this.state.score + 1, topScore: this.state.topScore + 1 })
      this.checkWin()
      this.randomize(this.state.characters)
    }
    else {
      this.state.clickedArr.push(id)
      this.setState({ message: "Correct guess!", score: this.state.score + 1 })
      this.checkWin()
      this.randomize(this.state.characters)
    }
  }

  handleWrong = () => {
    this.setState({ message: "You've already clicked that!" })
    this.resetGame();
  }

  handleClick = (event) => {
    let clickedID = event.target.src
    if (this.state.clickedArr.indexOf(clickedID) !== -1) {
      this.handleWrong()
    }
    else {
      this.handleCorrect(clickedID)
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