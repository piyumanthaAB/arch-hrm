import React from 'react';
import * as a from './ViewAllUsersElements';

const ViewAllUsers = ({ users }) => {
  return (
    <a.Container>
      <a.Header>View All Users</a.Header>
      <a.TableContainer>
        <a.Table>
          <a.TableHeader>
            <a.TableDataCell th={true}>#</a.TableDataCell>
            <a.TableDataCell th={true}>Name</a.TableDataCell>
            <a.TableDataCell th={true}>Email</a.TableDataCell>
            <a.TableDataCell th={true}>Mobile</a.TableDataCell>
            <a.TableDataCell th={true}>Country</a.TableDataCell>
            <a.TableDataCell th={true}>Photo</a.TableDataCell>
            <a.TableDataCell th={true}>Actions</a.TableDataCell>
          </a.TableHeader>
          {users.map((usr, idx) => {
            return (
              <a.TableRow key={idx}>
                <a.TableDataCell>{idx + 1}</a.TableDataCell>
                <a.TableDataCell>
                  {usr.firstName} {usr.lastName}
                </a.TableDataCell>
                <a.TableDataCell>{usr.email}</a.TableDataCell>
                <a.TableDataCell>{usr.mobile}</a.TableDataCell>
                <a.TableDataCell>{usr.country}</a.TableDataCell>
                <a.TableDataCell>{usr.img}</a.TableDataCell>
              </a.TableRow>
            );
          })}
        </a.Table>
      </a.TableContainer>
    </a.Container>
  );
};

export default ViewAllUsers;
