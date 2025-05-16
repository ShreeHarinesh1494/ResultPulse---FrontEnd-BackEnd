// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function RegisterPage() {
//   const [admin, setAdmin] = useState({ adminname: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setAdmin({ ...admin, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8080/rp/admin/register', admin);
//       alert('Registered successfully');
//       navigate('/login');
//     } catch (error) {
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center mb-4">Admin Register</h2>

//         <input
//           name="adminname"
//           placeholder="Name"
//           value={admin.adminname}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
//         />

//         <input
//           name="email"
//           placeholder="Email"
//           value={admin.email}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={admin.password}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
//         >
//           Register
//         </button>

//         <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
//           <button
//             type="button"
//             onClick={() => navigate('/student-login')}
//             className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
//           >
//             Student Login
//           </button>

//           <button
//             type="button"
//             onClick={() => navigate('/login')}
//             className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
//           >
//             Admin Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/css/RegisterPage.css';
import 'animate.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaUserShield } from 'react-icons/fa';

export default function RegisterPage() {
  const [admin, setAdmin] = useState({ adminname: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/rp/admin/register', admin);
      alert('Registered successfully');
      navigate('/login');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="branding animate__animated animate__fadeInDown">
          <h1>Welcome to <span className="highlight">ResultPulse</span></h1>
          <p>Your ultimate academic companion to manage and track student results with efficiency, transparency, and innovation.</p>
        </div>

        <form className="glass-form animate__animated animate__zoomIn" onSubmit={handleSubmit} id="register">
          <h2><FaUserShield /> Admin Registration</h2>

          <input
            name="adminname"
            placeholder="Name"
            value={admin.adminname}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={admin.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={admin.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-submit">Register</button>

          <div className="button-group">
            <button type="button" onClick={() => navigate('/student-login')}>Student Login</button>
            <button type="button" onClick={() => navigate('/login')}>Admin Login</button>
          </div>
        </form>

        <section className="about-section animate__animated animate__fadeInUp" id="about">
          <h2>About ResultPulse</h2>
          <p>
            ResultPulse is a powerful platform designed for educational institutions to efficiently manage and display students’ academic results. 
            It offers a secure portal for both students and administrators to view, analyze, and manage academic data with ease.
          </p>
          <ul>
            <li>✔ Real-time result updates</li>
            <li>✔ Secure login for admin and students</li>
            <li>✔ Transparent performance tracking</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}

