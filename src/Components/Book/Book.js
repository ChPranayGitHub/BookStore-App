import React from "react";
import { Button } from '@mui/material';
import "./Book.css";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
const Book =(props) => {
  const history=useNavigate();
  const {_id,name,author,description,price,image}=props.book;
  const deleteHandler=async()=>{
    await axios.delete(`http://localhost:5000/books/${_id}`)
      .then(res=>res.data)
      .then(window.location.reload())
      .then(()=>history("/books"))
  }



  return  <div className="card">
    <img src={image} alt={name}/>
    <article>By {author} </article>
    <h3> {name}</h3>
    <p> {description}</p>
    <h2>Rs. {price} </h2>
    <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt:"0" }}>Update </Button>
    <Button onClick={deleteHandler} sx={{ mt:"0" }}>Delete </Button>
  </div>
};
export default Book;
