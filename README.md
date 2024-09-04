# E-Library Management System

## Overview

The E-Library Management System is a web application designed to manage books in an online library efficiently. Users can register, log in, add, edit, and view books. The application features user authentication and a user-friendly interface built with React, Firebase, and Tailwind CSS.

## Features

- **User Registration**: Users can create an account with email and password.
- **User Login**: Existing users can log in to their accounts.
- **Profile Management**: Users can view and manage their profiles.
- **Book Management**:
  - **Add Book**: Add new books to the library.
  - **Edit Book**: Update existing book information.
  - **View Books**: Browse and search through the library’s book collection.
- **Responsive Design**: The application is fully responsive and accessible on various devices.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Firebase**: Backend service for authentication and database management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for faster development and build processes.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/e-library-management.git
   cd e-library-management
Install dependencies

bash
Copy code
npm install
or

bash
Copy code
yarn install
Set up Firebase

Create a Firebase project at Firebase Console.
Add Firebase configuration to src/firebaseConfig.js using your project's credentials.
Ensure Firestore and Authentication are enabled in the Firebase console.
Start the development server

bash
Copy code
npm run dev
or

bash
Copy code
yarn dev
Open your browser

Visit http://localhost:3000 to view the application.

Usage
Registration: Navigate to /register to create a new account.
Login: Navigate to /login to log into an existing account.
Profile: Navigate to /profile to view and manage your profile.
Add Book: Navigate to /add to add new books to the library.
Edit Book: Navigate to /edit/:id to edit book details (replace :id with the book ID).
View Books: Navigate to /viewbook to browse the library's collection.
Contributing
Contributions are welcome! If you have suggestions or improvements, please follow these steps:

Fork the repository.

Create a feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/YourFeature).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or inquiries, please reach out to:

Your Name: your- ravinduchan15@gmail.com
GitHub: https://github.com/Ravindu1015
