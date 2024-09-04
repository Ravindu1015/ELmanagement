// src/components/ViewBooks.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import DeleteBook from './DeleteBook';
import './ViewBooks.scss';

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
    <div className="container mx-auto p-4">
      <h2 className="text-center text-4xl font-bold text-blue-600 mb-6">All Books</h2>
      <div className="card-grid flex flex-wrap justify-center gap-8">
        {books.map((book) => (
          <div key={book.id} className="card bg-gray-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:transform hover:-translate-y-2 transition">
            <h3 className="card-title text-2xl font-semibold mb-4">{book.title}</h3>
            <p className="card-content mb-2">Author: {book.author}</p>
            <p className="card-content mb-2">ISBN: {book.isbn}</p>
            <div className="flex justify-center space-x-4">
              <Link to={`/edit/${book.id}`} className="text-white font-bold hover:text-blue-200 transition">Edit</Link>
              <DeleteBook id={book.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewBooks;
