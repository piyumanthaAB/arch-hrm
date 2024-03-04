import React from 'react';
import Dashboard from '../components/shared/Dashboard';
import useFetch from '../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';
import ViewSingleUser from '../components/admin components/ViewSingleUser';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const UserProfile = () => {
  const { data, isPending, isError, manualFetch } = useFetch(
    '/api/v1/auth/current-user'
  );
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
            <ViewSingleUser
              user={data.data.user}
              update={true}
              manualFetch={manualFetch}
            />
          }
        />
      )}
    </>
  );
};

export default UserProfile;
