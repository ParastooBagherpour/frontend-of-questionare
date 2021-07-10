<template>
    <div class="form">

        <InputForgetPassword></InputForgetPassword>
        <div class="statusButton">
            <button class="button-change-password" v-on:click="changePassword">تغییر رمز</button>
        </div>

    </div>
</template>

<script>
    import InputForgetPassword from "./InputForgetPassword";
    import {mapGetters} from "vuex";
    import * as types from '../../../store/types'
    import strings from '../../../assets/stirngs/strings'

    const axios = require('axios');
    const Swal = require('sweetalert2')

    export default {
        computed: {
            ...mapGetters({
                password: types.GET_NEW_PASSWORD,
                confirmPassword: types.GET_NEW_PASSWORD_CONFIRM
            })
        },
        methods: {

            async changePassword() {
                if (this.password === this.confirmPassword) {
                    let param = {
                        email: this.$route.query.email,
                        password: this.password
                    }
                    param = JSON.stringify(param)
                    this.$Progress.start()
                    let res = await axios.post('/user/changePassword', param);
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
                } else {

                    Swal.fire({
                        icon: 'error',
                        title: strings.ERROR,
                        text: strings.notMachParams
                    })
                }
            },

        },
        name: "FormForgetPassword",
        components: {
            InputForgetPassword,
        },

    }
</script>

<style scoped>
    .statusButton {
        justify-content: center;
        display: flex;
        flex-direction: row;
    }

    .statusButton .button-change-password {
        width: 100%;
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