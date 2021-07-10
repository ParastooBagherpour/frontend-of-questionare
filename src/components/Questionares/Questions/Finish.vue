<template>
  <div>
    <img src="../../../assets/img/Group 34.svg" style="margin-top:10%" />
    <br />
    <br />
    <br />
    <p class="finish-paragragh">
      شما با
      <span class="finish-span">موفقیت&nbsp</span>پرسشنامه را به اتمام رساندید
    </p>
    <br />
    <br />
    <br />
    <button class="see-questionares-button" v-on:click="seeQuestionaresButton">
      <p class="see-questionare">مشاهده پرسشنامه ها</p>
      <img src="../../../assets/img/arrow(6).svg" />
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Nprogress from "nprogress";
axios.interceptors.request.use((config) => {
  Nprogress.start();
  return config;
});

axios.interceptors.response.use(
  (response) => {
    Nprogress.done();
    return response;
  },
  (error) => {
    Nprogress.done();
    return Promise.reject(error);
  }
);
export default {
  props: ["answerList"],
  computed: {
    ...mapGetters(["title"]),
  },
  methods: {
    seeQuestionaresButton: async function () {
      try {
        this.$router.push({ path: "/questionare/listOfQuestionares" });
        let param = {
          title: this.title,
          answers: this.answerList,
        };
        let param1 = JSON.stringify(param);
        console.log(param1);
        axios.defaults.timeout = 5000;
        await axios.post(`/user/save_question`, param1, {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        });

         this.$toasted.success("پاسخ های شما ذخیره شد ");
      } catch (e) {
         this.$toasted.error("خطا در ذخیره ی پاسخ های داده شده ");
      }
    },
  },
};
</script>
<style scoped>
.finish-span {
  color: #05d667;
}

.finish-paragragh {
  font-family: shabnam;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.2px;
  text-align: center;
  color: #2a3774;
}

.see-questionare {
  font-family: shabnam;
  font-size: 13px;
  line-height: 1.38;
  letter-spacing: -0.16px;
  text-align: center;
  color: #ffffff;
  margin: auto 10px;
}

.see-questionares-button {
  width: 200px;
  margin: auto;
}
</style>