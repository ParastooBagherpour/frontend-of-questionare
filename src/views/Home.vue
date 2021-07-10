<template>
  <div class="home">
    <QuestionPageComponent></QuestionPageComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionPageComponent from '@/components/QuestionPageComponent'
import axios from "axios"

export default {
  name: 'Home',
  components: {
    QuestionPageComponent,
  },
}

</script>
<style scoped>
.home{
  height: 100vh;
}
</style>
