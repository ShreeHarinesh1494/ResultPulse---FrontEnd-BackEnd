// import React, { useState, useRef } from "react";
// import axios from "axios";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const AnalysisViewer = () => {
//   const [rollNo, setRollNo] = useState("");
//   const [name, setName] = useState("");
//   const [analysis, setAnalysis] = useState(null);
//   const [error, setError] = useState("");

//   // Ref for the report div
//   const reportRef = useRef(null);

//   const fetchAnalysis = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/rp/analysis/${rollNo}`);
//       if (response.data.name.toLowerCase() !== name.toLowerCase()) {
//         setError("Name does not match the roll number.");
//         setAnalysis(null);
//         return;
//       }
//       setAnalysis(response.data);
//       setError("");
//     } catch (err) {
//       setError("Student not found or server error.");
//       setAnalysis(null);
//     }
//   };

//   // PDF generation function
//   const downloadPDF = () => {
//     const input = reportRef.current;
//     if (!input) return;

//     html2canvas(input, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save(`ResultAnalysis_${rollNo}.pdf`);
//     });
//   };

//   const COLORS = ["#8884d8", "#8dd1e1", "#82ca9d", "#ffc658", "#ff8042", "#d0ed57"];

//   const totalCredits = analysis
//     ? analysis.courses.reduce((sum, course) => sum + course.credits, 0)
//     : 0;

//   const totalAcquiredCredits = analysis
//     ? analysis.courses.reduce((sum, course) => sum + course.acquiredcredits, 0)
//     : 0;

//   const creditComparisonData = [
//     { name: "Total Credits", value: totalCredits },
//     { name: "Acquired Credits", value: totalAcquiredCredits },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-800 dark:text-white">
//       <h1 className="text-2xl font-bold mb-4">View Your Result Analysis 📊</h1>

//       {/* Input Section */}
//       <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6 space-y-4 max-w-md mx-auto">
//         <input
//           type="text"
//           placeholder="Enter Roll Number"
//           className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
//           value={rollNo}
//           onChange={(e) => setRollNo(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Enter Name"
//           className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <button
//           onClick={fetchAnalysis}
//           className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
//         >
//           Fetch Report
//         </button>
//         {error && <p className="text-red-500">{error}</p>}
//       </div>

//       {/* Report and Charts Section */}
//       {analysis && (
//         <>
//           {/* Add the ref here */}
//           <div ref={reportRef}>
//             <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow max-w-4xl mx-auto">
//               <h2 className="text-xl font-semibold mb-4">Report for {analysis.name}</h2>
//               <table className="w-full table-auto border-collapse border dark:border-gray-600">
//                 <thead>
//                   <tr className="bg-gray-200 dark:bg-gray-700">
//                     <th className="border p-2">Course ID</th>
//                     <th className="border p-2">Course Name</th>
//                     <th className="border p-2">Credits</th>
//                     <th className="border p-2">Acquired Credits</th>
//                     <th className="border p-2">Grade</th>
//                     <th className="border p-2">Course Remark</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {analysis.courses.map((course, index) => (
//                     <tr key={index}>
//                       <td className="border p-2">{course.courseid}</td>
//                       <td className="border p-2">{course.coursename}</td>
//                       <td className="border p-2">{course.credits}</td>
//                       <td className="border p-2">{course.acquiredcredits}</td>
//                       <td className="border p-2">{course.gradepercourse}</td>
//                       <td className="border p-2">{course.courseremark}</td>
//                     </tr>
//                   ))}
//                   <tr className="bg-gray-100 dark:bg-gray-700">
//                     <td colSpan="5" className="border p-2 font-bold text-right">
//                       GPA
//                     </td>
//                     <td className="border p-2 text-green-600 dark:text-green-400 font-semibold">
//                       {analysis.gpa}
//                     </td>
//                   </tr>
//                   <tr className="bg-gray-100 dark:bg-gray-700">
//                     <td colSpan="5" className="border p-2 font-bold text-right">
//                       Overall Remarks
//                     </td>
//                     <td className="border p-2 italic">{analysis.overallremarks}</td>
//                   </tr>
//                 </tbody>
//               </table>

//               {/* Bar Chart Section */}
//               <div className="mt-6">
//                 <h2 className="text-xl font-semibold mb-4">Subject-wise Performance</h2>
//                 <div style={{ width: "100%", height: 300 }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart
//                       data={analysis.courses}
//                       margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis
//                         dataKey="coursename"
//                         interval={0}
//                         angle={-45}
//                         textAnchor="end"
//                         height={60}
//                       />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Bar dataKey="credits" fill="#8884d8" name="Credits" />
//                       <Bar dataKey="acquiredcredits" fill="#82ca9d" name="Acquired Credits" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* Pie Chart for Grade Distribution */}
//               <div className="mt-6">
//                 <h2 className="text-xl font-semibold mb-4">Grade Distribution</h2>
//                 <div style={{ width: "100%", height: 300 }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={analysis.courses.map((course) => ({
//                           name: course.coursename,
//                           value: course.gradepercourse,
//                         }))}
//                         dataKey="value"
//                         nameKey="name"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={100}
//                         label
//                       >
//                         {analysis.courses.map((_, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* Pie Chart for Credit Comparison */}
//               <div className="mt-6">
//                 <h2 className="text-xl font-semibold mb-4">Total Credits vs Acquired Credits</h2>
//                 <div style={{ width: "100%", height: 350 }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={creditComparisonData}
//                         dataKey="value"
//                         nameKey="name"
//                         cx="50%"
//                         cy="50%"
//                         innerRadius={60}
//                         outerRadius={100}
//                         fill="#8884d8"
//                         label
//                       >
//                         {creditComparisonData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                       <Legend />
//                       <Tooltip />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Download PDF Button */}
//           <div className="max-w-4xl mx-auto mt-6 flex justify-end">
//             <button
//               onClick={downloadPDF}
//               className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
//             >
//               Download as PDF
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AnalysisViewer;

import React, { useState, useRef } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "../assets/css/AnalysisViewer.css"; // ✅ Import custom styles

const AnalysisViewer = () => {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState("");
  const reportRef = useRef(null);

  const fetchAnalysis = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/rp/analysis/${rollNo}`);
      if (response.data.name.toLowerCase() !== name.toLowerCase()) {
        setError("Name does not match the roll number.");
        setAnalysis(null);
        return;
      }
      setAnalysis(response.data);
      setError("");
    } catch (err) {
      setError("Student not found or server error.");
      setAnalysis(null);
    }
  };

  const downloadPDF = () => {
    const input = reportRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`ResultAnalysis_${rollNo}.pdf`);
    });
  };

  const COLORS = ["#8884d8", "#8dd1e1", "#82ca9d", "#ffc658", "#ff8042", "#d0ed57"];

  const totalCredits = analysis ? analysis.courses.reduce((sum, c) => sum + c.credits, 0) : 0;
  const totalAcquiredCredits = analysis ? analysis.courses.reduce((sum, c) => sum + c.acquiredcredits, 0) : 0;

  const creditComparisonData = [
    { name: "Total Credits", value: totalCredits },
    { name: "Acquired Credits", value: totalAcquiredCredits },
  ];

  return (
    <div className="analysis-container">
      <h1 className="analysis-title">View Your Result Analysis 📊</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={fetchAnalysis}>Fetch Report</button>
        {error && <p className="error-msg">{error}</p>}
      </div>

      {analysis && (
        <>
          <div ref={reportRef} className="report-container">
            <h2>Report for {analysis.name}</h2>
            <table className="analysis-table">
              <thead>
                <tr>
                  <th>Course ID</th>
                  <th>Course Name</th>
                  <th>Credits</th>
                  <th>Acquired Credits</th>
                  <th>Grade</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                {analysis.courses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.courseid}</td>
                    <td>{course.coursename}</td>
                    <td>{course.credits}</td>
                    <td>{course.acquiredcredits}</td>
                    <td>{course.gradepercourse}</td>
                    <td>{course.courseremark}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5"><strong>GPA</strong></td>
                  <td style={{ color: "#16a34a" }}>{analysis.gpa}</td>
                </tr>
                <tr>
                  <td colSpan="5"><strong>Overall Remarks</strong></td>
                  <td><em>{analysis.overallremarks}</em></td>
                </tr>
              </tbody>
            </table>

            <div className="chart-section">
              <h3 className="chart-title">Subject-wise Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analysis.courses} margin={{ top: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="coursename" angle={-45} interval={0} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="credits" fill="#8884d8" />
                  <Bar dataKey="acquiredcredits" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-section">
              <h3 className="chart-title">Grade Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={analysis.courses.map((c) => ({
                      name: c.coursename,
                      value: c.gradepercourse,
                    }))}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {analysis.courses.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-section">
              <h3 className="chart-title">Total vs Acquired Credits</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={creditComparisonData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={100}
                    label
                  >
                    {creditComparisonData.map((entry, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-end">
            <button className="download-btn" onClick={downloadPDF}>
              Download as PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AnalysisViewer;
