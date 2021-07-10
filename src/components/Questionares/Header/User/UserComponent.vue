<template>
  <div class="user">
    <img class="profile" src="../../../../assets/img/avatar@2x.png" />
    <p>{{userInfo.fullName}} ،خوش آمدید</p>
    <UserSelectBoxComponent />
  </div>
</template>

<script>
import UserSelectBoxComponent from "@/components/Questionares/Header/User/UserSelectBoxComponent";

export default {
  name: "App",
  components: {
    UserSelectBoxComponent,
  },
  props: ["userInfo"],
};
</script>
 <style scoped>
.user {
  display: flex;
  margin: 22px 0px 0px 45px;
  height: 26px;
  flex-shrink: 1;
  flex-basis: 50%;
  justify-content: flex-end;
}
.profile {
  width: 26px;
  height: 26px;
  margin-left: 10px;
  margin-bottom: 2px;
}
.user p {
  font-family: shabnam;
  height: 19px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.14px;
  color: #4b5a9f;
  margin-left: 17px;
  margin-top: 3px;
}

@media screen and (max-width: 950px) {
  .user {
    margin: 23px 5px;
  }
}
@media screen and (max-width: 600px) {
  body .user p {
    font-size: 10px;
  }
  .user {
    flex-shrink: 1;
    flex-basis: auto;
  }
}
</style>

