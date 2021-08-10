import axios from "axios";

// Url for request
const instance = axios.create({
  baseURL: "https://pshs3.herokuapp.com/",
});

export default instance;
