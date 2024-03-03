import React, { useState } from 'react';
import * as a from './ViewAllUsersElements';
import {
  FiEdit2,
  FiEye,
  FiXCircle,
  FiChevronRight,
  FiChevronLeft,
} from 'react-icons/fi';

import { RiFileExcel2Line } from 'react-icons/ri';
import { FaFileCsv, FaRegFilePdf } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import exportFromJSON from 'export-from-json';
import jsPDF from 'jspdf';

const ViewAllUsers = ({
  users,
  setPage,
  page,
  setFrom,
  setTo,
  setUrlSearch,
}) => {
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

  const [searchInput, setSearchInput] = useState('');

  const handleExcelExport = (data) => {
    console.log('Excel');
    const fileName = 'users';
    const exportType = exportFromJSON.types.xls;
    exportFromJSON({ data, fileName, exportType });
  };

  const handleCSVExport = (data) => {
    console.log('CSV');
    const fileName = 'users';
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };

  const handlePDFExport = (data) => {
    console.log('hello');
    // Create a new jsPDF instance with landscape orientation
    const doc = new jsPDF({
      orientation: 'landscape',
    });

    // Set initial y-position
    let yPos = 10;

    // Set max width for text
    const maxWidth = doc.internal.pageSize.width - 20; // Adjust for margins

    // Loop through the JSON data array
    data.forEach((jsonData) => {
      // Convert JSON object to string
      const jsonString = JSON.stringify(jsonData);

      // Split text into multiple lines if it exceeds maxWidth
      const splitText = doc.splitTextToSize(jsonString, maxWidth);

      // Calculate height of text
      const textHeight = doc.getTextDimensions(splitText).h;

      // Check if there's enough space to add the JSON data
      if (textHeight < doc.internal.pageSize.height - yPos) {
        // Add the JSON data to the current page
        doc.text(splitText, 10, yPos);
        yPos += textHeight + 10; // Add padding
      } else {
        // Add a new page and reset y-position
        doc.addPage();
        yPos = 10;
        doc.text(splitText, 10, yPos);
        yPos += textHeight + 10; // Add padding
      }
    });

    // Save the PDF document
    doc.save('json_data.pdf');
  };
  return (
    <a.Container>
      <a.PopupContainer>
        <a.DataExportBtn onClick={() => handleExcelExport(users)}>
          <RiFileExcel2Line />
        </a.DataExportBtn>
        <a.DataExportBtn onClick={() => handlePDFExport(users)}>
          <FaRegFilePdf />
        </a.DataExportBtn>

        <a.DataExportBtn onClick={() => handleCSVExport(users)}>
          <FaFileCsv />
        </a.DataExportBtn>
      </a.PopupContainer>
      <a.Header>
        View All Users | <button>Export current Data</button>
      </a.Header>
      <a.TableContainer>
        <a.FilterRow>
          <a.FilterLeft>
            <a.SearchBar
              placeholder="Enter name or UID"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <a.SearchBtn
              onClick={() => {
                if (searchInput === '') {
                  return toast.error('Please enter name or UID!');
                }
                setUrlSearch(`/api/v1/users/filter?criteria=${searchInput}`);
              }}
            >
              Search
            </a.SearchBtn>
            <a.SearchBtn
              onClick={() => {
                setSearchInput('');
                setUrlSearch(null);
              }}
            >
              Clear
            </a.SearchBtn>
          </a.FilterLeft>
          <a.FilterRight>
            <a.DatePickerContainer>
              <a.Label>From Date</a.Label>
              <a.DateInput
                type="date"
                onChange={(e) => setFrom(e.target.value)}
              />
            </a.DatePickerContainer>
            <a.DatePickerContainer>
              <a.Label>Upto Date</a.Label>
              <a.DateInput
                type="date"
                onChange={(e) => setTo(e.target.value)}
              />
            </a.DatePickerContainer>
            <a.CloseBtn
              onClick={() => {
                setFrom(null);
                setTo(null);
              }}
            >
              <FiXCircle />
            </a.CloseBtn>
          </a.FilterRight>
        </a.FilterRow>
        {users[0] === null && <h1>No records found</h1>}
        {users[0] != null && (
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

            {users.length > 0 &&
              users.map((usr, idx) => {
                return (
                  <a.TableRow key={idx}>
                    <a.TableDataCell>{idx + 1}</a.TableDataCell>
                    <a.TableDataCell>{usr?.uid || '-'}</a.TableDataCell>
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
        )}
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
