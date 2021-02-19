<template>
  <span class="small text-danger" v-show="data.has(name)">{{data.first(name)}}</span>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from "vue-property-decorator";

@Component
export default class ValidationError extends Vue {
  @Prop() private data: any;
  @Prop() private name: any;
}
</script>

<style scoped>
</style>