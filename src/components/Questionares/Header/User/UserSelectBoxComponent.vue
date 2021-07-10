<template>
  <div class="user-select-box">
    <div class="select-box__current" tabindex="1">
      <div class="select-box__value">
        <input class="select-box__input" type="radio" id="8" value="5" checked="checked" />
      </div>
      <img
        class="select-box-user__icon"
        src="../../../../assets/img/arrow(4)@2x.png"
        alt="Arrow Icon"
        aria-hidden="true"
      />
    </div>
    <ul class="select-box__list">
      <li>
        <label v-on:click="exit" class="select-box-user__option" aria-hidden="aria-hidden">خروج</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    exit: function () {
      this.$router.push({
        path: "/sign/signin",
      });
    },
  },
};
</script>
<style scoped>
.user-select-box {
  position: relative;
  margin-top: 10px;
  color: #aeaeae;
  font-family: shabnam;
  font-size: 10px;
}

.select-box__current {
  position: relative;
  cursor: pointer;
}

.select-box-user__icon {
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  transition: 0.2s ease;
  width: 11px;
  height: 6.9px;
}
.select-box__value {
  display: flex;
}
.select-box__input {
  display: none;
}

.select-box__list {
  position: absolute;
  left: 7px;
  top: 10px;
  width: 65px;
  padding: 0;
  list-style: none;
  opacity: 0;
  animation-name: HideList;
  animation-duration: 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: step-start;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
}

.select-box-user__option {
  display: block;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
}

.select-box-user__option:hover,
.select-box__option:focus {
  color: #546c84;
  background-color: #fbfbfb;
}

.select-box__current:focus + .select-box__list {
  opacity: 1;
  animation-name: none;
}
.select-box__current:focus + .select-box-user__option {
  cursor: pointer;
  width: 65px;
  z-index: 1;
}
</style>
