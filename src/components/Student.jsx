import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { store } from './Details'


const Student = () => {
  const [student] = useContext(store);
    return ( <>

    <h1>Student Details</h1>

        <div className='tab'>
        <table class="table table-hover">
        <thead>
        <br />
       
        <Link to="/AddStudent">
    <button className='btn'>Add Students</button>
    </Link>
        

        <tr>
          <th scope="col">NAME</th>
          <th scope="col">AGE</th>
          <th scope="col">COURSE</th>
          <th scope="col">BATCH</th>
          <th scope="col">CHANGE</th>
        </tr>
      </thead>
      <tbody>
        {student.map((student) => (
          <tr key={student.id}>
            <td>{student.Name}</td>
            <td>{student.Age}</td>
            <td>{student.Course}</td>
            <td>{student.Batch}</td>
            <td>
              <Link to={`/Edit/${student.id}`}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
</div>


</>

     );
}
 
export default Student;