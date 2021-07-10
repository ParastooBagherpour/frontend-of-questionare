<template>
  <div class="no-questionare">
    <img class="no-Q-img" src="../../../assets/img/cancel.svg" />
    <p class="no-Q-para">هم اکنون پرسش نامه‌ای وجود ندارد!</p>
  </div>
</template>
<style scoped>
.no-questionare {
  display: flex;
  flex-direction: column;
  margin: 15% auto;
}
.no-Q-img {
  object-fit: contain;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.no-Q-para {
  font-family: shabnam;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.2px;
  text-align: center;
  color: #2a3774;
  justify-content: center;
}
</style>