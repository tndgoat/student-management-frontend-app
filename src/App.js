import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListStudents from './components/ListStudents';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<ListStudents />} />
            <Route path="/studentsList" element={<ListStudents/>} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/deleteStudent/:id" element={<DeleteStudent />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
