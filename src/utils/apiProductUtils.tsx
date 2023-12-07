import axios from "axios";
import { PUBLIC_API_HOST, PUBLIC_API_HOST_PRODUCT } from "../config-global";

const apiproduct = axios.create({
  baseURL: PUBLIC_API_HOST_PRODUCT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiproduct;
