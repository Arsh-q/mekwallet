// import { useState, useEffect } from "react";
// import axios from "axios";

// const useSwallet = (s_url, s_authToken) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.post(s_url, {
//           headers: { Authorization: s_authToken },
//         });
//         setData(response.data);
//       } catch (e) {
//         setError(e);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//     console.log(data);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return data;
// };

// export default useSwallet;



import { useState, useEffect } from "react";
import axios from "axios";

const useSwallet = (url, authToken) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('sdsd',authToken);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.post(url, {
          headers: { Authorization: `Bearer ${authToken}`},
        });
        console.log(response.data);
        setData(response.data);
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

export default useSwallet;

