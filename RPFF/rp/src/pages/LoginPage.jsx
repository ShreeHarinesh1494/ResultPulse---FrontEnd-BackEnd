// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function LoginPage() {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/rp/admin/login', credentials);
//       alert(response.data);
//       if (response.data.includes('OTP sent')) {
//         localStorage.setItem('adminEmail', credentials.email);
//         navigate('/verify-otp');
//       }
//     } catch (error) {
//       alert('Login failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input name="email" placeholder="Email" onChange={handleChange} required />
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//       <button type="submit">Login</button>
//     </form>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/css/LoginPage.css'; // <-- import this CSS

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/rp/admin/login', credentials);
      alert(response.data);
      if (response.data.includes('OTP sent')) {
        localStorage.setItem('adminEmail', credentials.email);
        navigate('/verify-otp');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="glass-form">
        <h2>Admin Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-submit">Login</button>
      </form>
    </div>
  );
}

