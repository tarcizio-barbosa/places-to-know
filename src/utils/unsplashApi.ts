import axios from "axios";

export const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID PiQ9n7_CtD7i56Gd353FDhOgQLWJtsdwN_DtadFTLN4",
  },
});
