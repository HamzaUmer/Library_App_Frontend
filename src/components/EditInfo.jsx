import React ,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EditInfo = ({student}) => {
    const [first_name,setF_name] = useState(student.first_name);
    const [last_name,setL_name] = useState(student.last_name);
    const [book_name,setB_name] = useState(student.book_name);
    const [author,setAuthor] = useState(student.author);
    const [date_of_borrow,setDate] = useState(student.date_of_borrow);
    const [expected_data_of_return,setRdate] = useState(student.expected_data_of_return);
    const [borrowed_by,setBorrow] = useState(student.borrowed_by);
    const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Edit Student Data
  const updateStudent = async(e)=>{
      e.preventDefault();
      try{
        const body = {first_name, last_name, book_name, author, borrowed_by,date_of_borrow, expected_data_of_return};
        const response = await fetch(`http://localhost:5000/students/${student.s_no}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
       });
       window.location="/details"
      }catch(err){
          console.log(err);
      }
  }
  return (
    <>
    <Button variant="contained" color="primary" size="small" onClick={handleClickOpen}>Edit</Button>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Student Information</DialogTitle>
        <DialogContent>
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
         <div className='form-style'>
         <TextField
           placeholder='borrowed by'
           value={borrowed_by}
           onChange={(e)=> setBorrow(e.target.value)}
         />
         </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" size="small" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="success" size="small" onClick={(e)=> updateStudent(e)}>Edit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EditInfo