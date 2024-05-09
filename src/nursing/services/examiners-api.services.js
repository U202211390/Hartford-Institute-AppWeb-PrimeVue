import http from "../../shared/services/http-common.js";

export class ExaminersApiService{
    async getAll(){
        const response = await http.get("/examiners");
        if (Array.isArray(response.data)) {
            return response.data;
        } else {
            console.error('Error: la respuesta de la API no es un array');
            return [];
        }
    }
}