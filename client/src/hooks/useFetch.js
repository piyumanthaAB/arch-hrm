import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [isError, setIserror] = useState(false);

  // const CancelToken = axios.CancelToken();
  // const source = CancelToken.source();

  useEffect(() => {
    const fetchData = async () => {
      setIspending(true);
      try {
        const res = await axios({
          method: 'GET',
          url,
        });

        if (res.status === 200 || res.status === 201) {
          setIserror(false);
          setData(res.data);
        } else {
          setIserror(true);
        }
        setIspending(false);
        // console.log(res);
      } catch (error) {
        // console.log(error);
        // console.log(error.response?.data);
        // console.log({ 'error.message': error?.message });
        if (error.message === 'cancel request') {
          // console.log('fetch aborted');
        } else {
          setIserror(true);
          setIspending(false);
          setData(null);
        }
      }
    };

    fetchData();

    return () => {
      // source.cancel('cancel request');
    };
  }, [url]);

  return { data, isPending, isError };
};

export default useFetch;
