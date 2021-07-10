<template>
  <button
    v-on:click="starting"
    class="btn-status button"
    :class="{active : status}"
    :disabled="status"
  >
    <p class="para-status paragraph" :class="{active : status}">شروع</p>
    <div class="image-status image" :class="{active : status}"></div>
  </button>
</template>
<script>
import { mapMutations } from "vuex";
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
  props: ["status", 'titleQ'],
  methods: {
    ...mapMutations(["SET_Q_HEADER"]),
    starting: async function () {
      this.SET_Q_HEADER(this.titleQ);
      let resData = await axios.get(`/user/submit_questionnaire?title=${this.titleQ}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      
      if (resData.data.status === 200) {
        this.$toasted.success("به هر پرسش پاسخ مناسب بدهید");
      } else {
        this.$toasted.success("نمایش پرسش ها ها با خطا مواجه شد " );
      }

      this.$router.push({
        name: "AllTypeQuestion",
        params: { titleQ: this.titleQ },
        query: { name: this.titleQ },
      });
    },
  },
};
</script>
<style>
.btn-status {
  background-color: #4570f5;
  box-shadow: 0 2px 5px 0 rgba(69, 112, 245, 0.6);
  cursor: pointer;
}
.btn-status.active {
  background-color: #e6e6e6;
  box-shadow: 0 0px 0px 0;
  border: none;
  cursor: default;
}
.para-status {
  color: #ffffff;
}
.para-status.active {
  color: #b9b9b9;
}
.image-status {
  background-image: url("../../../assets/img/arrow(6).svg");
}
.image-status.active {
  background-image: url("../../../assets/img/arrow(6)1.svg");
}
.image {
  width: 16px;
  height: 13.3px;
  margin: auto 2px;
}
button {
  display: flex;
  width: 15%;
  height: 50px;
  border-radius: 10px;
  background-color: #4570f5;
  justify-content: center;
  border: none;
}

.paragraph {
  display: inline;
  font-family: shabnam;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: -0.16px;
  margin: auto 2px;
}
@media screen and (max-width: 950px) {
  button {
    width: 80px;
    height: 40px;
  }
}
</style>