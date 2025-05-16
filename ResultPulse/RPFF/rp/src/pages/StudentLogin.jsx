// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentLogin = () => {
//   const [student, setStudent] = useState({ rollno: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:8080/rp/admin/student/login', student);
//       if (res.data === 'Login successful') {
//         alert('Login successful');
//         navigate('/student-dashboard'); // update this route if needed
//       } else {
//         alert(res.data);
//       }
//     } catch (error) {
//       alert('Login failed. Server error.');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
//           Student Login
//         </h2>

//         <input
//           name="rollno"
//           type="number"
//           placeholder="Roll Number"
//           value={student.rollno}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           value={student.password}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StudentLogin;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/StudentLogin.css'; // import CSS

const StudentLogin = () => {
  const [student, setStudent] = useState({ rollno: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/rp/admin/student/login', student);
      if (res.data === 'Login successful') {
        alert('Login successful');
        navigate('/student-dashboard');
      } else {
        alert(res.data);
      }
    } catch (error) {
      alert('Login failed. Server error.');
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Student Login</h2>
        <input
          name="rollno"
          type="number"
          placeholder="Roll Number"
          value={student.rollno}
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={student.password}
          onChange={handleChange}
          required
          className="login-input"
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;
