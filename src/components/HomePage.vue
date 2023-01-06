<template>
  <div class="body">
    <h2>Youtube Thumbnail Downloader</h2>
    <details>
      <summary>How To?</summary>
      <h4>1. Click "Share" below the video.</h4>
      <img src="../assets/howTo/1.png" alt="">
      <h4>2. Click "Copy".</h4>
      <img src="../assets/howTo/2.png" alt="">
      <h4>3. Paste link at input field.</h4>
    </details>
    <div class="info">
      <input v-model="data" type="text" placeholder="Paste link" required />

      <p><b>Video ID:</b> {{ idUrl }}</p>
    </div>

    <div class="result">
      <iframe :src="videoUrl" title="YouTube video player" frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

      <img :src="imgUrl">
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      data: "",
    }
  },
  computed: {
    imgUrl() {
      return "https://img.youtube.com/vi/" + this.idUrl + "/maxresdefault.jpg"
    },

    videoUrl() {
      return "https://www.youtube.com/embed/" + this.idUrl
    },
    idUrl() {
      return this.data.replace("https://youtu.be/", '')
    }
  },
}
</script>

<style lang="scss" scoped>
.info {
  margin-top: 20px;

  input {
    width: 300px;
    line-height: 30px;
    text-align: center;
  }
}

.result {
  display: flex;
  flex-direction: column;
  align-items: center;

  iframe {
    margin-bottom: 20px;
    width: 560px;
    height: 315px;
    border: 2px solid gray;
  }

  img {
    border: 2px solid gray;
  }
}
</style>