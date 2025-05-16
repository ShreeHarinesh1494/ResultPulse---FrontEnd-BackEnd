// import React, { useState, useEffect } from 'react';

// const Department = () => {
//   const [departments, setDepartments] = useState([]);
//   const [deptName, setDeptName] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchDepartments = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch('http://localhost:8080/rp/admin/dept/all');
//       if (!res.ok) throw new Error('Failed to fetch departments');
//       const data = await res.json();
//       setDepartments(data);
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDepartments();
//   }, []);

//   const addDepartment = async () => {
//     if (!deptName.trim()) {
//       alert("Department name is required");
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:8080/rp/admin/dept/post', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ deptname: deptName }),
//       });

//       const data = await res.text();

//       if (res.ok) {
//         alert("Department added successfully!");
//         setDeptName('');
//         fetchDepartments();
//       } else {
//         alert("Error: " + data);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add department");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Departments</h1>

//       <div className="mb-6 flex space-x-3">
//         <input
//           type="text"
//           placeholder="New Department Name"
//           value={deptName}
//           onChange={(e) => setDeptName(e.target.value)}
//           className="flex-grow px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={addDepartment}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Add
//         </button>
//       </div>

//       {loading ? (
//         <p>Loading departments...</p>
//       ) : (
//         <ul className="space-y-2">
//           {departments.length === 0 ? (
//             <p>No departments found.</p>
//           ) : (
//             departments.map((dept) => (
//               <li
//                 key={dept.deptid}
//                 className="p-4 bg-gray-100 rounded dark:bg-gray-800"
//               >
//                 {dept.deptname}
//               </li>
//             ))
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Department;



import React, { useState, useEffect } from 'react';
import '../assets/css/Department.css';  // import the css file

const Department = () => {
  
  const [departments, setDepartments] = useState([]);
  const [deptName, setDeptName] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:8080/rp/admin/dept/all');
      if (!res.ok) throw new Error('Failed to fetch departments');
      const data = await res.json();
      setDepartments(data);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const addDepartment = async () => {
    if (!deptName.trim()) {
      alert("Department name is required");
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/rp/admin/dept/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deptname: deptName }),
      });

      const data = await res.text();

      if (res.ok) {
        alert("Department added successfully!");
        setDeptName('');
        fetchDepartments();
      } else {
        alert("Error: " + data);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to add department");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Departments</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="New Department Name"
          value={deptName}
          onChange={(e) => setDeptName(e.target.value)}
        />
        <button onClick={addDepartment}>Add</button>
      </div>

      {loading ? (
        <p className="loading-text">Loading departments...</p>
      ) : (
        <ul className="list">
          {departments.length === 0 ? (
            <p>No departments found.</p>
          ) : (
            departments.map((dept) => (
              <li key={dept.deptid} className="list-item">
                {dept.deptname}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Department;
