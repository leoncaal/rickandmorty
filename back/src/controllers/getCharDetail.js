const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios(URL + id);
    const characterDetail = {
      id: response.data.id,
      name: response.data.name,
      species: response.data.species,
      image: response.data.image,
      gender: response.data.gender,
      origin: response.data.origin,
      status: response.data.status,
    };
    return res.status(200).json(characterDetail);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = getCharDetail;
