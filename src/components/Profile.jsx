// src/components/Profile.js
import { auth } from '../firebaseConfig';
import './styles/Profile.scss'; 

function Profile() {
  const user = auth.currentUser;

  if (!user) {
    return <p>You need to be logged in to view your profile.</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      {/* Add more fields as needed */}
    </div>
  );
}

export default Profile;
