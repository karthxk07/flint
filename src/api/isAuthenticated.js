import axios from "axios";

export const isAuthenticated = async () => {
  var data;
  await axios.get("http://localhost:8000/isAuthenticated").then((res) => {
    data = res.data;
  });
  return data;
};
