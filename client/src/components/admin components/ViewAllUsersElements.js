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
  /* background-color: green; */

  ${'' /* border-top:1px solid #ccc ; */}
  ${'' /* border-bottom:1px solid #ccc ; */}
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  :hover {
    background-color: #eee;
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
    background-color: #eee;
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
    align-items: center;
  }
`;
