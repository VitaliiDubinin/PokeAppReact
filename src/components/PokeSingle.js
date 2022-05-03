import React, { Component } from "react";

class PokeSingle extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data, isLoading: false }));
  }

  render() {
    // let params = useParams();
    // console.log(params);

    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h3>{this.state.data.name}</h3>single Pokemon will be here
        {/* <img src={this.state.data.sprites?.versions["generation-v"]["black-white"].front_default} /> */}
        <img src={this.state.data.sprites?.other.dream_world.front_default} alt={this.state.data.name} />
        {/* <h3>{this.props.params.pokesingle}</h3>single Pokemon will be here
        <img src={this.state.data.sprites.other.dream_world.front_default} alt={this.state.data.name} /> */}
      </div>
    );
  }
}
export default PokeSingle;
