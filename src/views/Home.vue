<template>
  <div class="home">
    <h1>Home Page</h1>
    <div class="video-container">
      <div v-for="video in videos" :key="video.id">
        <router-link :to="{ name: 'video-watch', params: { id: video.id }}">
          <div class="video-box">
            <img :src="video.thumbnail" alt="">
            <div class="description">
              <h3>{{ video.name }}</h3>
              <div v-html="video.description" ></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is  an alias to /src
  export default {
    name: "Home",
    components: {},
    computed: {
      videos() {
        return this.$store.state.videos
      }
    },
  };
</script>

<style scoped>
  .video-box {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
  }

  .video-box .description {
    text-align: left;
  }

  .video-box img {
    width: 200px;
    padding: 10px;
  }
</style>
