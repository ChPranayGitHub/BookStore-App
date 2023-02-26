import React from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import { FormLabel,TextField} from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import {useNavigate} from "react-router-dom";

const BookDetail =() => {
  const [inputs,setInputs] = React.useState({});
  const [checked,setChecked]=React.useState(false);
  const history=useNavigate();
  const id=useParams().id;
  const handleSubmit=(e) =>{
    e.preventDefault();
    sendRequest().then(()=>history("/books"));
  }
  const handleChange = (e) =>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
      }))
  }
  console.log(inputs);
  React.useEffect(()=>{
    const fetchHandler=async()=>{
      await axios.get(`http://localhost:5000/books/${id}`).then(res=>res.data).then(data=>setInputs(data.book));
    }
    fetchHandler();
  },[id]);
  const sendRequest= async()=>{
    await axios.put(`http://localhost:5000/books/${id}`,{
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: String(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked),
    }).then(res=>res.data);
  }
  return  <div>
    {inputs && <form style={{marginTop:"100px"}} onSubmit={handleSubmit}>
  <Box display="flex" flexDirection="column" justifyContent={"center" } maxWidth={700} alignContent={"center"} alignSelf={"center"} marginLeft={"auto"}
      marginRight={"auto"} marginTop={20}>
    <FormLabel>Name </FormLabel>
    <TextField required value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name"/>

    <FormLabel>Author </FormLabel>
    <TextField required value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author"/>

    <FormLabel>Description </FormLabel>
    <TextField required value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description"/>

    <FormLabel>Price</FormLabel>
    <TextField required value={inputs.price} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="price"/>

    <FormLabel>Image</FormLabel>
    <TextField required value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image"/>

    <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />

    <Button type="submit" variant="content" style={{marginBottom:"100px",backgroundColor:"khaki"}}>Update Book</Button>
  </Box>
    </form>}
  </div>
};
export default BookDetail;
