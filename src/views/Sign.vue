<template>
  <div class="main">
    <ImageSign></ImageSign>
    <ContentSign></ContentSign>
  </div>
</template>

<script>
import ImageSign from '../components/Sign/Common/ImageSign';
import ContentSign from '../components/Sign/Common/ContentSign/ContentSign';

export default {
  name: "Sign",
  components: {
    ImageSign,
    ContentSign
  }
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@media only screen and (max-width: 1150px) {
  .main {
    width: 90%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
  }
}

@media only screen and (max-width: 500px) {
  .main {
    width: 90%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
    padding: 10px;
  }
}
</style>