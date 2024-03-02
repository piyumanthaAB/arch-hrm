import React from 'react';
import * as a from './ViewAllUsersElements';
import { FiEdit2, FiEye, FiXCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ViewAllUsers = ({ users }) => {
  const navigate = useNavigate();

  const handleAction = (action) => {
    switch (action) {
      case 'view':
        navigate('/admin/users/view-user/user_id');
        break;
      case 'update':
        navigate('/admin/users/update-user/user_id');
        break;
      case 'delete':
        // navigate('/admin/users/update-user/user_id');
        break;

      default:
        break;
    }
  };

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
                <a.TableDataCell minwidth="5rem">{idx + 1}</a.TableDataCell>
                <a.TableDataCell>
                  {usr.firstName} {usr.lastName}
                </a.TableDataCell>
                <a.TableDataCell>{usr.email}</a.TableDataCell>
                <a.TableDataCell>{usr.mobile}</a.TableDataCell>
                <a.TableDataCell>{usr.country}</a.TableDataCell>
                <a.TableDataCell>{usr.img}</a.TableDataCell>
                <a.TableDataCell className="flex">
                  <a.ActionBtn
                    onClick={() => {
                      handleAction('view');
                    }}
                  >
                    <FiEye />
                  </a.ActionBtn>{' '}
                  <a.ActionBtn
                    onClick={() => {
                      handleAction('update');
                    }}
                  >
                    <FiEdit2 />
                  </a.ActionBtn>{' '}
                  <a.ActionBtn
                    onClick={() => {
                      handleAction('delete');
                    }}
                  >
                    <FiXCircle />
                  </a.ActionBtn>
                </a.TableDataCell>
              </a.TableRow>
            );
          })}
        </a.Table>
      </a.TableContainer>
    </a.Container>
  );
};

export default ViewAllUsers;
