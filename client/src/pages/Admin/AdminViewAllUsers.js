import React, { useState } from 'react';
import Dashboard from '../../components/shared/Dashboard';
import ViewAllUsers from '../../components/admin components/ViewAllUsers';
import useFetch from '../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const AdminViewAllUsers = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const [search, setSearch] = useState(null);

  // const [url, setUrl] = useState(
  //   `/api/v1/users?sort=-createdAt&active=true&limit=${limit}&page=${page}
  //   `
  // );
  const [urlSearch, setUrlSearch] = useState(null);

  // const { data, isPending, isError, manualFetch } = useFetch(url);
  // const { data, isPending, isError, manualFetch } = useFetch(
  //   `/api/v1/users?sort=-createdAt&limit=${limit}&page=${page}${
  //     from ? `&createdAt[gte]=${from}` : ''
  //   }${to ? `&createdAt[lte]=${to}` : ''}`.trim()
  // );
  const { data, isPending, isError, manualFetch } = useFetch(
    `/api/v1/users?sort=-createdAt&limit=${limit}&page=${page}${
      from ? `&createdAt[gte]=${from}` : ''
    }${to ? `&createdAt[lte]=${to}` : ''}`.trim()
  );

  // const {
  //   data: searchData,
  //   isPending: searchPending,
  //   isError: searchError,
  //   manualFetch: searchFetch,
  // } = useFetch(search && `/api/v1/users/filter?${search}`.trim());

  // console.log({ data });

  return (
    <>
      {isPending && (
        <Dashboard
          rightContainerContent={
            <ClipLoader color="#d81b60" size={60} cssOverride={override} />
          }
        />
      )}
      {isError && (
        <Dashboard rightContainerContent={<h1>Something went wrong!!</h1>} />
      )}
      {data && (
        <Dashboard
          rightContainerContent={
            <>
              <ViewAllUsers
                users={data.data.users}
                setPage={setPage}
                page={page}
                setFrom={setFrom}
                setTo={setTo}
                setUrlSearch={setUrlSearch}
                manualFetch={manualFetch}
                setSearch={setSearch}
                limit={limit}
              />
            </>
          }
        />
      )}
    </>
  );
};

export default AdminViewAllUsers;
