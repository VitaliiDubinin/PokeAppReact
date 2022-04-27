import React, { Component } from "react";

class PokeSingle extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }

  render() {
    // let params = useParams();
    // console.log(params);

    return (
      <div>
        <h3>{this.props.params.pokesingle}</h3>single Pokemon will be here
        <img src={this.state.data.sprites.other.dream_world.front_default} alt={this.state.data.name} />
      </div>
    );
  }
}
export default PokeSingle;
