<template>
  <div class="app">

    <header class="header">
      <div class="header__top">
        <router-link exact to="/home">HOME</router-link>
        <router-link exact to="/bio">BIOGRAPHY</router-link>
        <router-link exact to="/paintings/all">PAINTINGS</router-link>
        <router-link exact to="/webapps">WEB APPS</router-link>
        <router-link exact to="/articles/all">ARTICLES</router-link>
        <!--<router-link exact to="/books">BOOKS</a>-->
        <!--<router-link exact to="/contact">CONTACT</router-link>-->
      </div>
      <div class="header__bottom">
        <div class="logo">
          <span class="website__title">TJALFERES.net</span>
          <span class="website__subtitle">Website of Timothy James Alferes</span>
        </div>
      </div>
    </header>

    <main class="main">
      <router-view class="router-view"></router-view>
    </main>

    <footer class="footer">
      <div id="social-media-links">
        <a href="https://github.com/TJAlferes">
          <img src="/images/github-logo-24px.png" alt="GitHub">
        </a>
        <a href="https://twitter.com/tjalferes">
          <img src="/images/twitter-logo-24px.png" alt="Twitter">
        </a>
        <a href="https://facebook.com/timothyjamesalferes">
          <img src="/images/facebook-logo-24px.png" alt="Facebook">
        </a>
      </div>
    </footer>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log('hi');
  }
});
</script>

<style lang="postcss">

</style>