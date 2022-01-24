import axios from "axios";
import "dotenv/config";

export const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
  },
});
