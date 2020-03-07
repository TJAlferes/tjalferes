<template>
  <div class="oil-paintings">
    <h1>Paintings</h1>
    <p><router-link exact to="/oil-paitings/myth">Myth</router-link></p>
    <p><router-link exact to="/oil-paitings/genre">Genre</router-link></p>
    <p><router-link exact to="/oil-paitings/landscape">Landscape</router-link></p>
    <p><router-link exact to="/oil-paitings/still-life">Still Life</router-link></p>
  </div>
</template>

<script lang="ts">

</script>

<style lang="postcss">
.oil-paintings {
  width: 320px;
  padding: 20px;
}
</style>