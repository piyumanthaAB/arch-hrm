import React from 'react';
import Dashboard from '../../components/shared/Dashboard';
import AddUserForm from '../../components/admin components/AddUserForm';

const AdminAddUser = () => {
  return <Dashboard rightContainerContent={<AddUserForm />} />;
};

export default AdminAddUser;
