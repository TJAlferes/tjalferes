<template>
  <div class="articles">

    <h1>Articles</h1>

    <div class="topic"><router-link exact to="/articles/philosophy">
      <span class="topic__image"><img :src="S3URL + '/philosophy/philosophy-100'"></span>
      <span class="topic__title">Philosophy</span>
    </router-link></div>

    <div class="topic"><router-link exact to="/articles/mathematics">
      <span class="topic__image"><img :src="S3URL + '/mathematics/mathematics-100'"></span>
      <span class="topic__title">Mathematics</span>
    </router-link></div>

    <div class="topic"><router-link exact to="/articles/computing">
      <span class="topic__image"><img :src="S3URL + '/web/web-100'"></span>
      <span class="topic__title">Computing</span>
    </router-link></div>

    <div class="topic"><router-link exact to="/articles/music">
      <span class="topic__image"><img :src="S3URL + '/art/art-100'"></span>
      <span class="topic__title">Music</span>
    </router-link></div>

    <div class="topic"><router-link exact to="/articles/painting">
      <span class="topic__image"><img :src="S3URL + '/art/art-100'"></span>
      <span class="topic__title">Painting</span>
    </router-link></div>

    <div class="topic"><router-link exact to="/articles/gardening">
      <span class="topic__image"><img :src="S3URL + '/garden/garden-100'"></span>
      <span class="topic__title">Gardening</span>
    </router-link></div>

  </div>
</template>

<script lang="ts">

export default {
  data: function () {
    return {
      S3URL: 'https://s3.amazon.com/tjalferes/images/articles'
    };
  }
};

</script>

<style lang="postcss">
.articles {
  width: 300px;
  padding: 20px;
}

.topic a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  height: 112px;
  margin: 0 auto 10px auto;
  border: 1px solid #fff;
  padding: 5px;
  background-color: #fff;
}
.topic a:hover,
.topic a:active {
  border-color: #aaa;
  cursor: pointer;
  cursor: hand;
}
.topic__image,
.topic__title {
  display: block;
  width: 100px;
  height: max-content;
}
</style>