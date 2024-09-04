import { db } from '../firebaseConfig'; // Firebase configuration
import { doc, deleteDoc } from 'firebase/firestore'; // Firestore methods
import PropTypes from 'prop-types'; // For prop validation
// eslint-disable-next-line no-unused-vars
import React from 'react';

function DeleteBook({ id }) {
  // Function to handle deletion of a book from Firestore
  const handleDeleteBook = async () => {
    try {
      await deleteDoc(doc(db, 'books', id)); // Delete the book by its document ID
      alert('Book deleted successfully!');
      window.location.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.error('Error deleting book:', error.message);
      alert('Failed to delete book.');
    }
  };

  return (
    <button
      onClick={handleDeleteBook}
      className="text-red-500 font-bold hover:text-red-600 transition-colors duration-300"
    >
      Delete
    </button>
  );
}

// Ensuring the ID is passed as a required string prop
DeleteBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteBook;
