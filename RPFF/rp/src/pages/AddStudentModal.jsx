// // src/components/AddStudentModal.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const AddStudentModal = ({ onClose }) => {
//   const [student, setStudent] = useState({
//     rollno: '',
//     name: '',
//     email: '',
//     phonenumber: '',
//     password: '',
//     deptid: '',
//     yearofjoining: '',
//   });

//   const handleChange = (e) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//         console.log("Sending student object:", student);

//       await axios.post('http://localhost:8080/rp/admin/student/add', student);
//       alert('Student added successfully!');
//       onClose();
//     } catch (error) {
//       alert('Error adding student');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-[90%] max-w-md shadow-lg">
//         <h3 className="text-lg font-semibold mb-4">Add Student</h3>
//         <div className="space-y-3">
//           <input type="text" name="rollno" placeholder="Roll No" onChange={handleChange} className="w-full p-2 border rounded" />
//           <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" />
//           <input type="text" name="phonenumber" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 border rounded" />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" />
//           <input type="number" name="deptid" placeholder="Department ID" onChange={handleChange} className="w-full p-2 border rounded" />
//           <input type="number" name="yearofjoining" placeholder="Year of Joining" onChange={handleChange} className="w-full p-2 border rounded" />
//         </div>
//         <div className="flex justify-end mt-4 space-x-2">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddStudentModal;


// src/components/AddStudentModal.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddStudentModal = ({ onClose }) => {
  const [student, setStudent] = useState({
    rollno: '',
    name: '',
    email: '',
    phonenumber: '',
    password: '',
    deptid: '',
    yearofjoining: '',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      console.log("Sending student object:", student);

      await axios.post('http://localhost:8080/rp/admin/student/add', student);
      alert('Student added successfully!');
      onClose();
    } catch (error) {
      alert('Error adding student');
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-[90%] max-w-md shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Add Student</h3>
        <div className="space-y-3">
          <input
            type="text"
            name="rollno"
            placeholder="Roll No"
            value={student.rollno}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={student.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            value={student.phonenumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={student.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="deptid"
            placeholder="Department ID"
            value={student.deptid}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="yearofjoining"
            placeholder="Year of Joining"
            value={student.yearofjoining}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
