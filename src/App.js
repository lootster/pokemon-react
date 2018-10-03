import React, { Component } from "react";
import Card from "./Card";
import {getPokemons} from "./pokemonData";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: getPokemons(),
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="textInput">
          <input type="text" placeholder="Search your pokedex!" value={this.state.value} onChange={this.handleChange} />
        </div>
        
        <div className="list">
        {
          this.state.pokemon.map(element => {
            return <Card pokemon={element} /> 
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
