const url = `https://pokeapi.co/api/v2`;

function validateRes() {
  return (res) => {
    if (res.ok) {
      return res.json();
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
