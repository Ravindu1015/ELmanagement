// src/components/AddBook.js
import { useState } from 'react';
import './styles/AddBook.scss';
import { db } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "books"), {
        title,
        author,
        isbn,
      });
      alert("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error.message);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleAddBook}>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
