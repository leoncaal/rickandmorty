const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios(URL + id);
    const character = {
      id: response.data.id,
      name: response.data.name,
      species: response.data.species,
      image: response.data.image,
      gender: response.data.gender,
    };
    return res.status(200).json(character);
  } catch (error) {
    return res.status(500).send("El personaje no existe");
  }
};

module.exports = getCharById;
