// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Sem = () => {
//   const [semName, setSemName] = useState('');
//   const [semList, setSemList] = useState([]);

//   useEffect(() => {
//     fetchSemesters();
//   }, []);

//   const fetchSemesters = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/rp/admin/sem/getall');
//       setSemList(response.data);
//     } catch (error) {
//       console.error('Error fetching semesters:', error);
//       alert('Failed to fetch semesters');
//     }
//   };

//   const handleAddSemester = async (e) => {
//     e.preventDefault();

//     if (!semName.trim()) {
//       alert('Semester name cannot be empty');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/rp/admin/sem/add', {
//         semname: semName.trim(),
//       });

//       alert(response.data);
//       setSemName('');
//       fetchSemesters();
//     } catch (error) {
//       console.error('Error adding semester:', error);
//       alert(error.response?.data || 'Failed to add semester');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-800 dark:text-white">
//       <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-6">
//         <h2 className="text-2xl font-bold text-center">Semester Management</h2>

//         <form onSubmit={handleAddSemester} className="flex flex-col sm:flex-row items-center gap-4">
//           <input
//             type="text"
//             placeholder="Enter Semester Name"
//             value={semName}
//             onChange={(e) => setSemName(e.target.value)}
//             className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
//             required
//           />
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
//           >
//             Add Semester
//           </button>
//         </form>

//         <div>
//           <h3 className="text-lg font-semibold mb-3">Available Semesters</h3>
//           {semList.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
//                 <thead className="bg-gray-200 dark:bg-gray-700">
//                   <tr>
//                     <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">ID</th>
//                     <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Semester Name</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {semList.map((sem) => (
//                     <tr key={sem.semid} className="text-center">
//                       <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">{sem.semid}</td>
//                       <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">{sem.semname}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p className="text-sm text-gray-500">No semesters available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sem;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Sem.css';

const Sem = () => {
  const [semName, setSemName] = useState('');
  const [semList, setSemList] = useState([]);

  useEffect(() => {
    fetchSemesters();
  }, []);

  const fetchSemesters = async () => {
    try {
      const response = await axios.get('http://localhost:8080/rp/admin/sem/getall');
      setSemList(response.data);
    } catch (error) {
      console.error('Error fetching semesters:', error);
      alert('Failed to fetch semesters');
    }
  };

  const handleAddSemester = async (e) => {
    e.preventDefault();

    if (!semName.trim()) {
      alert('Semester name cannot be empty');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/rp/admin/sem/add', {
        semname: semName.trim(),
      });

      alert(response.data);
      setSemName('');
      fetchSemesters();
    } catch (error) {
      console.error('Error adding semester:', error);
      alert(error.response?.data || 'Failed to add semester');
    }
  };

  return (
    <div className="sem-container">
      <div className="sem-box">
        <h2 className="sem-heading">📘 Semester Management</h2>

        <form onSubmit={handleAddSemester} className="sem-form">
          <input
            type="text"
            placeholder="Enter Semester Name"
            value={semName}
            onChange={(e) => setSemName(e.target.value)}
            className="sem-input"
            required
          />
          <button type="submit" className="sem-button">Add Semester</button>
        </form>

        <div>
          <h3 className="sem-subheading">📚 Available Semesters</h3>
          {semList.length > 0 ? (
            <div className="sem-table-container">
              <table className="sem-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Semester Name</th>
                  </tr>
                </thead>
                <tbody>
                  {semList.map((sem) => (
                    <tr key={sem.semid}>
                      <td>{sem.semid}</td>
                      <td>{sem.semname}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="sem-empty-text">No semesters available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sem;
