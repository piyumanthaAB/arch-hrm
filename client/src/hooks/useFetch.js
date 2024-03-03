import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(false);
  const [trigger, setTrigger] = useState(false); // New trigger state

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await axios({
          method: 'GET',
          url,
        });

        if (res.status === 200 || res.status === 201) {
          setIsError(false);
          setData(res.data);
        } else {
          setIsError(true);
        }
        setIsPending(false);
      } catch (error) {
        setIsError(true);
        setIsPending(false);
        setData(null);
      }
    };

    // Fetch data when URL changes or trigger is set
    if (url || trigger) {
      fetchData();
      setTrigger(false); // Reset trigger after fetching data
    }
  }, [url, trigger]); // Include trigger in dependency array

  // Function to manually trigger fetch
  const manualFetch = () => {
    setTrigger(true);
  };

  return { data, isPending, isError, manualFetch };
};

export default useFetch;
