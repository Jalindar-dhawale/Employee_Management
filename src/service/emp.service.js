import axios from "axios";
const BASE_API_URL = "http://localhost:8080/api/v1";

class EmpService{
    saveEmp(emp)
    {
        return axios.post(BASE_API_URL + "/save", emp);
    }
    getAllEmp() {
        return axios.get(BASE_API_URL + "/");
    }

    getEmpById(id) {
        return axios.get(BASE_API_URL + "/" + id);
    }

    deleteEmp(id) {
        return axios.get(BASE_API_URL + "/delete/" + id);
    }

    updateEmp(id, emp) {
        return axios.post(BASE_API_URL + "/update/" + id, emp);
    }
}
export default new EmpService();