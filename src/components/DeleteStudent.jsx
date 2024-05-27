import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';

const DeleteStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    StudentService.getStudentById(id).then(response => {
      setStudent(response.data);
    });
  }, [id]);

  const deleteHandler = () => {
    StudentService.deleteStudentById(id).then(() => {
      // Redirect to a different page after deletion
      window.location.href = '/'; // Redirect to the students page
    }).catch(error => {
      console.error('Error deleting student:', error);
    });
  };

  return (
    <div>
      <h2>Delete Student</h2>
      <div>
        <strong>ID:</strong> {student.id}
      </div>
      <div>
        <strong>Name:</strong> {student.name}
      </div>
      <div>
        <strong>Academic Year:</strong> {student.ayear}
      </div>
      <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default DeleteStudent;
