
<template>
  <div class="answered">
    <button class="privous" v-on:click="privousQ">
      <img src="../../../../assets/img/arrow(6)(1).svg" />
    </button>
    <div class="progress">
      <span class="progress-span" :style="{width: percent + '%'}">
        <div class="circle"></div>

        <div class="tooltip">
          <span class="tooltiptext">
            پرسش {{i}} / {{questionNum}}
            <span class="tooltip-percent">&nbsp‏{{this.percent}}% تکمیل شده</span>
          </span>
        </div>
      </span>
    </div>
    <button class="next-question" v-on:click="nextQ">
      <p class="next-question-p">سوال بعدی</p>
      <img class="next-question-img" src="../../../../assets/img/arrow(6)(2).svg" />
    </button>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      width: 0,
    };
  },

  props: ["percent", "i", "questionNum"],
  methods: {
    nextQ: function () {
      this.$emit("nextQ");
    },
    privousQ: function () {
      this.$emit("privousQ");
    },
  },
};
</script>
<style scoped>
.tooltip {
  display: inline;
  position: absolute;
  left: -75px;
}

.tooltip .tooltiptext {
  width: 160px;
  background-color: #2e3133;
  color: #fff;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  opacity: 1;
  transition: opacity 0.3s;
  font-size: 10px;
  border-radius: 3px;
  left: 0px;
  bottom: 15px;
}

.circle {
  top: -2px;
  width: 10px;
  height: 10px;
  background-color: #4570f5;
  position: absolute;
  z-index: 1;
  opacity: 1;
  transition: opacity 0.3s;
  border-radius: 50%;
  left: 0px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #2e3133 transparent transparent transparent;
}
.tooltip-percent {
  margin-right: 10px;

  color: #fcb833;
}
.answered {
  display: flex;
  justify-content: space-between;
  width: 85%;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 #f1f1f2;
  background-color: #ffffff;
  position: absolute;
  right: 10%;
  bottom: 20px;
  padding: 0px;
}

.progress {
  width: 75%;
  height: 6px;
  background-color: #e6e9ef;
  border-radius: 10px;
  position: absolute;
  top: 43%;
  left: 17%;
  display: flex;
}

.progress-span {
  display: block;
  width: 20%;
  height: 5px;
  background-color: #4570f5;
  border-radius: 10px;
  position: relative;
}

.next-question {
  width: 13%;
  margin: auto 10px;
  display: flex;
  justify-content: center;
}

.privous {
  width: 5%;
  margin: 10px;
  border-radius: 10px;
  background-color: #e6e9ef;
  border: none;
}

.next-question-p {
  font-family: shabnam;
  font-size: 15px;
  font-weight: 80;
  line-height: 1.38;
  letter-spacing: -0.16px;
  color: #ffffff;
  text-align: center;
  margin: auto 10px;
}

.next-question-img {
  width: 16px;
}

@media screen and (max-width: 1200px) {
  .next-question-p {
    margin: auto 3px;
    font-size: 12px;
  }
}
@media screen and (max-width: 600px) {
  .next-question {
    width: 60px;
    margin: auto 5px;
  }
  .next-question-p {
    font-size: 10px;
  }
  .next-question-img {
    width: 10px;
  }
  .privous {
    width: 5%;
    margin: auto 4px;
    border-radius: 10px;
    background-color: #e6e9ef;
    border: none;
  }
  .privous img {
    width: 10px;
  }
}
@media screen and (max-width: 480px) {
  .progress {
    width: 75%;
    left: 19%;
  }
}
@media screen and (max-width: 400px) {
  .progress {
    width: 65%;
    left: 23%;
  }
  .tooltip .tooltiptext {
    width: 70px;
  }
  .tooltip {
    left: -35px;
  }
}
</style>