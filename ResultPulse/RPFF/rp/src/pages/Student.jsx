// // src/pages/Student.jsx
// import React, { useState } from 'react';
// import AddStudentModal from './AddStudentModal';

// const Student = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className="min-h-screen p-6">
//       <h2 className="text-2xl font-semibold mb-4">Student Management</h2>
//       <button
//         onClick={() => setShowModal(true)}
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//       >
//         Add Student
//       </button>
//       {showModal && <AddStudentModal onClose={() => setShowModal(false)} />}
//     </div>
//   );
// };

// export default Student;


// src/pages/Student.jsx
import React, { useState } from 'react';
import AddStudentModal from './AddStudentModal';
import '../assets/css/Student.css';

const Student = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="student-container">
      <h2 className="student-title">Student Management</h2>
      <button
        onClick={() => setShowModal(true)}
        className="add-student-btn"
        aria-label="Add Student"
      >
        Add Student
      </button>
      {showModal && (
        <div className="fade-in">
          <AddStudentModal onClose={() => setShowModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Student;
