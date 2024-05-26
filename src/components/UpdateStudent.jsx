import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class UpdateStudent extends Component {

    constructor(props) {
    
        super(props);
        this.state = {
            id : this.props.match.params.id,
            name :'',
            ayear :'',
        };
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAYearHandler = this.changeAYearHandler.bind(this);
        this.update = this.update.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeIdHandler(event) {
        this.setState({id : event.target.value});
    } 

    changeNameHandler(event){
        this.setState({name : event.target.value});
    }

    changeAYearHandler(event){
        this.setState({ayear : event.target.value});
    }
      
    componentDidMount(){
        StudentService.getStudentsById(this.state.id).then((res)=>
        {
            let student = res.data; 
            this.setState({
                id: student.id,
                name: student.name,
                ayear: student.ayear,
            });
        });
    }

    update = (e) => {
        e.preventDefault();
        let student = {
            id: this.state.id,
            name: this.state.name,
            ayear: this.state.ayear,
        };
        console.log(student);
        StudentService.updateStudent(student.id, student);
        this.props.history.push("/");
    }

    cancel(){
        this.props.history.push("/");
    }
    
    render() {
        return (
            <div className='container'>
                <h1>Update Student Page</h1>
                <div className='row'>
                    <div className='text-center'>
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="id">Student ID</label>
                                        <input type="number" className="form-control" id="id"  placeholder="Enter Student ID"
                                            value={this.state.id} onChange={this.changeIdHandler}/>
                                        <label htmlFor="name">Student Name</label>
                                        <input type="text" className="form-control" id="name"  placeholder="Enter Student Name"
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                        <label htmlFor="ayear">Academic Year</label>
                                        <input type="number" className="form-control" id="ayear"  placeholder="Enter Academic Year"
                                            value={this.state.ayear} onChange={this.changeAYearHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.update}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateStudent;
