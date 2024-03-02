import React from 'react';
import Dashboard from '../../components/shared/Dashboard';
import DashboardHome from '../../components/shared/DashboardHome';

const AdminHome = () => {
  return <Dashboard rightContainerContent={<DashboardHome />} />;
};

export default AdminHome;
