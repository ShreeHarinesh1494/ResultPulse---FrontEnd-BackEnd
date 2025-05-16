import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import OtpPage from './pages/OtpPage';
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';
import Department from './pages/Department';
import Topic from './pages/Topic';
import TopicDetails from './pages/TopicDetails';
import Sem from './pages/Sem';
import Course from './pages/Course';
import StudentLogin from './pages/StudentLogin';
import StudentDashboard from './pages/StudentDashaboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify-otp" element={<OtpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/student" element={<Student />} />
      <Route path="/department" element={<Department />} />
      <Route path="/topic" element={<Topic />} />
      <Route path="/details/:topicid" element={<TopicDetails />} />
      <Route path="/sem" element={<Sem />} />
      <Route path="/course" element={<Course />} />
      <Route path="/student-login" element={<StudentLogin />} /> 
      <Route path="//student-dashboard" element={<StudentDashboard />} /> 
    </Routes>
  );
}

export default App;