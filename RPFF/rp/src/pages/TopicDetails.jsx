// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Dialog } from '@headlessui/react';
// import axios from 'axios';

// const TopicDetails = () => {
//   const { topicid } = useParams();

//   const [formData, setFormData] = useState({
//     rollno: '',
//     name: '',
//     yearofjoining: '',
//     gpa: '',
//     overallremarks: '',
//     courses: [],
//   });

//   const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
//   const [newCourse, setNewCourse] = useState({
//     courseid: '',
//     coursename: '',
//     credits: '',
//     acquiredcredits: '',
//     gradepercourse: '',
//     courseremark: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCourseChange = (e) => {
//     const { name, value } = e.target;
//     setNewCourse((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const addCourse = () => {
//     setFormData((prev) => ({
//       ...prev,
//       courses: [...prev.courses, newCourse],
//     }));
//     setNewCourse({
//       courseid: '',
//       coursename: '',
//       credits: '',
//       acquiredcredits: '',
//       gradepercourse: '',
//       courseremark: '',
//     });
//     setIsCourseModalOpen(false);
//   };

//   const handleSubmit = async () => {
//     try {
//       const payload = {
//         ...formData,
//         topicid: parseInt(topicid),
//         yearofjoining: parseInt(formData.yearofjoining),
//         gpa: parseFloat(formData.gpa),
//       };

//       const res = await axios.post('http://localhost:8080/rp/analysis/post', payload);
//       alert('Data submitted successfully');
//     } catch (err) {
//       console.error(err);
//       alert('Error submitting data');
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
//       <h2 className="text-2xl font-bold mb-4">Topic ID: {topicid}</h2>

//       {/* Form Fields */}
//       <div className="space-y-4 max-w-2xl">
//         <input
//           name="rollno"
//           placeholder="Roll No"
//           value={formData.rollno}
//           onChange={handleInputChange}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleInputChange}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           name="yearofjoining"
//           placeholder="Year of Joining"
//           type="number"
//           value={formData.yearofjoining}
//           onChange={handleInputChange}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           name="gpa"
//           placeholder="GPA"
//           type="number"
//           step="0.01"
//           value={formData.gpa}
//           onChange={handleInputChange}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           name="overallremarks"
//           placeholder="Overall Remarks"
//           value={formData.overallremarks}
//           onChange={handleInputChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       {/* Course Section */}
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold mb-2">Courses</h3>
//         <button
//           onClick={() => setIsCourseModalOpen(true)}
//           className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           + Add Course
//         </button>

//         {formData.courses.length === 0 ? (
//           <p>No courses added yet.</p>
//         ) : (
//           <table className="w-full text-sm text-left border dark:border-gray-700">
//             <thead>
//               <tr className="bg-gray-200 dark:bg-gray-800">
//                 <th className="p-2">ID</th>
//                 <th className="p-2">Name</th>
//                 <th className="p-2">Credits</th>
//                 <th className="p-2">Acquired</th>
//                 <th className="p-2">Grade</th>
//                 <th className="p-2">Remark</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.courses.map((course, index) => (
//                 <tr key={index} className="border-t dark:border-gray-700">
//                   <td className="p-2">{course.courseid}</td>
//                   <td className="p-2">{course.coursename}</td>
//                   <td className="p-2">{course.credits}</td>
//                   <td className="p-2">{course.acquiredcredits}</td>
//                   <td className="p-2">{course.gradepercourse}</td>
//                   <td className="p-2">{course.courseremark}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* Save Button */}
//       <div className="mt-6">
//         <button
//           onClick={handleSubmit}
//           className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//         >
//           Save All
//         </button>
//       </div>

//       {/* Add Course Modal */}
//       <Dialog open={isCourseModalOpen} onClose={() => setIsCourseModalOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
//         <div className="flex items-center justify-center min-h-screen p-4">
//           <Dialog.Panel className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow-lg">
//             <Dialog.Title className="text-lg font-semibold mb-4">Add Course</Dialog.Title>
//             <div className="space-y-3">
//               <input name="courseid" placeholder="Course ID" value={newCourse.courseid} onChange={handleCourseChange} className="w-full p-2 border rounded" />
//               <input name="coursename" placeholder="Course Name" value={newCourse.coursename} onChange={handleCourseChange} className="w-full p-2 border rounded" />
//               <input name="credits" type="number" placeholder="Credits" value={newCourse.credits} onChange={handleCourseChange} className="w-full p-2 border rounded" />
//               <input name="acquiredcredits" type="number" placeholder="Acquired Credits" value={newCourse.acquiredcredits} onChange={handleCourseChange} className="w-full p-2 border rounded" />
//               <input name="gradepercourse" placeholder="Grade" value={newCourse.gradepercourse} onChange={handleCourseChange} className="w-full p-2 border rounded" />
//               <input name="courseremark" placeholder="Course Remark" value={newCourse.courseremark} onChange={handleCourseChange} className="w-full p-2 border rounded" />
//             </div>
//             <div className="flex justify-end mt-4 space-x-2">
//               <button onClick={() => setIsCourseModalOpen(false)} className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded">Cancel</button>
//               <button onClick={addCourse} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add</button>
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default TopicDetails;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Dialog } from '@headlessui/react';
// import axios from 'axios';
// import '../assets/css/TopicDetails.css';

// const TopicDetails = () => {
//   const { topicid } = useParams();

//   const [formData, setFormData] = useState({
//     rollno: '',
//     name: '',
//     yearofjoining: '',
//     gpa: '',
//     overallremarks: '',
//     courses: [],
//   });

//   const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
//   const [newCourse, setNewCourse] = useState({
//     courseid: '',
//     coursename: '',
//     credits: '',
//     acquiredcredits: '',
//     gradepercourse: '',
//     courseremark: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCourseChange = (e) => {
//     const { name, value } = e.target;
//     setNewCourse((prev) => ({ ...prev, [name]: value }));
//   };

//   const addCourse = () => {
//     setFormData((prev) => ({
//       ...prev,
//       courses: [...prev.courses, newCourse],
//     }));
//     setNewCourse({
//       courseid: '',
//       coursename: '',
//       credits: '',
//       acquiredcredits: '',
//       gradepercourse: '',
//       courseremark: '',
//     });
//     setIsCourseModalOpen(false);
//   };

//   const handleSubmit = async () => {
//     try {
//       const payload = {
//         ...formData,
//         topicid: parseInt(topicid),
//         yearofjoining: parseInt(formData.yearofjoining),
//         gpa: parseFloat(formData.gpa),
//       };
//       await axios.post('http://localhost:8080/rp/analysis/post', payload);
//       alert('Data submitted successfully');
//     } catch (err) {
//       console.error(err);
//       alert('Error submitting data');
//     }
//   };

//   return (
//     <div className="topic-container">
//       <h2 className="topic-title">Topic ID: {topicid}</h2>

//       <div className="topic-form">
//         {['rollno', 'name', 'yearofjoining', 'gpa', 'overallremarks'].map((field) => (
//           <input
//             key={field}
//             name={field}
//             type={field === 'yearofjoining' || field === 'gpa' ? 'number' : 'text'}
//             step={field === 'gpa' ? '0.01' : undefined}
//             placeholder={field.replace(/([a-z])([A-Z])/g, '$1 $2')}
//             value={formData[field]}
//             onChange={handleInputChange}
//             className="topic-input"
//           />
//         ))}
//       </div>

//       <div className="course-section">
//         <h3 className="course-title">Courses</h3>
//         <button onClick={() => setIsCourseModalOpen(true)} className="add-course-btn">
//           + Add Course
//         </button>

//         {formData.courses.length === 0 ? (
//           <p className="no-courses">No courses added yet.</p>
//         ) : (
//           <table className="course-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Credits</th>
//                 <th>Acquired</th>
//                 <th>Grade</th>
//                 <th>Remark</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.courses.map((course, index) => (
//                 <tr key={index}>
//                   <td>{course.courseid}</td>
//                   <td>{course.coursename}</td>
//                   <td>{course.credits}</td>
//                   <td>{course.acquiredcredits}</td>
//                   <td>{course.gradepercourse}</td>
//                   <td>{course.courseremark}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       <button onClick={handleSubmit} className="save-btn">
//         Save All
//       </button>

//       {/* Modal */}
//       <Dialog open={isCourseModalOpen} onClose={() => setIsCourseModalOpen(false)} className="modal-container">
//         <div className="modal-content-wrapper">
//           <Dialog.Panel className="modal-panel">
//             <Dialog.Title className="modal-title">Add Course</Dialog.Title>
//             <div className="modal-form">
//               {Object.keys(newCourse).map((key) => (
//                 <input
//                   key={key}
//                   name={key}
//                   type={['credits', 'acquiredcredits'].includes(key) ? 'number' : 'text'}
//                   placeholder={key.replace(/([a-z])([A-Z])/g, '$1 $2')}
//                   value={newCourse[key]}
//                   onChange={handleCourseChange}
//                   className="topic-input"
//                 />
//               ))}
//             </div>
//             <div className="modal-buttons">
//               <button onClick={() => setIsCourseModalOpen(false)} className="cancel-btn">Cancel</button>
//               <button onClick={addCourse} className="add-btn">Add</button>
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default TopicDetails;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import axios from 'axios';
import '../assets/css/TopicDetails.css';

const TopicDetails = () => {
  const { topicid } = useParams();

  const [formData, setFormData] = useState({
    rollno: '',
    name: '',
    yearofjoining: '',
    gpa: '',
    overallremarks: '',
    courses: [],
  });

  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    courseid: '',
    coursename: '',
    credits: '',
    acquiredcredits: '',
    gradepercourse: '',
    courseremark: '',
  });

  const [isEditingCourseIndex, setIsEditingCourseIndex] = useState(null); // null for Add, index for Edit

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  const addCourse = () => {
    if (isEditingCourseIndex !== null) {
      // Update existing course
      const updatedCourses = [...formData.courses];
      updatedCourses[isEditingCourseIndex] = newCourse;
      setFormData((prev) => ({ ...prev, courses: updatedCourses }));
      setIsEditingCourseIndex(null);
    } else {
      // Add new course
      setFormData((prev) => ({
        ...prev,
        courses: [...prev.courses, newCourse],
      }));
    }

    setNewCourse({
      courseid: '',
      coursename: '',
      credits: '',
      acquiredcredits: '',
      gradepercourse: '',
      courseremark: '',
    });
    setIsCourseModalOpen(false);
  };

  const editCourse = (index) => {
    setNewCourse(formData.courses[index]);
    setIsEditingCourseIndex(index);
    setIsCourseModalOpen(true);
  };

  const deleteCourse = (index) => {
    const updatedCourses = formData.courses.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, courses: updatedCourses }));
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        topicid: parseInt(topicid),
        yearofjoining: parseInt(formData.yearofjoining),
        gpa: parseFloat(formData.gpa),
      };
      await axios.post('http://localhost:8080/rp/analysis/post', payload);
      alert('Data submitted successfully');
    } catch (err) {
      console.error(err);
      alert('Error submitting data');
    }
  };

  return (
    <div className="topic-container">
      <h2 className="topic-title">Topic ID: {topicid}</h2>

      <div className="topic-form">
        {['rollno', 'name', 'yearofjoining', 'gpa', 'overallremarks'].map((field) => (
          <input
            key={field}
            name={field}
            type={field === 'yearofjoining' || field === 'gpa' ? 'number' : 'text'}
            step={field === 'gpa' ? '0.01' : undefined}
            placeholder={field.replace(/([a-z])([A-Z])/g, '$1 $2')}
            value={formData[field]}
            onChange={handleInputChange}
            className="topic-input"
          />
        ))}
      </div>

      <div className="course-section">
        <h3 className="course-title">Courses</h3>
        <button onClick={() => { setIsCourseModalOpen(true); setIsEditingCourseIndex(null); }} className="add-course-btn">
          + Add Course
        </button>

        {formData.courses.length === 0 ? (
          <p className="no-courses">No courses added yet.</p>
        ) : (
          <table className="course-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Credits</th>
                <th>Acquired</th>
                <th>Grade</th>
                <th>Remark</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {formData.courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.courseid}</td>
                  <td>{course.coursename}</td>
                  <td>{course.credits}</td>
                  <td>{course.acquiredcredits}</td>
                  <td>{course.gradepercourse}</td>
                  <td>{course.courseremark}</td>
                  <td>
                    <button onClick={() => editCourse(index)} className="edit-btn">Edit</button>
                    <button onClick={() => deleteCourse(index)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <button onClick={handleSubmit} className="save-btn">
        Save All
      </button>

      {/* Modal */}
      <Dialog open={isCourseModalOpen} onClose={() => { setIsCourseModalOpen(false); setIsEditingCourseIndex(null); }} className="modal-container">
        <div className="modal-content-wrapper">
          <Dialog.Panel className="modal-panel">
            <Dialog.Title className="modal-title">
              {isEditingCourseIndex !== null ? 'Edit Course' : 'Add Course'}
            </Dialog.Title>
            <div className="modal-form">
              {Object.keys(newCourse).map((key) => (
                <input
                  key={key}
                  name={key}
                  type={['credits', 'acquiredcredits'].includes(key) ? 'number' : 'text'}
                  placeholder={key.replace(/([a-z])([A-Z])/g, '$1 $2')}
                  value={newCourse[key]}
                  onChange={handleCourseChange}
                  className="topic-input"
                />
              ))}
            </div>
            <div className="modal-buttons">
              <button
                onClick={() => {
                  setIsCourseModalOpen(false);
                  setIsEditingCourseIndex(null);
                  setNewCourse({
                    courseid: '',
                    coursename: '',
                    credits: '',
                    acquiredcredits: '',
                    gradepercourse: '',
                    courseremark: '',
                  });
                }}
                className="cancel-btn"
              >
                Cancel
              </button>
              <button onClick={addCourse} className="add-btn">
                {isEditingCourseIndex !== null ? 'Update' : 'Add'}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default TopicDetails;
