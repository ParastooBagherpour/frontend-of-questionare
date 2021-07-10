<template>
  <div class="button">
    <input :class="color" type="submit" :value="[signVal === 'signIn' ? 'ورود' : 'ثبت نام']">
  </div>
</template>

<script>
export default {
  name: "ButtonSign",
  props: {
    color: String,
    signVal: String
  },

}
</script>

<style scoped>
.button {
  display: flex;
  justify-content: space-between;
}

.button input {
  min-width: 235px;
  padding: 9px 75px;
  border: 1px solid #d1d1d2;
  border-radius: 5px;
  box-shadow: 0 3px 20px 0 rgba(69, 112, 245, 0.1);
  cursor: pointer;
  color: #929db3;
  font-size: 16px;
  font-family: shabnam, serif;
  text-align: center;
}

.button input:focus {
  outline: none;
}

.button .blue {
  background-color: #4570f5;
  color: #ffffff;
}

.button .gray {
  background-color: #f3f4f8;
  color: #929db3;
}

@media only screen and (max-width: 600px) {
  .button input {
    margin: 5px;
    padding: 10px;
    min-width: 170px;
    border: 1px solid #d1d1d2;
    border-radius: 5px;
    box-shadow: 0 3px 20px 0 rgba(69, 112, 245, 0.1);
    cursor: pointer;
    color: #929db3;
    font-size: 12px;
    font-family: shabnam, serif;
    text-align: center;
  }
}

@media only screen and (max-width: 400px) {
  .button input {

    padding: 10px;
    min-width: 130px;
    border: 1px solid #d1d1d2;
    border-radius: 5px;
    box-shadow: 0 3px 20px 0 rgba(69, 112, 245, 0.1);
    cursor: pointer;
    color: #929db3;
    font-size: 12px;
    font-family: shabnam, serif;
    text-align: center;
  }
}
</style>