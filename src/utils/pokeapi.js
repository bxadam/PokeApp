const url = `https://pokeapi.co/api/v2`;

function validateRes() {
  return (res) => {
    if (res.ok) {
      return res.json();
    }
    if (res.status === 404) {
      return alert("Sorry, that Pokémon doesn't exist. Please try again.");
    }
  };
}

function getPokemon(nameId) {
  return fetch(`${url}/pokemon/${nameId}`)
    .then(validateRes())
    .catch((err) => {
      console.error(err);
    });
}

function getAbility(nameId) {
  return fetch(`${url}/ability/${nameId}/`)
    .then(validateRes())
    .catch((err) => {
      console.error(err);
    });
}

export { getAbility, getPokemon };
