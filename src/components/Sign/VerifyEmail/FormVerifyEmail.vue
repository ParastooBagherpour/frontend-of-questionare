<template>
    <div class="statusButton">
        <button class="button-change-password" v-on:click="verifyEmail">ثبت نام نهایی</button>
    </div>
</template>

<script>

    import strings from "../../../assets/stirngs/strings";

    const axios = require('axios');
    const Swal = require('sweetalert2')

    export default {
        name: "FormVerifyEmail",
        components: {},
        methods: {
            async verifyEmail() {
                let param = this.$route.query
                param = JSON.stringify(param)
                this.$Progress.start()
                let res = await axios.post('/user/signUpFinal', param)
                if (res.data.status === 200) {
                    this.$Progress.finish()
                    Swal.fire(
                        strings.SUCCESS,
                        strings.successForgetPassword,
                        'success'
                    )
                    await this.$router.push('/sign/signin')

                } else {
                    this.$Progress.fail()
                    Swal.fire({
                        icon: 'error',
                        title: strings.ERROR,
                        text: strings.failForgetPassword
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .statusButton {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .statusButton .button-change-password {
        width: 60%;
        height: 50px;
        margin: 20px 5px 5px 5px;
        background: #4570f5;
        text-align: center;
        border-color: #e6e9ef;
        font-family: shabnam, serif;
        color: #e6e9ef;
        font-size: 15px;
        border-radius: 10px;
        cursor: pointer;

    }
</style>