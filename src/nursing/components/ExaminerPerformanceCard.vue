<template>
  <div>
    <h2>{{ examiner.firstName }} {{ examiner.lastName }}</h2>
    <h3>NPI: {{ examiner.nationalProviderIdentifier }}</h3>
    <p>{{ $t('Examiner.paragraph') }}</p>
    <div>{{ $t('Examiner.paragraph2') }} {{ indicators.assignedExamCount }}</div>
    <div>{{ $t('Examiner.paragraph3') }} {{ indicators.averageAssignedExamScore }}</div>
  </div>
</template>

<script>
export default {
  name: 'ExaminerPerformanceCard',
  props: {
    examiner: {
      type: Object,
      required: true
    },
    indicators: {
      type: Object,
      required: true
    }
  }
};
</script>