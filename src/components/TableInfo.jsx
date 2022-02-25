import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

  
const TableInfo = () => {
  const [students,setStudents]= useState([]);
  const getStudents = async () => {
    try{
       const response = await fetch("http://localhost:5000/students");
       const jsonData = await response.json();
       setStudents(jsonData);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=> {
    getStudents();
  },[])

  return (
    <>
    <div className='container1'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>s_no</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Book Name</StyledTableCell>
            <StyledTableCell align="center">Author</StyledTableCell>
            <StyledTableCell align="center">Borrowed By</StyledTableCell>
            <StyledTableCell align="center">Borrow Date</StyledTableCell>
            <StyledTableCell align="center">Return Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <StyledTableRow key={student.s_no}>
              <StyledTableCell component="th" scope="row" >
                {student.s_no}
              </StyledTableCell>
              <StyledTableCell align="center">{student.first_name}</StyledTableCell>
              <StyledTableCell align="center">{student.last_name}</StyledTableCell>
              <StyledTableCell align="center">{student.book_name}</StyledTableCell>
              <StyledTableCell align="center">{student.author}</StyledTableCell>
              <StyledTableCell align="center">{student.borrowed_by}</StyledTableCell>
              <StyledTableCell align="center">{student.date_of_borrow}</StyledTableCell>
              <StyledTableCell align="center">{student.expected_data_of_return}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  )
}

export default TableInfo