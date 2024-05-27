import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

const AddStudent = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [ayear, setAyear] = useState('');

  const changeIdHandler = (event) => {
    setId(event.target.value);
  };

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const changeAYearHandler = (event) => {
    setAyear(event.target.value);
  };

  const save = (e) => {
    e.preventDefault();
    const student = { id, name, ayear };
    console.log(student);
    StudentService.insertStudent(student);
    navigate("/");
  };

  const cancel = () => {
    navigate("/");
  };

  return (
    <div className='container'>
      <h1>Add Student Page</h1>
      <div className='row'>
        <div className='text-center'>
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="id">Student ID</label>
                  <input type="number" className="form-control" id="id" placeholder="Enter Student ID"
                    value={id} onChange={changeIdHandler} required
                  />
                  <label htmlFor="name">Student Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter Student Name"
                    value={name} onChange={changeNameHandler} required
                  />
                  <label htmlFor="ayear">Academic Year</label>
                  <input type="number" className="form-control" id="ayear" placeholder="Enter Academic Year"
                    value={ayear} onChange={changeAYearHandler} required
                  />
                </div>
                <button className="btn btn-success" onClick={save}>Save</button>
                <button className="btn btn-danger" onClick={cancel}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
