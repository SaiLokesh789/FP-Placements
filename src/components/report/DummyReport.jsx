import { useState } from "react";
import { Data } from "../data/Data";
import "./Report.css"

function Report() {

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
    <div className="reportContainer">
      <table class="table table-stripped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      {/* //       Modal for displaying student details */}
      {selectedStudent && (
        <div className="modalBackdrop">
          <div className="modalContent">
            <span className="close" onClick={handleCloseDetails}>&times;</span>
            <h2>Student Details</h2>
            <p><strong>Name:</strong> {selectedStudent.firstname} {selectedStudent.lastname}</p>
            <p><strong>Roll No:</strong> {selectedStudent.rollno}</p>
            <p><strong>Contact No:</strong> {selectedStudent.mobilenumber1}</p>
            <p><strong>E-Mail:</strong> {selectedStudent.personalEmail}</p>
            <p><strong>Company:</strong> {selectedStudent.companyPlaced}</p>
            <p><strong>Package (LPA):</strong> {selectedStudent.package}</p>
            <p><strong>Status:</strong> {selectedStudent.status}</p>
            <p><strong>On/Off Campus:</strong> {selectedStudent.campus}</p>
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