<template>
  <div>
    <h1>{{ $t('Examiner.title') }}</h1>
    <div class="row">
      <div class="col-md-6" v-for="examiner in examiners" :key="examiner.id">
        <examiner-performance-card
          :examiner="examiners.find(e => e.id === examiner.id)"
          :indicators="calculateIndicators(examiner.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ExaminerPerformanceCard from '../components/ExaminerPerformanceCard.vue';
import { ExaminersApiService } from '../services/examiners-api.services.js';
import { MentalStateExamsApiService } from '../services/mental-state-exams-api.services.js';

export default {
  name: 'ExaminerPerformanceOverview',
  components: {
    ExaminerPerformanceCard
  },
  data() {
    return {
      examiners: [],
      exams: []
    };
  },
 async created() {
  const examinerService = new ExaminersApiService();
  try {
    const response = await examinerService.getAll();
    if (Array.isArray(response)) {
      this.examiners = response;
    } else {
      console.error('Error: la respuesta de la API no es un array');
    }
  } catch (error) {
    console.error('Error al obtener los examinadores:', error);
  }

  const examService = new MentalStateExamsApiService();
  try {
    const response = await examService.getAll();
    if (Array.isArray(response)) {
      this.exams = response;
    } else {
      console.error('Error: la respuesta de la API no es un array');
    }
  } catch (error) {
    console.error('Error al obtener los exámenes:', error);
  }
},
  methods: {
  calculateIndicators(examinerId) {
    const assignedExams = this.exams.filter(exam => exam.examinerId === examinerId);
    const assignedExamCount = assignedExams.length;
    let totalScore = 0;
    assignedExams.forEach(exam => {
      const totalExamScore = exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore;
      totalScore += totalExamScore;
    });
    const averageAssignedExamScore = totalScore / assignedExamCount;
    return {
      assignedExamCount,
      averageAssignedExamScore
    };
  }
}
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-md-6 {
  flex: 0 0 auto;
  width: 50%;
}
</style>