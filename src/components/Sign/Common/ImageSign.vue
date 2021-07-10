<template>
  <div class="image">
    <div class="topCircle"></div>
    <figure>
      <img src="../../../assets/images/34shndow.png" alt="">
    </figure>
    <div class="bottomCircle"></div>
  </div>
</template>

<script>
export default {
  name: "ImageSign"
}
</script>

<style scoped>
.image {
  height: 100vh;
  position: relative;
}

.image .topCircle {
  width: 200px;
  height: 200px;
  border: solid 15px #edeef5;
  border-radius: 50%;
  position: relative;
  top: 175px;
  right: 40px;
  z-index: -1;
}

.image .bottomCircle {
  width: 108px;
  height: 108px;
  box-shadow: 10px 10px 26px 0 rgba(0, 0, 0, 0.16);
  background-image: linear-gradient(to bottom, #4570f5 5%, #8fa9f6);
  border-radius: 50%;
  position: relative;
  bottom: 120px;
  left: 310px;
}

@media only screen and (max-width: 550px) {
  .image {
    display: none;
  }
}
</style>