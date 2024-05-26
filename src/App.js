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
            <Route exact path="/" element={<ListStudents/>} />
            <Route exact path="/studentsList" element={<ListStudents/>} />
            <Route exact path="/addStudent" element={<AddStudent/>} />
            <Route exact path="/viewStudent/:id" element={<Student/>} />
            <Route exact path="/updateStudent/:id" element={<UpdateStudent/>} />
            <Route exact path="/deleteStudent/:id" element={<DeleteStudent/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
