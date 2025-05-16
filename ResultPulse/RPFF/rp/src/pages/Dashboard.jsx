// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const [deptName, setDeptName] = useState('');
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//       <button
//         onClick={() => navigate('/student')}
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//       >
//         Go to Student Page
//       </button>

//       <button
//         onClick={() => navigate('/department')}
//         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//       >
//         Department
//       </button>

//       <button
//         onClick={() => navigate('/topic')}
//         className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
//       >
//         Topic
//       </button>

//       <button
//         onClick={() => navigate('/sem')}
//         className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
//       >
//         Sem
//       </button>

//       {/* New Course Button */}
//       <button
//         onClick={() => navigate('/course')}
//         className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
//       >
//         Course
//       </button>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaBuilding, FaBookOpen, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';
import '../assets/css/Dashboard.css'; // import the separate CSS file

const cards = [
  { title: 'Student', icon: <FaUserGraduate />, route: '/student' },
  { title: 'Department', icon: <FaBuilding />, route: '/department' },
  { title: 'Topic', icon: <FaBookOpen />, route: '/topic' },
  { title: 'Semester', icon: <FaCalendarAlt />, route: '/sem' },
  { title: 'Course', icon: <FaClipboardList />, route: '/course' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="card-grid">
        {cards.map(({ title, icon, route }) => (
          <div
            key={title}
            className="dashboard-card"
            onClick={() => navigate(route)}
            tabIndex={0} // make div focusable for accessibility
            role="button"
            onKeyDown={(e) => { if (e.key === 'Enter') navigate(route); }}
          >
            <div className="icon-wrapper">{icon}</div>
            <h2 className="card-title">{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
