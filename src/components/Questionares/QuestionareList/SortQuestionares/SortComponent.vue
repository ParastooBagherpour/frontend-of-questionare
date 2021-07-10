<template>
  <div class="sort-part">
    <p class="sort-base-label">مرتب سازی براساس</p>
    <div class="select-box">
      <div class="select-box__current" tabindex="1">
        <div class="select-box__value">
          <input
            class="select-box__input"
            type="radio"
            id="0"
            value="1"
            name="Ben"
            checked="checked"
          />
          <p class="select-box__input-text">جدید ترین</p>
        </div>
        <div class="select-box__value">
          <input
            class="select-box__input"
            type="radio"
            id="1"
            value="2"
            name="Ben"
            checked="checked"
          />
          <p class="select-box__input-text">الفبا</p>
        </div>
        <div class="select-box__value">
          <input
            class="select-box__input"
            type="radio"
            id="2"
            value="3"
            name="Ben"
            checked="checked"
          />
          <p class="select-box__input-text">تعداد سوال</p>
        </div>
        <div class="select-box__value">
          <input
            class="select-box__input"
            type="radio"
            id="4"
            value="5"
            name="Ben"
            checked="checked"
          />
          <p class="select-box__input-text">جدید ترین</p>
        </div>
        <img
          class="select-box__icon"
          src="../../../../assets/img/arrow(4)@2x.png"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul class="select-box__list">
        <li>
          <label
            @click="sort('date')"
            class="select-box__option"
            for="0"
            aria-hidden="aria-hidden"
          >جدید ترین</label>
        </li>
        <li>
          <label
            @click="sort('title')"
            class="select-box__option"
            for="1"
            aria-hidden="aria-hidden"
          >الفبا</label>
        </li>
        <li>
          <label
            @click="sort('count_questions')"
            class="select-box__option"
            for="2"
            aria-hidden="aria-hidden"
          >تعداد سوال</label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    sort: function (type) {
      this.$emit("sortChanged", type);
    },
  },
};
</script>
<style>
.select-box__current {
  position: relative;
  cursor: pointer;
}

.select-box__value {
  display: flex;
}
.select-box__input {
  display: none;
}

.select-box__list {
  position: absolute;
  width: 100%;
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

.select-box__current:focus + .select-box__list {
  opacity: 1;
  animation-name: none;
}

.select-box__current:focus .select-box__icon {
  transform: translateY(-50%) rotate(180deg);
}

.sort-part {
  display: flex;
}

.sort-base-label {
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: -0.14px;
  color: #7f86aa;
  margin: 8px;
}

.select-box {
  position: relative;
  margin: 0 auto;
  color: #aeaeae;
  font-family: shabnam;
  font-size: 13px;
}

.select-box__icon {
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%);
  transition: 0.2s ease;
  width: 12.1px;
  height: 6.9px;
}

.select-box__input:checked + .select-box__input-text {
  display: block;
}
.select-box__input-text {
  display: none;
  width: 95px;
  margin: 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 15px;
}

.select-box__option {
  display: block;
  padding: 15px;
  background-color: #fff;
}

.select-box__option:hover,
.select-box__option:focus {
  color: #546c84;
  background-color: #fbfbfb;
}
.select-box__current:focus + .select-box__list .select-box__option {
  cursor: pointer;
  position: relative;
}

@keyframes HideList {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}

@media screen and (max-width: 950px) {
  .sort-base-label {
    font-size: 13px;
  }
  .select-box {
    font-size: 12px;
  }
}
</style>