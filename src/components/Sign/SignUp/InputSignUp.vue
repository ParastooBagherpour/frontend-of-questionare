  <template>
  <div class="input">
    <div class="form-input">
      <label for="name">نام و نام خانوادگی
        <input type="text" id="name" placeholder="نام و نام خانوادگی خود را وارد کنید">
      </label>

    </div>
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
    <div class="form-input">
      <label for="confirmPassword">تکرار رمز عبور
        <input type="password" id="confirmPassword" placeholder="رمز عبور خود را مجدد وارد کنید">
      </label>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import * as types from "../../../store/types";

export default {
  name: "InputSignUp",
  computed: {
    ...mapGetters({
      name: types.GET_NAME,
      email: types.GET_EMAIL,
      password: types.GET_PASSWORD,
      confirmPassword: types.GET_CONFIRM_PASSWORD

    })
  }
}
</script>

<style scoped>
.input {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 10px 8px 6px 0 #edeef5;
}

.input .form-input {

  padding: 20px;
}

.input .form-input label {
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #7f86aa;
  margin-bottom: 10px;
}

.input .form-input input {
  width: 100%;
  border: none;
  color: #c3c6d5;
  font-family: shabnam, serif;
  text-align: right;
}

.input .form-input input::placeholder {
  color: #c3c6d5;
  font-size: 14px;
}

.input .form-input input:focus {
  outline: none;
}

@media only screen and (max-width: 500px) {
  .input .form-input input::placeholder {
    color: #c3c6d5;
    font-size: 11px;
  }

  .input .form-input label {
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    color: #7f86aa;
    margin-bottom: 10px;
  }

}
</style>