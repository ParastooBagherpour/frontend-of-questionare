<template>
  <div class="input">
    <div class="form-input">
      <label for="email">ایمیل
        <input type="text" id="email" placeholder="ایمیل خود را وارد کنید">
      </label>
    </div>
    <div class="form-input">
      <label for="password">رمز عبور
        <input type="password" id="password" placeholder="رمز عبور خود را وارد کنید">
      </label>
    </div>
  </div>
</template>

<script>
import * as types from '../../../store/types';
import {mapGetters} from "vuex";

export default {
  name: "InputSignIn",
  computed: {
    ...mapGetters({
      email: types.GET_EMAIL,
      password: types.GET_PASSWORD
    })
  },
}
</script>

<style scoped>
.form .input {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 10px 8px 6px 0 #edeef5;
  text-align: right;
}

.input .form-input {
  padding: 20px;
  margin-top: 5px;
}

.form .input .form-input label {
  padding: 15px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #7f86aa;
  margin-bottom: 10px;

}

.form .input .form-input input {
  width: 100%;
  border: none;
  color: #c3c6d5;
  font-family: shabnam, serif;
  text-align: right;
}

.form .input .form-input input::placeholder {
  color: #c3c6d5;
  font-size: 16px;
}

.form .input .form-input input:focus {
  outline: none;
}

@media only screen and (max-width: 500px) {
  .form .input .form-input input::placeholder {
    color: #c3c6d5;
    font-size: 11px;
  }

}
</style>