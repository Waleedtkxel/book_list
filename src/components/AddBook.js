import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (title === "") {
      alert("Enter Book Name");
    } else if (author === "") {
      alert("Enter Author name");
    } else {
      addBook(title, author);
      navigate("/"); // Navigate to the home page or any other route
    }

    setTitle("");
    setAuthor("");
  };

  return (
    <div style={{ margin: 120 }}>
      <form onSubmit={submitHandler} className="form-group">
        <input
          style={{ margin: 20 }}
          name="title"
          className="form-control"
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          value={title}
          placeholder="Enter Book Name"
        />

        <input
          style={{ margin: 20 }}
          name="author"
          className="form-control"
          onChange={(event) => setAuthor(event.target.value)}
          type="text"
          value={author}
          placeholder="Enter Author Name"
        />

        <button
          style={{ margin: 20 }}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
