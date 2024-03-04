import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 3rem;
  position: relative;
`;
export const Header = styled.h1`
  font-size: 2.5rem;
  color: #555;
  text-align: left;
  display: flex;
`;

export const TableContainer = styled.div`
  width: 100%;
  padding: 2rem;
  /* background-color: yellow; */
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  position: relative;
  text-align: left;
  /* background-color: green; */

  ${'' /* border-top:1px solid #ccc ; */}
  ${'' /* border-bottom:1px solid #ccc ; */}
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  :hover {
    /* background-color: #eee; */
    cursor: pointer;
  }
`;
export const TableHeader = styled.tr`
  border-bottom: 1px solid #ddd;
  background-color: #eee;
  /* background-color: black; */
  position: sticky;
  /* position: absolute; */
  z-index: 2;
  padding: 2rem 0;
  top: 0;
  :hover {
    /* background-color: #eee; */
    cursor: pointer;
  }
`;

export const TableDataCell = styled.td`
  padding: 1rem 1rem;
  font-weight: ${(props) => (props.th ? '500' : '400')};
  font-size: ${(props) => (props.th ? '1.3rem' : '1.4rem')};
  ${'' /* text-align:left ; */}
  color:${(props) => (props.th ? '#999' : '#555')};
  min-width: ${(props) => props.minwidth || 'auto'};
  &.flex {
    display: flex;
    align-items: space-between;
    justify-content: center;
  }
`;

export const ActionBtn = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #d81b60;
  color: #fff;
  font-size: 1.5rem;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  border: 1px solid #fff;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #d81b60;
    border: 1px solid #d81b60;
  }
`;

export const PhotoThumbnail = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

export const TableFooter = styled.div`
  width: 100%;
  /* background-color: red; */
  min-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationContainer = styled.div`
  width: 40%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationBtn = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #d81b60;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 800;

  &:hover {
    cursor: pointer;
  }
`;

export const FilterRow = styled.div`
  width: 100%;
  min-height: 5rem;
  /* background-color: red; */
  display: flex;
`;

export const FilterLeft = styled.div`
  flex: 0 1 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: green; */
`;
export const FilterRight = styled.div`
  flex: 1;
  /* background-color: blue; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Label = styled.label`
  font-size: 1.2rem;
  color: #444;
  font-weight: 600;
`;
export const DatePickerContainer = styled.div`
  width: 40%;
  margin: 1rem 0rem;
`;

export const DateInput = styled.input`
  width: 100%;
  border-radius: 1rem;
  outline: none;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const DateFilterClear = styled.div`
  width: 4rem;
`;

export const SearchBar = styled.input`
  width: 60%;
  border: 2px solid #222;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  outline: none;
`;

export const SearchBtn = styled.div`
  padding: 1rem;
  background-color: #d81b60;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  border-radius: 0.5rem;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const LabelBtn = styled.div`
  padding: 1rem;
  background-color: #d81b60;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  border-radius: 0.5rem;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnGrp = styled.div`
  display: flex;
  margin-left: auto;
`;

export const CloseBtn = styled.div`
  padding: 1rem;
  background-color: #d81b60;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  border-radius: 0.5rem;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const PopupContainer = styled.div`
  width: 50%;
  height: 70%;
  position: fixed;
  top: 40%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DataExportBtn = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: #d81b60;
  border-radius: 2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const PopupCloseBtn = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #d81b60;
  border-radius: 50%;
  font-size: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5%;
  right: -3%;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const AlertBtn = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: #fff;
  background-color: ${(props) => (props.yes ? '#d81b60' : '#000')};
  outline: none;
  border: none;
  margin: 1rem 1rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  margin: 0 1rem;

  &:checked {
    background-color: #d81b60;
    border-color: #d81b60;
  }
`;
