import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <label className="text-gray-600 font-medium">Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors text-color-black"
          />
          <label className="text-gray-600 font-medium">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          Dont have an account? <a href="/register" className="text-blue-600 hover:text-blue-500 font-bold">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
