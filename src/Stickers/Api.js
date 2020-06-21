import axios from "axios";
export default axios.create({
  baseURL: "https://5eee34f899b2440016bc03f7.mockapi.io/stickers/sticker",
  headers: {
    "Content-Type": "application/json",
  },
});
