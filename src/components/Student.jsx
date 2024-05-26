import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class Student extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            students: {}
        };
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        StudentService.getStudentsById(this.state.id).then(
            response => { this.setState({ students: response.data }); }
        );
    }

    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='container'>
                <h1>View Student Page</h1>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <label>Student ID</label>
                            <div>{this.state.students.id}</div>
                        </div>
                        <div className='row'>
                            <label>Student Name</label>
                            <div>{this.state.students.name}</div>
                        </div>
                        <div className='row'>
                            <label>Academic Year</label>
                            <div>{this.state.students.ayear}</div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-danger" onClick={this.cancel}>cancel</button>
            </div>
        );
    }
}

export default Student;
