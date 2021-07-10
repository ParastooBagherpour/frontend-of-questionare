<template>
  <div class="name-width">
    <p class="questionare-name">{{title}}</p>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style>
.name-width {
  width: 40%;
  text-align: right;
}
.questionare-name {
  width: 100%;
  font-family: Shabnam;
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: -0.16px;
  color: #2a3774;
}
@media screen and (max-width: 900px) {
  .name-width {
    width: 100%;
  }
}
@media screen and (max-width: 400px) {
  .questionare-name {
    width: 13px;
  }
}
</style>
