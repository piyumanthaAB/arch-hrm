import React, { useState } from 'react';
import Dashboard from '../../components/shared/Dashboard';
import { useParams } from 'react-router-dom';
import ViewSingleUser from '../../components/admin components/ViewSingleUser';
import useFetch from '../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const AdminViewSingleUser = ({ viewUpdate }) => {
  const { id } = useParams();

  const { data, isPending, isError } = useFetch(`/api/v1/users/${id}`);
  const [update, setUpdate] = useState(viewUpdate || false);

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
          rightContainerContent={
            <ViewSingleUser user={data.data.user} update={update} />
          }
        />
      )}
    </>
  );
};

export default AdminViewSingleUser;
