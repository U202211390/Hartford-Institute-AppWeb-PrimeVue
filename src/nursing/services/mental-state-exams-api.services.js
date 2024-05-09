import http from "../../shared/services/http-common.js";

export class MentalStateExamsApiService{
    async getAll(){
        const response = await http.get("/mental-state-exams");
        return response.data;
    }

    calculateTotalScore(exam) {
        const totalScore = exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore;
        return {...exam, totalScore};
    }

}