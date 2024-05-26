import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListStudents from './components/ListStudents';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Student from './components/Student';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <Routes>
\           <Route exact path="/" ListStudents />
            <Route exact path="/studentsList" component={ListStudents} />
            <Route exact path="/addstudent" component={AddStudent} />
            <Route exact path="/viewStudent/:id" component={Student} />
            <Route exact path="/updateStudent/:id" component={UpdateStudent} />
            <Route exact path="/deleteStudent/:id" component={DeleteStudent} />
\         </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
