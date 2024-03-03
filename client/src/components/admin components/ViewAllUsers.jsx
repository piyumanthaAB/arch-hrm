import React from 'react';
import * as a from './ViewAllUsersElements';
import {
  FiEdit2,
  FiEye,
  FiXCircle,
  FiChevronRight,
  FiChevronLeft,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const ViewAllUsers = ({ users, setPage, page }) => {
  const navigate = useNavigate();

  const deleteUser = async (e, id) => {
    try {
      const res = await axios({
        method: 'DELETE',
        url: `/api/v1/users/${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res;
    } catch (err) {
      console.log(err.response.data);
      throw err;
    }
  };

  const handleDelete = async (e, id) => {
    toast(
      (t, id) => (
        <span>
          Are you sure you want to delete this user?
          <button
            onClick={(e, id) => {
              toast.promise(
                deleteUser(e, id),
                {
                  loading: 'Deleting User...',
                  success: (data) => {
                    // console.log({ data });
                    return ` ${data.data.message} ` || 'success';
                  },
                  error: (err) => {
                    if (!err.response.data.message) {
                      return 'Something went wrong. Please Try again.';
                    }
                    return `${err?.response?.data?.message?.toString()}`;
                  },
                },
                {
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    fontSize: '1.6rem',
                  },
                }
              );
            }}
          >
            Yes
          </button>
          <button onClick={() => toast.dismiss(t.id)}>No</button>
        </span>
      ),
      {
        icon: <FiEdit2 />,
      }
    );
  };

  const handleAction = (e, action, id) => {
    switch (action) {
      case 'view':
        navigate(`/admin/users/view-user/${id}`);
        break;
      case 'update':
        navigate(`/admin/users/update-user/${id}`);
        break;
      case 'delete':
        handleDelete(e, id);
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
            <a.TableDataCell th={true}>UID</a.TableDataCell>
            <a.TableDataCell th={true}>First Name</a.TableDataCell>
            <a.TableDataCell th={true}>Last Name</a.TableDataCell>
            <a.TableDataCell th={true}>Email</a.TableDataCell>
            <a.TableDataCell th={true}>Created Date Time</a.TableDataCell>
            <a.TableDataCell th={true}>Photo</a.TableDataCell>
            <a.TableDataCell th={true}>Actions</a.TableDataCell>
          </a.TableHeader>
          {users.map((usr, idx) => {
            return (
              <a.TableRow key={idx}>
                <a.TableDataCell>{idx + 1}</a.TableDataCell>
                <a.TableDataCell>{usr.uid || '-'}</a.TableDataCell>
                <a.TableDataCell>{usr.firstName}</a.TableDataCell>
                <a.TableDataCell>{usr.lastName}</a.TableDataCell>
                <a.TableDataCell>{usr.email}</a.TableDataCell>
                <a.TableDataCell>{usr.createdAt}</a.TableDataCell>
                <a.TableDataCell>
                  <a.PhotoThumbnail imageUrl={usr.profilePicture} />
                </a.TableDataCell>
                <a.TableDataCell className="flex">
                  <a.ActionBtn
                    onClick={(e) => {
                      handleAction(e, 'view', usr.id);
                    }}
                  >
                    <FiEye />
                  </a.ActionBtn>{' '}
                  <a.ActionBtn
                    onClick={(e) => {
                      handleAction(e, 'update', usr.id);
                    }}
                  >
                    <FiEdit2 />
                  </a.ActionBtn>{' '}
                  <a.ActionBtn
                    onClick={(e) => {
                      handleAction(e, 'delete', usr.id);
                    }}
                  >
                    <FiXCircle />
                  </a.ActionBtn>
                </a.TableDataCell>
              </a.TableRow>
            );
          })}
        </a.Table>
        <a.TableFooter>
          <a.PaginationContainer>
            <a.PaginationBtn
              onClick={() => {
                page > 1 ? setPage(page - 1) : setPage(page);
              }}
            >
              <FiChevronLeft />
            </a.PaginationBtn>
            <a.PaginationBtn
              onClick={() => {
                setPage(++page);
              }}
            >
              <FiChevronRight />
            </a.PaginationBtn>
          </a.PaginationContainer>
        </a.TableFooter>
      </a.TableContainer>
    </a.Container>
  );
};

export default ViewAllUsers;
