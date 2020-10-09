import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, authToken) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, {
          headers: { Authorization: authToken },
        });
        setData(response.data.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};

export default useFetch;
