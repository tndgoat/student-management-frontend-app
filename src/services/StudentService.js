import axios from "axios";

const BASE_API = "https://studentmanagementbackendapp-production.up.railway.app";

class StudentService {

   getStudents() {
      return axios.get(BASE_API + "/all");
   }

   checkStudentIdExists(id) {
      return axios.get(BASE_API + "/exists/" + id);
   }

   insertStudent(student) {
      return axios.post(BASE_API + "/insert", student);
   }

   getStudentById(id) {
      return axios.get(BASE_API + "/find/" + id);
   }

   deleteStudentById(id) {
      return axios.delete(BASE_API + "/delete/" + id);
   }
}

const studentServiceInstance = new StudentService();
export default studentServiceInstance;
