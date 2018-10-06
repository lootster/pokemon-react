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
    this.setState({value: event.target.value.toLowerCase()});
  }
  
  render() {

    const filteredData = this.state.pokemon.filter(element => element.name.toLowerCase().includes(this.state.value))

    const display = filteredData.length > 0 && 
      filteredData.map(element => {
        return <Card pokemon={element}/>
      })

    const notDisplay = filteredData.length === 0 && 
     <p>No pokemon available</p>
    

    console.log(filteredData)

    return (
      <div className="wrapper">
        <div className="textInput">
          <input type="text" placeholder="Search your pokedex!" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </div>
        
        <div className="list">
        {display}
        {notDisplay}
        </div>
      </div>
    );
  }
}

export default App;
