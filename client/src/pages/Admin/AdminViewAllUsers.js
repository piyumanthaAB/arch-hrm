import React from 'react';
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
  const { data, isPending, isError } = useFetch('/api/v1/users');

  console.log({ data });

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
          rightContainerContent={<ViewAllUsers users={data.data.users} />}
        />
      )}
    </>
  );
};

export default AdminViewAllUsers;
