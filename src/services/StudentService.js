import axios from "axios";

const BASE_API = "http://localhost:9000/api/students";

class StudentService {

   getStudents() {
    return axios.get(BASE_API + "/all");
   }

   insertStudent(student) {
      return axios.post(BASE_API + "/insert", student);
     }

     getStudentById(id) {
      return axios.get(BASE_API + "/find/" + id);
     }

     updateStudent(id, student) {
      return axios.put(BASE_API + "/update/" + id, student);
     }

     deleteStudentById(id) {
      return axios.delete(BASE_API + "/delete/" + id);
     }
}

const studentServiceInstance = new StudentService();
export default studentServiceInstance;
