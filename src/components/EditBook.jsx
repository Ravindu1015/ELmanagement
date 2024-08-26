// src/components/EditBook.js
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import './styles/EditBook.scss';

function EditBook() {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      const docRef = doc(db, 'books', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const book = docSnap.data();
        setTitle(book.title);
        setAuthor(book.author);
        setIsbn(book.isbn);
      } else {
        console.log('No such document!');
      }
    };

    fetchBook();
  }, [id]);

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'books', id);
      await updateDoc(docRef, {
        title,
        author,
        isbn,
      });
      alert('Book updated successfully!');
      navigate('/'); // Redirect to the home or books list page
    } catch (error) {
      console.error('Error updating book:', error.message);
      alert('Failed to update book.');
    }
  };

  return (
    <form onSubmit={handleUpdateBook}>
      <h2>Edit Book</h2>
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
      <button type="submit">Update Book</button>
    </form>
  );
}

export default EditBook;
