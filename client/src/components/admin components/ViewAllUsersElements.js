import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 3rem;
`;
export const Header = styled.h1`
  font-size: 2.5rem;
  color: #555;
  text-align: left;
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
