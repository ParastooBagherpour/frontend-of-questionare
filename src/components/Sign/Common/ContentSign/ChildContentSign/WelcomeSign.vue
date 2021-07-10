<template>
  <div>
    <p class="header">به سیستم پرسشنامه آنلاین خوش آمدید</p>
    <p class="subHeader">چنانچه شما دارای حساب کاربری دارید لطفا وارد شوید</p>
  </div>
</template>

<script>
export default {
  name: "WelcomeSign"
}
</script>

<style scoped>
.header {
  font-size: 30px;
  font-weight: bold;
  color: #2a3774;
  margin-bottom: 13px;
}

.subHeader {
  font-size: 18px;
  color: #7f86aa;
  margin-bottom: 35px;
}

@media only screen and (max-width: 500px) {
  .header {
    font-size: 20px;
    font-weight: bold;
    color: #2a3774;
    margin-bottom: 13px;
  }

  .subHeader {
    font-size: 10px;
    color: #7f86aa;
    margin-bottom: 35px;
  }
}
</style>