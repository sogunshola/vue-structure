<template>
  <div @click="isLoading === false && $emit('click')">
    <button :class="css" :disabled="isLoading" type="button">
      <slot v-if="!isLoading"></slot>
      <span style="visibility: hidden;" v-else>.</span>
    </button>
    <loading
      v-if="isLoading"
      :active="true"
      spinner="spinner"
      color="#fff"
      background-color="transparent"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ButtonComponent extends Vue {
  @Prop() public readonly isLoading!: boolean;
  @Prop() public readonly css!: string;
  // @Prop() private readonly disabled!: boolean;
}
</script>

<style scoped></style>
