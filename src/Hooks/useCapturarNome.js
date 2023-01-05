import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

export default function useCapturarNome() {
  const [nomeUsuarios, setNomeUsuarios] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}users`)
      .then((response) => {
        setNomeUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return nomeUsuarios;
}
