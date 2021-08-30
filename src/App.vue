<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  @Watch('$route')
  handleRouteChange() {
    window.scrollTo(0, 0);
  }
}
</script>

<style>
.style-chooser .vs__dropdown-toggle {
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.05);
  /* height: 37px; */
  height: calc(1.5em + 0.75rem + 2px);
  /* height: 4000px; */
}

.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  /* background: #dfe5fb; */
  border: 1px solid rgba(0, 0, 0, 0.05);
  /* height: 37px; */
  /* color: #394066; */
  /* text-transform: lowercase; */
  /* font-variant: small-caps; */
}
</style>
