import React from 'react';
import Dashboard from '../../components/shared/Dashboard';

const AdminUsers = () => {
  // display a table of all the users
  return (
    <Dashboard
      rightContainerContent={<h1>This is administrator Users page</h1>}
    />
  );
};

export default AdminUsers;
