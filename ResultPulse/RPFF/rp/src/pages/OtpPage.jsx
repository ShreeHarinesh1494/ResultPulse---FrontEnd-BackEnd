// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function OtpPage() {
//   const [otp, setOtp] = useState('');
//   const navigate = useNavigate();
//   const email = localStorage.getItem('adminEmail');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/rp/admin/verify-otp', { email, otp });

//       const data = response.data;
//       alert(data.message || data); // support both string or object response

//       // If backend returns adminId, store it
//       if (data.adminId) {
//         localStorage.setItem('adminId', data.adminId);
//         navigate('/dashboard');
//       } else if (data === 'Login successful!') {
//         // fallback if just a string is returned
//         navigate('/dashboard');
//       }

//     } catch (error) {
//       alert('OTP verification failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Enter OTP</h2>
//       <input
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         placeholder="OTP"
//         required
//       />
//       <button type="submit">Verify OTP</button>
//     </form>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/css/OtpPage.css';

export default function OtpPage() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const email = localStorage.getItem('adminEmail');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/rp/admin/verify-otp', { email, otp });

      const data = response.data;
      alert(data.message || data);

      if (data.adminId) {
        localStorage.setItem('adminId', data.adminId);
        navigate('/dashboard');
      } else if (data === 'Login successful!') {
        navigate('/dashboard');
      }

    } catch (error) {
      alert('OTP verification failed');
    }
  };

  return (
    <div className="otp-container">
      <motion.form
        onSubmit={handleSubmit}
        className="glass-form"
        initial={{ opacity: 0, scale: 0.7, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2>Verify OTP</h2>
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter your OTP"
          maxLength={6}
          pattern="\d{6}"
          title="6 digit OTP"
          required
          inputMode="numeric"
        />
        <button type="submit" className="btn-submit">Verify</button>
      </motion.form>
    </div>
  );
}
