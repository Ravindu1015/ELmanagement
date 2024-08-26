// src/components/DeleteBook.js
// import React from 'react'; // Remove the unused import statement
import { db } from '../firebaseConfig';
import './styles/DeleteBook.scss';
import { doc, deleteDoc } from 'firebase/firestore';

import PropTypes from 'prop-types';

function DeleteBook({ id }) {
  // Rest of the code

  const handleDeleteBook = async () => {
    try {
      await deleteDoc(doc(db, 'books', id));
      alert('Book deleted successfully!');
      window.location.reload(); // Reload to reflect changes (or use state to remove the book from the list)
    } catch (error) {
      console.error('Error deleting book:', error.message);
      alert('Failed to delete book.');
    }
  };

  return <button onClick={handleDeleteBook}>Delete</button>;
}

DeleteBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteBook;
