import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentService from '../services/StudentService';

class ListStudents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: []
    };

    this.addStudent = this.addStudent.bind(this);
  }
  
  componentDidMount() {
    StudentService.getStudents().then(response => {
      this.setState({ students: response.data });
    });
  }

  addStudent() {
    this.props.history.push('/addstudent');
  }

  view(id) {
    this.props.history.push(`/viewStudent/${id}`);
  }

  delete(id) {
    this.props.history.push(`/deleteStudent/${id}`);
  }

  update(id) {
    this.props.history.push(`/updateStudent/${id}`);
  }
  
  render() {
    return (
      <div>
        <h1 className='text-center'>List Of Students Page</h1>
        <button className='btn btn-primary' onClick={this.addStudent}>Add Student</button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Academic Year</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map(student => 
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.ayear}</td>
                <td>
                  <button className="btn btn-info" onClick={() => this.view(student.id)}>View</button>
                  <button className="btn btn-danger" onClick={() => this.delete(student.id)}>Delete</button>
                  <button className="btn btn-success" onClick={() => this.update(student.id)}>Update</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListStudents;
