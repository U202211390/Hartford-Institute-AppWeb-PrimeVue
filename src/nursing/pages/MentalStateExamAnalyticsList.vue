<template>
  <div>
    <mental-state-exam-analytics-card
      v-for="exam in exams"
      :key="exam.id"
      :exam="exam"
      :indicators="exam.indicators"
      title="Your Title Here"
      subtitle="Your Subtitle Here"
    />
  </div>
</template>
<script>
import MentalStateExamAnalyticsCard from '../components/MentalStateExamAnalyticsCard.vue';

export default {
  name: 'MentalStateExamAnalyticsList',
  components: {
    MentalStateExamAnalyticsCard
  },
  props: {
    exams: {
      type: Array,
      required: true
    }
  }
};
</script>