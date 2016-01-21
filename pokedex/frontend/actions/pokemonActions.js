var AppDispatcher = require('../dispatcher/dispatcher');

var PokemonActions = {
  receiveAllPokemons: function (pokemons) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  }
};

module.exports = PokemonActions;