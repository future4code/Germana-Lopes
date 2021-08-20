import { useState, useEffect } from "react";
import axios from "axios";

export const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas'

export const useRequestData = (url, inicialState) => {
  const [data, setData] = useState(inicialState);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data;
}
