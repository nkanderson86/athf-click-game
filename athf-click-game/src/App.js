import React, { Component } from "react";
import Nav from "./components/NAV"
import Card from "./components/Card"
import Title from "./components/Title"
import athf from "./ATHF.json"


class App extends Component {

  state = {
    athf
  }

  render() {
    return (
      <div>
        <Nav />
        <Title />
        <div className="row">
          {this.state.athf.map(character => (
            <Card
              id={character.id}
              image={character.image}
            />
          ))}
        </div>

        <h5>Hello I'm Working</h5>
      </div>
    )
  }
}

export default App;