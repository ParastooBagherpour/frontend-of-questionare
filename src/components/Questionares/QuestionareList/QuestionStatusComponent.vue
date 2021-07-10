<template>
  <div class="status-width">
    <p class="status answer-status">
      وضعیت&nbsp:
      <span class="item active" v-if="status">
        <p>پاسخ داده شده</p>
      </span>
      <span class="item" v-else>
        <p>پاسخ داده نشده</p>
      </span>
    </p>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  props: ["status"],
};
</script>
<style>
.answer-status .item {
  color: #7f86aa;
}
.answer-status .item.active {
  color: #05d667;
}

.status-width {
  width: 25%;
  text-align: right;
}
p {
  display: inline;
}
.status {
  font-family: shabnam;
  font-size: 14px;
  line-height: 2;
  letter-spacing: -0.14px;
  color: #7f86aa;
}
span {
  font-family: shabnam-digit;
  margin-right: 2px;
}
@media screen and (max-width: 900px) {
  .status-width {
    width: 100%;
  }
}
</style>