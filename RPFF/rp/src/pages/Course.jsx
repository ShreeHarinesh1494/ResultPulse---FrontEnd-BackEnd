// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Course = () => {
//   const [courseId, setCourseId] = useState('');
//   const [courseName, setCourseName] = useState('');
//   const [credits, setCredits] = useState('');
//   const [semId, setSemId] = useState('');
//   const [semesters, setSemesters] = useState([]);
//   const [courses, setCourses] = useState([]);

//   // Fetch semesters and courses on component mount
//   useEffect(() => {
//     fetchSemesters();
//     fetchCourses();
//   }, []);

//   const fetchSemesters = async () => {
//     try {
//       const res = await axios.get('http://localhost:8080/rp/admin/sem/getall');
//       setSemesters(res.data);
//     } catch (error) {
//       console.error('Error fetching semesters:', error);
//       alert('Failed to fetch semesters');
//     }
//   };

//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get('http://localhost:8080/rp/admin/course/getall');
//       setCourses(res.data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//       alert('Failed to fetch courses');
//     }
//   };

//   const handleAddCourse = async (e) => {
//     e.preventDefault();

//     if (!courseId.trim() || !courseName.trim() || !credits || !semId) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:8080/rp/admin/course/add', {
//         courseid: courseId.trim(),
//         coursename: courseName.trim(),
//         credits: Number(credits),
//         semid: Number(semId),
//       });
//       alert(res.data);
//       // Clear inputs
//       setCourseId('');
//       setCourseName('');
//       setCredits('');
//       setSemId('');
//       fetchCourses(); // Refresh course list
//     } catch (error) {
//       console.error('Error adding course:', error);
//       alert(error.response?.data || 'Failed to add course');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-800 dark:text-white">
//       <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-6">
//         <h2 className="text-2xl font-bold text-center">Course Management</h2>

//         <form onSubmit={handleAddCourse} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
//           <div>
//             <label className="block mb-1">Course ID</label>
//             <input
//               type="text"
//               value={courseId}
//               onChange={(e) => setCourseId(e.target.value)}
//               className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1">Course Name</label>
//             <input
//               type="text"
//               value={courseName}
//               onChange={(e) => setCourseName(e.target.value)}
//               className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1">Credits</label>
//             <input
//               type="number"
//               min="1"
//               value={credits}
//               onChange={(e) => setCredits(e.target.value)}
//               className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1">Semester</label>
//             <select
//               value={semId}
//               onChange={(e) => setSemId(e.target.value)}
//               className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
//               required
//             >
//               <option value="">Select Semester</option>
//               {semesters.map((sem) => (
//                 <option key={sem.semid} value={sem.semid}>
//                   {sem.semname}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="sm:col-span-4 flex justify-center mt-4">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
//             >
//               Add Course
//             </button>
//           </div>
//         </form>

//         <div>
//           <h3 className="text-lg font-semibold mb-3">Available Courses</h3>
//           {courses.length > 0 ? (
//             <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-600">
//               <thead>
//                 <tr className="bg-gray-200 dark:bg-gray-700">
//                   <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">ID</th>
//                   <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Name</th>
//                   <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Credits</th>
//                   <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Semester</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {courses.map((course) => (
//                   <tr key={course.courseid} className="odd:bg-gray-100 even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
//                     <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{course.courseid}</td>
//                     <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{course.coursename}</td>
//                     <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{course.credits}</td>
//                     <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{course.sem?.semname || 'N/A'}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-sm text-gray-500">No courses available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Course;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Course.css'; // ⬅ Importing the separate CSS file

const Course = () => {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [credits, setCredits] = useState('');
  const [semId, setSemId] = useState('');
  const [semesters, setSemesters] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchSemesters();
    fetchCourses();
  }, []);

  const fetchSemesters = async () => {
    try {
      const res = await axios.get('http://localhost:8080/rp/admin/sem/getall');
      setSemesters(res.data);
    } catch (error) {
      console.error('Error fetching semesters:', error);
      alert('Failed to fetch semesters');
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:8080/rp/admin/course/getall');
      setCourses(res.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      alert('Failed to fetch courses');
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();

    if (!courseId.trim() || !courseName.trim() || !credits || !semId) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/rp/admin/course/add', {
        courseid: courseId.trim(),
        coursename: courseName.trim(),
        credits: Number(credits),
        semid: Number(semId),
      });
      alert(res.data);
      setCourseId('');
      setCourseName('');
      setCredits('');
      setSemId('');
      fetchCourses();
    } catch (error) {
      console.error('Error adding course:', error);
      alert(error.response?.data || 'Failed to add course');
    }
  };

  return (
    <div className="course-container">
      <div className="course-card">
        <h2 className="course-title">🎓 Course Management</h2>

        <form onSubmit={handleAddCourse} className="course-form">
          <div>
            <label>Course ID</label>
            <input
              type="text"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Course Name</label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Credits</label>
            <input
              type="number"
              min="1"
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Semester</label>
            <select
              value={semId}
              onChange={(e) => setSemId(e.target.value)}
              required
            >
              <option value="">Select Semester</option>
              {semesters.map((sem) => (
                <option key={sem.semid} value={sem.semid}>
                  {sem.semname}
                </option>
              ))}
            </select>
          </div>

          <div className="course-button-wrapper">
            <button type="submit">➕ Add Course</button>
          </div>
        </form>

        <div className="course-table-wrapper">
          <h3>📚 Available Courses</h3>
          {courses.length > 0 ? (
            <table className="course-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Credits</th>
                  <th>Semester</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.courseid}>
                    <td>{course.courseid}</td>
                    <td>{course.coursename}</td>
                    <td>{course.credits}</td>
                    <td>{course.sem?.semname || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-data">No courses available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
