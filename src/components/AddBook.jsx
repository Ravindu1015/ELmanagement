import { useState } from 'react';
import { db } from '../firebaseConfig'; // Assuming firebaseConfig.js is properly set up for Firebase
import { collection, addDoc } from 'firebase/firestore';

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
      setTitle(''); // Clear the input fields after submission
      setAuthor('');
      setIsbn('');
    } catch (error) {
      console.error("Error adding book:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <h2 className="text-2xl font-bold text-blue-500 mb-6">Add Book</h2>
        <form onSubmit={handleAddBook} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title:</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author:</label>
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ISBN:</label>
            <input
              type="text"
              placeholder="ISBN"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition-colors duration-300"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
