<template>
  <div class="web-apps">
    <h1>Sites</h1>
    <div class="site">
      <a href="https://nobullshitcooking.com">
        <img
          :src="S3URL + '/nobsc-logo-small'"
          alt="nobullshitcooking.com"
        >
      </a>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  data: function () {
    return {
      S3URL: 'https://s3.amazon.com/tjalferes/images/web-apps'
    };
  }
};

</script>

<style lang="postcss">
.web-apps {
  width: 1200px;
  padding: 20px;
}
.web-apps h1 {
  margin-bottom: 8px;
}
.site,
.site a,
.site a img {
  width: 100%;
}

/* mobile */
@media (max-width: 599px) {
  .web-apps {
    width: 320px;
  }
  .site a img {
    width: 280px;
  }
}

/* tablet (portrait) */
@media (min-width: 600px) {
  .web-apps {
    width: 560px;
  }
  .site a img {
    width: 448px;
  }
}

/* tablet (landscape)*/
@media (min-width: 900px) {
  .web-apps {
    width: 560px;
  }
  .site a img {
    width: 448px;
  }
}

/* desktop */
@media (min-width: 1200px) {
  .web-apps {
    width: 1200px;
  }
  .site a img {
    width: 448px;
  }
}
</style>