import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentService from '../services/StudentService';
import { Navbar, Form, Button, Row, Col } from 'react-bootstrap';

const ListStudents = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    StudentService.getStudents().then(response => {
      setStudents(response.data);
    });
  }, []);

  const addStudent = () => {
    navigate('/addStudent');
  };

  const findStudent = (id) => {
    navigate(`/findStudent/${id}`);
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const deleteStudent = (id) => {
    navigate(`/deleteStudent/${id}`);
  };

  return (
    <div>
      <h1 className='text-center'>List Of Students Page</h1>

      <Navbar className="bg-body-tertiary justify-content-between">
        <Form inline>
          <button className='btn btn-primary' onClick={addStudent}>Add Student</button>
        </Form>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                value={searchInput}
                onChange={handleInputChange}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" onClick={() => findStudent(searchInput)}>Submit</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Student Name</th>
            <th scope="col">Academic Year</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => 
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.ayear}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudents;
