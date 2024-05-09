<script>
import MentalStateExamAnalyticsCard from '../../nursing/components/MentalStateExamAnalyticsCard.vue';
import { MentalStateExamsApiService } from '../../nursing/services/mental-state-exams-api.services.js';

export default {
  name: 'MentalStateExamAnalyticsManagement',
  title : 'Examiner Performance Overview',
  components: {
    MentalStateExamAnalyticsCard
  },
  data() {
    return {
      indicators: {
        examCount: 0,
        highestScore: 0,
        lowestScore: 0,
        averageScore: 0
      }
    };
  },
  async created() {
  const examService = new MentalStateExamsApiService();
  const exams = await examService.getAll();
  this.indicators.examCount = exams.length;
  let totalScore = 0;
  exams.forEach(exam => {
    const totalExamScore = exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore;
    if (!isNaN(totalExamScore)) {
      totalScore += totalExamScore;
      if (totalExamScore > this.indicators.highestScore) {
        this.indicators.highestScore = totalExamScore;
      }
      if (totalExamScore < this.indicators.lowestScore || this.indicators.lowestScore === 0) {
        this.indicators.lowestScore = totalExamScore;
      }
    }
  });
  this.indicators.averageScore = totalScore / this.indicators.examCount;
}
};
</script>

<template>
  <mental-state-exam-analytics-card
    :indicators="indicators"
  />
</template>