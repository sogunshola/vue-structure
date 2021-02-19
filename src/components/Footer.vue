<template>
  <div class="footerbar">
      <footer class="footer">
          <p class="mb-0">© 2021 BriefBox - All Rights Reserved.</p>
      </footer>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
// import { LoadJs } from '../utils/functions';

  @Component
  export default class Footer extends Vue {
    private created() {
      // LoadJs()
    }
  }
</script>

<style scoped>

</style>