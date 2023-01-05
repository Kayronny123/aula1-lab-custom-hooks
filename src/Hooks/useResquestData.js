import { useState, useEffect } from "react";
import axios from "axios";
// import { BASE_URL} from "../constants/constants";

export default function useResquestData(baseUrl, path) {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}${path}`)
      .then((response) => {
        setDados(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setErro(true);
      });
  }, []);
  return [dados, isLoading, erro];
}
