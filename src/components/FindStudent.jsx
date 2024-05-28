import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';

const FindStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    StudentService.getStudentById(id).then(response => {
      setStudent(response.data);
    });
  }, [id]);

  return (
    <div>
      <h2>Find Student</h2>
      <div>
        <strong>ID:</strong> {student.id}
      </div>
      <div>
        <strong>Name:</strong> {student.name}
      </div>
      <div>
        <strong>Academic Year:</strong> {student.ayear}
      </div>
    </div>
  );
};

export default FindStudent;
