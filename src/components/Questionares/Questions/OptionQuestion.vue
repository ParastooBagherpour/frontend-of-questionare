<template>
  <div class="container">
    <div class="radio-li">
      <input
        type="radio"
        id="first-option"
        name="selector"
        :value="obj.option1"
        @change="onChange($event)"
        v-model="picked"
      />
      <div class="check" id="p"></div>
      <label for="first-option">{{obj.option1}}</label>
      <span class="backgroundColor"></span>
    </div>
    <div class="radio-li">
      <input
        type="radio"
        id="second-option"
        name="selector"
        :value="obj.option2"
        @change="onChange($event)"
        v-model="picked"
      />
      <div class="check"></div>
      <label for="second-option">{{obj.option2}}</label>
      <span class="backgroundColor"></span>
    </div>
    <div class="radio-li" v-if="obj.count_options === 4">
      <input
        type="radio"
        id="third-option"
        name="selector"
        :value="obj.option3"
        @change="onChange($event)"
        v-model="picked"
      />
      <div class="check"></div>
      <label for="third-option">{{obj.option3}}</label>
      <span class="backgroundColor"></span>
    </div>
    <div class="radio-li" v-if="obj.count_options === 4">
      <input
        type="radio"
        id="forth-option"
        name="selector"
        :value="obj.option4"
        @change="onChange($event)"
        v-model="picked"
      />
      <div class="check"></div>
      <label for="forth-option">{{obj.option4}}</label>
      <span class="backgroundColor"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["obj"],
  data: function () {
    return {
      picked: "",
    };
  },
  methods: {
    onChange(event) {
      this.$emit("answer", event.target.value);

    },

  },

};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5% auto 5%;
  box-sizing: border-box;
  position: relative;
  height: auto;
  border-radius: 10px;
  width: 60%;
  padding-bottom: 100px;
}

.radio-li {
  background-color: #e6e9ef;
  position: relative;
  border-radius: 10px;
  height: 80px;
  margin: 10px;
  width: 45%;
}

.radio-li input[type="radio"] {
  position: absolute;
  visibility: hidden;
}

.radio-li label {
  display: block;
  position: relative;
  font-weight: 300;
  font-size: 14px;
  font-family: shabnam;
  padding: 14px 70px 0px 0px;
  text-align: right;
  margin: 10px 0px;
  height: 30px;
  z-index: 9;
  cursor: pointer;
  color: #4b5a9f;
}

.radio-li .check {
  display: block;
  position: absolute;
  border: 2px solid #ffffff;
  border-radius: 100%;
  height: 20px;
  width: 20px;
  top: 24px;
  right: 30px;
  z-index: 5;
}

.radio-li .check::before {
  display: block;
  position: absolute;
  content: "";
  border-radius: 100%;
  height: 15px;
  width: 15px;
  top: 2.5px;
  left: 2.5px;
  margin: auto;
}

input[type="radio"]:checked ~ .check {
  border: 2px solid #286d3e;
}

input[type="radio"]:checked ~ .check::before {
  background: #286d3e;
}

input[type="radio"]:checked ~ label {
  color: #286d3e;
}

.backgroundColor {
  position: absolute;
  border-radius: 10px;
  top: -10px;
  left: -10px;
  margin: 10px;
  width: 100%;
  height: 100%;
  background-color: #95d7a4;
  visibility: hidden;
}

input[type="radio"]:checked ~ .backgroundColor {
  visibility: visible;
}

@media screen and (max-width: 900px) {
  .radio-li {
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .radio-li label {
    font-size: 12px;
  }
}
@media screen and (max-width: 400px) {
  .radio-li .check {
    right: 13px;
  }
  .radio-li label {
    right: -20px;
  }
}
</style>