<template>
  <div>
    <p class="questionare-number">
      ‏
      <span class="span-questionareNum">{{questionareNum}}</span> پرسشنامه
    </p>
  </div>
</template>
<script>
export default {
  props: ["questionareNum"],
};
</script>
<style>
.questionare-number {
  height: 19px;
  font-family: shabnam;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: -0.14px;
  color: #7f86aa;
}
.span-questionareNum {
  font-family: shabnam-digit;
  margin-right: 2px;
}
@media screen and (max-width: 950px) {
  .questionare-number {
    font-size: 13px;
  }
}
@media screen and (max-width: 400px) {
  .questionare-number {
    text-align: right;
  }
}
</style>