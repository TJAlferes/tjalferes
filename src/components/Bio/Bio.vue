<template>
  <div class="bio">
    <h1>Biography</h1>
    <img src="../images/t-j-alferes-with-green-cheeked-conure-des-plaines-illinois-september-19-2018.png">
    <p>
      <span id="name">Timothy James Alferes</span>
      (Evanston, Illinois, 1988) is a
      software developer, artist, and author.
      While working in construction and farming,
      he studied world religions and philosophy with a focus on the works of
      Heraclitus, Parmenides, Socrates/Plato, Diogenes, Jesus, Plotinus,
      Boethius, Eckhart von Hochheim, Shakespeare, Erasmus, Kierkegaard,
      Gautama Siddhartha, Nagarjuna, Shantideva, Bodhidharma, Huineng,
      Yung-chia Hsuan-chueh, Huang Po, Hakuin, Junayd, Hujwiri, Ghazali,
      Suhrawardi, Ibn 'Arabi, Rumi, Nasreddin, Hafez, and Sanai.
      As an artist he first became known for his painting
      <router-link exact to="/oil-paintings/still-life/emptiness">Emptiness</router-link>
      (2014).
      <br><br>
      During 2016, having become partially disabled by a chronic illness,
      he stopped work in construction and farming, and began teaching
      himself computer programming and application development for web and
      IoT.
      He is currently studying economics, computer science, and mathematics,
      composing several still life, landscape, genre, and mythological
      paintings, and writing several books on gardening, cooking, history,
      technology, and philosophy.
    </p>
  </div>
</template>

<script lang="ts">

export default {
  
};

</script>

<style lang="postcss">
.biography {
  width: 300px;
  padding: 20px;
}

.biography a {
  font-style: italic;
}

.biography img {
  float: left;
  margin-top: 10px;
  margin-right: 10px;
}

#name {
  font-weight: 900;
}
</style>