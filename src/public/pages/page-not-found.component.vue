<script>
export default {
  name: "page-not-found"
}
</script>

<template>
  <div>
    <h1>{{$t('page-not-found.title')}}</h1>
    <p>{{$t('page-not-found.content-1')}}"{{ $route.fullPath }}" {{$t('page-not-found.content-2')}}</p>
    <router-link to="/home">
      <pv-button>{{$t('page-not-found.button-text')}}</pv-button>
    </router-link>
  </div>
</template>

<style scoped>

</style>