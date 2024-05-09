import http from "../../shared/services/http-common.js";

export class PatientsApiService{
    getAll(){
        return http.get("/patients");
    }

}