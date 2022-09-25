import {React, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from "axios";

export default function Create() {
  const [Student, setStudent] = useState({
    regNo : 0,
    studentName : "",
    grade : "",
    section : ""
  })
  
  const createStudent = () => {
    axios.post("http://localhost:5000/students", Student).then( () => {
        window.location.reload(false);
    });
  }
  return (
    <>
        <h2>Create Student</h2>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
        }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Registration No." variant="outlined" value={Student.regNo} onChange = {(event) => {
                setStudent({ ...Student, regNo : event.target.value})
            }}/>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={Student.studentName} onChange = {(event) => {
                setStudent({ ...Student, studentName : event.target.value})
            }}/>
            <TextField id="outlined-basic" label="Grade" variant="outlined"  value={Student.grade} onChange = {(event) => {
                setStudent({ ...Student, grade : event.target.value})
            }}/>
            <TextField id="outlined-basic" label="Section" variant="outlined" value={Student.section} onChange = {(event) => {
                setStudent({ ...Student, section : event.target.value})
            }}/>

            <Button variant = "contained" color='primary' onClick={createStudent}>
                Create Student
            </Button>
        </Box>
    </>
  );
}
