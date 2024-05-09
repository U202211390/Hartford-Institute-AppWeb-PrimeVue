<script>
import MentalStateExamAnalyticsManagement from "/src/public/pages/MentalStateExamAnalyticsManagement.vue";
export default {
  name: "home",
  components: { MentalStateExamAnalyticsManagement },
}
</script>

<template>
  <div>
    <h1>{{$t('home.title')}}</h1>
    <p>{{$t('home.content')}}</p>
    <mental-state-exam-analytics-management/>
    <div>
      <!--<p>{{$t('hero-section-phrase')}}</p>-->
    </div>
  </div>
</template>

<style scoped>

</style>