<template>
  <div class="logo-component">
    <img class="logo" src="../../../../assets/img/logo(1).svg" alt=" Quiz logo" />
  </div>
</template>

<script>
export default {};
</script>
 <style scoped>
.logo {
  width: 100px;
  height: 45.7px;
  margin: 23px 45px 0px 0px;
}
.logo-component {
  flex-shrink: 1;
  flex-basis: 50%;
  display: flex;
  justify-content: flex-start;
}

@media screen and (max-width: 900px) {
  .logo {
    width: 80px;
    height: 35px;
    margin: 23px 2px;
  }
}
@media screen and (max-width: 600px) {
  .logo-component {
    display: none;
  }
}
</style>