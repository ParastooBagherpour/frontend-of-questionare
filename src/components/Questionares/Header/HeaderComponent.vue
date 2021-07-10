<template>
  <header>
    <LogoComponent />
    <h1>{{headerName}}</h1>
    <UserComponent :userInfo="userInfo" />
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import UserComponent from "./User/UserComponent";
import LogoComponent from "./Logo/LogoComponent";

export default {
  name: "App",
  components: {
    UserComponent,
    LogoComponent,
  },
  props: ["userInfo"],
  computed: {
    ...mapState(["headerName"]),
  },
  methods: {
    ...mapMutations(["SET_Q_HEADER"]),
  },
  watch: {
    $route(to) {
      if (to.fullPath == "/questionare/listOfQuestionares") {
        this.SET_Q_HEADER("لیست پرسشنامه ها");
      }
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

h1 {
  font-family: Shabnam;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.35;
  color: #4570f5;
  text-align: center;
  margin-top: 27px;
  flex-shrink: 0;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 13px;
    flex-shrink: 1;
    margin: 27px 3px 0px 3px;
  }
}
</style>

