import React, { useState } from "react";
import "./Report.css"
import { Data } from "../data/Data";

function Report() {

  console.log(Data)

  const [selectedStudent, setSelectedStudent] = useState(null);

  // Function to handle row click and show full student details
  const handleRowClick = (student) => {
    setSelectedStudent(student);
  };

  // Function to close the details view
  const handleCloseDetails = () => {
    setSelectedStudent(null);
  };
  return (
    <div className="reportContainer p-2">
      <table class="table table-hover table-striped-columns">
        <thead>
          <tr className="table-primary">
            <th scope="col">Sl.No</th>
            <th scope="col">Roll No</th>
            <th scope="col">Name</th>
            <th scope="col">Package (LPA)</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((student, index) => (
            <tr key={index} onClick={() => handleRowClick(student)}>
              <td>{index + 1}</td>
              <td>{student.rollno}</td>
              <td>{student.firstname} {student.lastname}</td>
              <td>{student.package}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* //       Modal for displaying student details */}
      {selectedStudent && (
        <div className="modalBackdrop">
          <div className="modalContent">
            <span className="close" onClick={handleCloseDetails}>&times;</span>
            <br />
            <br />
            <h2>Student Details</h2>
            <p><strong>Name:</strong> {selectedStudent.firstname} {selectedStudent.lastname}</p>
            <p><strong>Roll No:</strong> {selectedStudent.rollno}</p>
            <p><strong>Branch:</strong> {selectedStudent.branch.toUpperCase()}</p>
            <p><strong>Contact No1:</strong> {selectedStudent.mobilenumber1}</p>
            <p><strong>Contact No2:</strong> {selectedStudent.mobilenumber2}</p>
            <p><strong>E-Mail(Personal):</strong> {selectedStudent.personalEmail}</p>
            <p><strong>E-Mail(College):</strong> {selectedStudent.collegeEmail}</p>
            <p><strong>CGPA:</strong> {selectedStudent.cgpa}</p>
            <p><strong>Company:</strong> {selectedStudent.companyPlaced}</p>
            <p><strong>Package (LPA):</strong> {selectedStudent.package}</p>
            <p><strong>Year Joined:</strong> {selectedStudent.yearJoined}</p>
            <p><strong>Year Placed:</strong> {selectedStudent.yearPlaced}</p>
            <p><strong>On/Off Campus:</strong> {selectedStudent.campus}</p>
            <p><strong>Status:</strong> {selectedStudent.status}</p>
            <p><strong>Company Type:</strong> {selectedStudent.companyType}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      )}

    </div>
  )
}

export default Report;



// import React, { useState } from 'react';
// import { Data } from "../data/Data"; // Assuming Data is correctly imported
// import "./Report.css";

// function Report() {
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   // Function to handle row click and show full student details
//   const handleRowClick = (student) => {
//     setSelectedStudent(student);
//   };

//   // Function to close the details view
//   const handleCloseDetails = () => {
//     setSelectedStudent(null);
//   };

//   return (
//     <div className="reportContainer">
//       <table class="table table-hover table-striped-columns">
//         <thead>
//           <tr className="tableHead">
//             <th scope="col">Sl.No</th>
//             <th scope="col">Roll No</th>
//             <th scope="col">Name</th>
//             <th scope="col">Contact No</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Data.map((student, index) => (
//             <tr key={index} onClick={() => handleRowClick(student)}>
//               <td>{index + 1}</td>
//               <td>{student.rollno}</td>
//               <td>{student.firstname} {student.lastname}</td>
//               <td>{student.mobilenumber1}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for displaying student details */}
//       {selectedStudent && (
//         <div className="modalBackdrop">
//           <div className="modalContent">
//             <span className="close" onClick={handleCloseDetails}>&times;</span>
//             <h2>Student Details</h2>
//             <p><strong>Name:</strong> {selectedStudent.firstname} {selectedStudent.lastname}</p>
//             <p><strong>Roll No:</strong> {selectedStudent.rollno}</p>
//             <p><strong>Contact No:</strong> {selectedStudent.mobilenumber1}</p>
//             <p><strong>E-Mail:</strong> {selectedStudent.personalEmail}</p>
//             <p><strong>Company:</strong> {selectedStudent.companyPlaced}</p>
//             <p><strong>Package (LPA):</strong> {selectedStudent.package}</p>
//             <p><strong>Status:</strong> {selectedStudent.status}</p>
//             <p><strong>On/Off Campus:</strong> {selectedStudent.campus}</p>
//             {/* Add more details as needed */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Report;