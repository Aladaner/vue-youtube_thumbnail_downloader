<template>
  <div>
    <input v-model="data" type="text" />

    <p>{{ idUrl }}</p>
    
    <iframe width="560" height="315" :src="videoUrl" title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>

    <img :src="imgUrl" alt="Any">
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
    }
  }
</script>

<style lang="scss" scoped>

</style>