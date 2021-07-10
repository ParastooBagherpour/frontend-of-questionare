<template>
  <div class="body" dir="rtl">
    <div class="hemicycle"></div>
    <HeaderComponent :userInfo="userInfo" />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Questionares/Header/HeaderComponent";
import listOfQuestionares from "@/components/Questionares/QuestionareList/listOfQuestionares";
import noQuestionare from "@/components/Questionares/QuestionareList/noQuestionare";
import axios from "axios";

export default {
  name: "App",
  components: {
    HeaderComponent,
    listOfQuestionares,
    noQuestionare,
  },
  data: function () {
    return {
      userInfo: {
        fullName: "",
      },
    };
  },
  async mounted() {
    let resData = await axios
      .get(`/user/getName`, {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.userInfo.fullName = res.data.message[0].name;
      })
      .catch((e) => {});
  },
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

@font-face {
  font-family: shabnam;
  src: url("../../assets/Shabnam-Bold.ttf");
  font-weight: normal;
}
@font-face {
  font-family: shabnam-digit;
  src: url("../../assets/Shabnam-Bold-FD.ttf");
  font-weight: normal;
}

.body {
  max-width: 100vw;
  background-color: #f3f4f8;
  position: relative;
  z-index: 1;
}
.hemicycle {
  position: absolute;
  top: 0%;
  left: 10%;
  width: 80%;
  height: 700px;
  background-color: rgb(255, 255, 255, 0.3);
  border-radius: 50% / 0 0 100% 100%;
  z-index: -1;
}
</style>

