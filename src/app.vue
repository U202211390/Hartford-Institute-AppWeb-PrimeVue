<script>
import LanguageSwitcher from "./public/components/language-switcher.component.vue";

export default {
  name: "app",
  components: {LanguageSwitcher},
  data() {
    return {
      items: [
        {label: 'Home', to: '/home'},
        {label: 'Examiner Performance Overview', to:'/nursing/examiner-performance-overview'}
      ]
    }
  }
}
</script>

<template>
  <header>
    <pv-toolbar  class="fixed-toolbar pv-toolbar bg-primary" style=" padding: 1rem 1rem 1rem 1.5rem" fixed>
      <template #start>
        <img src="https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png" alt="HIGN Logo" style="height: 2rem; width: auto;">
        <span>Hartford Institute for Geriatric Nursing</span>
      </template>
      <template #end>
        <language-switcher/>
        <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="p-button-text text-white" @click="navigate">
            {{ item.label }}
          </pv-button>
        </router-link>
      </template>
    </pv-toolbar>
  </header>

  <router-view></router-view>
</template>

<style scoped>
.fixed-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}

.pv-toolbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.pv-toolbar img {
  filter: brightness(0) invert(1);
}

.pv-toolbar span {
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
}

.p-button-text {
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 50px;
  padding: 0.5rem 2rem;
  transition: background-color 0.3s ease;
}

.p-button-text:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>