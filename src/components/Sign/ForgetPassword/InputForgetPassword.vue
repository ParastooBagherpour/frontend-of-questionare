<template>
    <div class="input">
        <div class="form-input">
            <label for="newPassword">رمز جدید
                <input type="password" id="newPassword" v-on:input="updatePassword"
                       placeholder="رمز جدید خود را وارد کنید">
            </label>
        </div>
        <div class="form-input">
            <label for="newPasswordConfirm">تکرار رمز جدید
                <input type="password" id="newPasswordConfirm" v-on:input="updateConfirmPassword"
                       placeholder="تکرار رمز جدید خود را وارد کنید">
            </label>
        </div>
    </div>
</template>

<script>

    import * as types from "../../../store/types";

    export default {
        name: "InputForgetPassword",
        methods: {
            updatePassword(event) {
                this.$store.dispatch(types.UPDATE_NEW_PASSWORD, event.target.value)
            },
            updateConfirmPassword(event) {
                this.$store.dispatch(types.UPDATE_NEW_PASSWORD_CONFIRM, event.target.value)
            }
        }
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