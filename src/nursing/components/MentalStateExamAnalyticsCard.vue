<template>
  <div>
    <h2>{{ $t('home.title2') }}</h2>
    <p>{{ $t('home.subtitle1') }}</p>
    <div>Exam Count: {{ indicators.examCount }}</div>
    <div>Highest Score: {{ indicators.highestScore }}</div>
    <div>Lowest Score: {{ indicators.lowestScore }}</div>
    <div>Average Score: {{ indicators.averageScore }}</div>
  </div>
</template>

<script>
export default {
  name: 'MentalStateExamAnalyticsCard',
  props: {
    indicators: {
      type: Object,
      required: true
    }
  }
};
</script>