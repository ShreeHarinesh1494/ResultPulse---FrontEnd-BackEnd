// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Dialog } from '@headlessui/react';
// import { useNavigate } from 'react-router-dom';

// const Topic = () => {
//   const [topics, setTopics] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isUpdate, setIsUpdate] = useState(false);
//   const [currentTopic, setCurrentTopic] = useState({ topicname: '', topicid: null });

//   const adminid = localStorage.getItem('adminId');
//   const navigate = useNavigate();

//   const fetchTopics = async () => {
//     try {
//       const res = await axios.get('http://localhost:8080/rp/admin/topic/all');
//       setTopics(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchTopics();
//   }, []);

//   const handleCreateOrUpdate = async () => {
//     if (!currentTopic.topicname.trim()) return alert("Topic name is required");

//     try {
//       if (isUpdate) {
//         await axios.put(`http://localhost:8080/rp/admin/topic/${currentTopic.topicid}`, {
//           topicname: currentTopic.topicname,
//           adminid: parseInt(adminid)
//         });
//         alert("Topic Updated");
//       } else {
//         await axios.post('http://localhost:8080/rp/admin/topic/creation', {
//           topicname: currentTopic.topicname,
//           adminid: parseInt(adminid)
//         });
//         alert("Topic Created");
//       }
//       setIsOpen(false);
//       fetchTopics();
//     } catch (err) {
//       console.error(err);
//       alert("Error performing operation");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure to delete this topic?")) {
//       try {
//         await axios.delete(`http://localhost:8080/rp/admin/topic/${id}`);
//         alert("Topic Deleted");
//         fetchTopics();
//       } catch (err) {
//         console.error(err);
//         alert("Error deleting topic");
//       }
//     }
//   };

//   const openDialog = (topic = { topicname: '', topicid: null }) => {
//     setCurrentTopic(topic);
//     setIsUpdate(!!topic.topicid);
//     setIsOpen(true);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Dashboard</h1>
//         <div className="space-x-3">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => openDialog()}
//           >
//             + Create Topic
//           </button>
//           <button
//             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       <div className="space-y-4">
//         {topics.length === 0 ? (
//           <p>No topics found.</p>
//         ) : (
//           topics.map((topic) => (
//             <div
//               key={topic.topicid}
//               className="p-4 rounded shadow bg-white dark:bg-gray-800 flex justify-between items-center"
//             >
//               <div>
//                 <p><strong>Topic:</strong> {topic.topicname}</p>
//                 <p><strong>Created At:</strong> {topic.creationdate?.split('T')[0]}</p>
//               </div>
//               <div className="space-x-2">
//                 <button
//     className="px-3 py-1 bg-green-600 text-white rounded"
//     onClick={() => navigate(`/details/${topic.topicid}`)}
//   >
//     View
//   </button>
//                 <button
//                   className="px-3 py-1 bg-yellow-500 text-white rounded"
//                   onClick={() => openDialog(topic)}
//                 >
//                   Update
//                 </button>
//                 <button
//                   className="px-3 py-1 bg-red-600 text-white rounded"
//                   onClick={() => handleDelete(topic.topicid)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
//         <div className="flex items-center justify-center min-h-screen px-4">
//           <Dialog.Panel className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-xl">
//             <Dialog.Title className="text-lg font-medium">
//               {isUpdate ? 'Update Topic' : 'Create Topic'}
//             </Dialog.Title>
//             <div className="mt-4">
//               <label className="block mb-2">Topic Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
//                 value={currentTopic.topicname}
//                 onChange={(e) => setCurrentTopic({ ...currentTopic, topicname: e.target.value })}
//               />
//             </div>
//             <div className="mt-6 flex justify-end space-x-2">
//               <button
//                 className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 onClick={handleCreateOrUpdate}
//               >
//                 {isUpdate ? 'Save' : 'Create'}
//               </button>
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default Topic;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dialog } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Topic.css';

const Topic = () => {
  const [topics, setTopics] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentTopic, setCurrentTopic] = useState({ topicname: '', topicid: null });

  const adminid = localStorage.getItem('adminId');
  const navigate = useNavigate();

  const fetchTopics = async () => {
    try {
      const res = await axios.get('http://localhost:8080/rp/admin/topic/all');
      setTopics(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  const handleCreateOrUpdate = async () => {
    if (!currentTopic.topicname.trim()) return alert("Topic name is required");

    try {
      if (isUpdate) {
        await axios.put(`http://localhost:8080/rp/admin/topic/${currentTopic.topicid}`, {
          topicname: currentTopic.topicname,
          adminid: parseInt(adminid)
        });
        alert("Topic Updated");
      } else {
        await axios.post('http://localhost:8080/rp/admin/topic/creation', {
          topicname: currentTopic.topicname,
          adminid: parseInt(adminid)
        });
        alert("Topic Created");
      }
      setIsOpen(false);
      fetchTopics();
    } catch (err) {
      console.error(err);
      alert("Error performing operation");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this topic?")) {
      try {
        await axios.delete(`http://localhost:8080/rp/admin/topic/${id}`);
        alert("Topic Deleted");
        fetchTopics();
      } catch (err) {
        console.error(err);
        alert("Error deleting topic");
      }
    }
  };

  const openDialog = (topic = { topicname: '', topicid: null }) => {
    setCurrentTopic(topic);
    setIsUpdate(!!topic.topicid);
    setIsOpen(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="topic-container">
      <div className="topic-header">
        <h1 className="topic-title">Dashboard</h1>
        <div className="topic-actions">
          <button className="btn create-btn" onClick={() => openDialog()}>
            + Create Topic
          </button>
          <button className="btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="topic-list">
        {topics.length === 0 ? (
          <p>No topics found.</p>
        ) : (
          topics.map((topic) => (
            <div key={topic.topicid} className="topic-card">
              <div className="topic-info">
                <p><strong>Topic:</strong> {topic.topicname}</p>
                <p><strong>Created At:</strong> {topic.creationdate?.split('T')[0]}</p>
              </div>
              <div className="topic-buttons">
                <button
                  className="btn view-btn"
                  onClick={() => navigate(`/details/${topic.topicid}`)}
                >
                  View
                </button>
                <button
                  className="btn update-btn"
                  onClick={() => openDialog(topic)}
                >
                  Update
                </button>
                <button
                  className="btn delete-btn"
                  onClick={() => handleDelete(topic.topicid)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dialog-wrapper">
        <div className="dialog-backdrop">
          <Dialog.Panel className="dialog-panel">
            <Dialog.Title className="dialog-title">
              {isUpdate ? 'Update Topic' : 'Create Topic'}
            </Dialog.Title>
            <div className="dialog-body">
              <label className="input-label">Topic Name</label>
              <input
                type="text"
                className="input-field"
                value={currentTopic.topicname}
                onChange={(e) => setCurrentTopic({ ...currentTopic, topicname: e.target.value })}
              />
            </div>
            <div className="dialog-actions">
              <button
                className="btn cancel-btn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="btn save-btn"
                onClick={handleCreateOrUpdate}
              >
                {isUpdate ? 'Save' : 'Create'}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Topic;
