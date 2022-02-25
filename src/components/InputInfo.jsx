import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../components/css/inputInfo.css"
import { useNavigate } from 'react-router-dom';

const InputInfo = () => {
  const [first_name,setF_name] = useState("");
  const [last_name,setL_name] = useState("");
  const [book_name,setB_name] = useState("");
  const [author,setAuthor] = useState("");
  const [date_of_borrow,setDate] = useState("");
  const [expected_data_of_return,setRdate] = useState("");
  const [borrowed_by,setBorrow] = useState("");
  const navigation = useNavigate();

  const sumbitInfo = async(e) => {
        e.preventDefault();
        try{
           const body = {first_name, last_name, book_name, author, borrowed_by,date_of_borrow, expected_data_of_return};
           const response = await fetch("http://localhost:5000/students",{
           method: "POST",
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(body)
          });
          console.log(response)
          setF_name("");
          setL_name("");
          setB_name("");
          setAuthor("");
          setDate("");
          setRdate("");
          setBorrow("");
          window.location = "/"
        }catch(err){
          console.log(err);
        }
  }
  return (
    <>
    <div className="container">
        <h1 className='title1'>Input Information Here</h1>
        <Box
       component="form"
       sx={{
         '& .MuiTextField-root': { m: 1, width: '25ch' },
       }}
       noValidate
       autoComplete="off"
       onSubmit={sumbitInfo}
     >
       <div className='form-style'>
         <TextField
           required
           placeholder='first name'
           value={first_name}
           onChange={(e)=> setF_name(e.target.value)}
         />
         <TextField
           required
           placeholder='last name'
           value={last_name}
           onChange={(e)=> setL_name(e.target.value)}
         />
         <TextField
           required
           placeholder='book name'
           value={book_name}
           onChange={(e)=> setB_name(e.target.value)}
         />
         </div>
         <div className='form-style'>
         <TextField
           required
           placeholder='author name'
           value={author}
           onChange={(e)=> setAuthor(e.target.value)}
         />
 
         <TextField
           required
           placeholder='borrow date'
           value={date_of_borrow}
           onChange={(e)=> setDate(e.target.value)}
         />
         <TextField
           required
           placeholder='return date'
           value={expected_data_of_return}
           onChange={(e)=> setRdate(e.target.value)}
         />
         </div>
         <div className='f'>
                 <TextField
           placeholder='borrowed by'
           value={borrowed_by}
           onChange={(e)=> setBorrow(e.target.value)}
         />
         <Button type='sumbit'  variant="contained" color="success" size="large" >Sumbit</Button>
          </div>
     </Box>
     <div className='f'>
          <Button variant="contained" color="primary" size="large" onClick={()=> navigation('/details')}>All Details</Button>
          </div>
    </div>
    </>
  )
}

export default InputInfo