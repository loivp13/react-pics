import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e8081b846a40338f4a23c907bee1bd8b01c26ff993dd5522789fb9b9db83808f"
  }
});
