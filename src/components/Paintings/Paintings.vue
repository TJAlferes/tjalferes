<template>
  <div class="paintings">
    <h1>Paintings</h1>
    <p><router-link exact to="/paitings/myth">Myth</router-link></p>
    <p><router-link exact to="/paitings/genre">Genre</router-link></p>
    <p><router-link exact to="/paitings/landscape">Landscape</router-link></p>
    <p><router-link exact to="/paitings/still-life">Still Life</router-link></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    category: String
  },
  setup({ category }) {
    console.log(category);
  }
});
</script>

<style lang="postcss">
.paintings {
  width: 320px;
  padding: 20px;
}
</style>