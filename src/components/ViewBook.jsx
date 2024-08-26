// src/components/ViewBooks.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import DeleteBook from './DeleteBook';
import './styles/ViewBooks.scss';
import './styles/DeleteBook.scss';

function ViewBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksCollection = collection(db, 'books');
      const booksSnapshot = await getDocs(booksCollection);
      const booksList = booksSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksList);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>All Books</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>ISBN: {book.isbn}</p>
          <Link to={`/edit/${book.id}`}>Edit</Link>
          <DeleteBook id={book.id} />
        </div>
      ))}
    </div>
  );
}

export default ViewBooks;
