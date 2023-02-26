import React from "react";
import axios from "axios";
import "./Book.css";
import Book from "./Book";
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

const Books =() => {
  const [books,setBooks]=React.useState();
  React.useEffect(()=>{
    fetchHandler().then((data)=>setBooks(data.books));
  }, []);
  console.log(books);
  return <div style={{marginTop:"100px"}}>
    <ul>
      {books && books.map((book,i)=>(
        <li key={i} >
          <Book book={book}/>
        </li>
      ))}
    </ul>
  </div>
};
export default Books;
