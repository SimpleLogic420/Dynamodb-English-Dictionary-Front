// import axios from "axios";
const axios = require("axios");

export async function getWord() {
  try {
    const word = "pupe";
    const response = await axios.get(`http://localhost:3010/${word}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
getWord();
