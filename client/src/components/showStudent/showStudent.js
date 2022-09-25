import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export default function ShowStudent() {
    const [studentsList, setStudentsList] = useState([])
    const deleteStudent = (id) => {
        axios.delete(`http://localhost:5000/students/${id}`).then( () => {
            window.location.reload(false);
        })
    }
    useEffect(() => {
        axios.get("http://localhost:5000/students").then((allStudents) => {
            setStudentsList(allStudents.data);
        })
    }, [])
    return (
    <>
        <h2>All Students</h2>
        <TableContainer component={Paper}>
            <Table aria-label="simple table" style={{boxSizing : "content-box"}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Registration Number</TableCell>
                        <TableCell align="right">Grade</TableCell>
                        <TableCell align="right">Section</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentsList.map((student, key) => (
                    <TableRow
                        key={key.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{student.studentName}</TableCell>
                        <TableCell align="right">{student.regNo}</TableCell>
                        <TableCell align="right">{student.grade}</TableCell>
                        <TableCell align="right">{student.section}</TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="delete"  onClick = { () => deleteStudent(student._id)}>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>              
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  );
}
