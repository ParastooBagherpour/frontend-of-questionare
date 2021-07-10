<template>
    <div class="form">

        <InputSignIn></InputSignIn>
        <CheckSign></CheckSign>
        <div class="statusButton">
            <ButtonSign color="gray" signVal="signUp" v-on:click.native="gotoSignUp"></ButtonSign>
            <ButtonSign color="blue" signVal="signIn" v-on:click.native="updateElementAndCheckLogin"></ButtonSign>
        </div>

    </div>
</template>

<script>
    import InputSignIn from "./InputSignIn";
    import CheckSign from "../Common/CheckSign";
    import ButtonSign from "../Common/ButtonSign";
    import * as types from "../../../store/types";
    import {mapActions, mapGetters} from "vuex";
    import strings from '../../../assets/stirngs/strings'

    const axios = require('axios');
    const Swal = require('sweetalert2')
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    export default {

        methods: {
            ...mapActions({
                updateEmail: types.UPDATE_EMAIL,
                updatePassword: types.UPDATE_PASSWORD
            }),
            ...mapGetters({
                email: types.GET_EMAIL,
                password: types.GET_PASSWORD
            }),
            updateElementAndCheckLogin() {
                this.updatePassword(document.getElementById('password').value)
                this.updateEmail(document.getElementById('email').value)
                this.checkLogin()
            },
            async checkLogin() {
                let params = {
                    email: this.$store.getters[types.GET_EMAIL],
                    password: this.$store.getters[types.GET_PASSWORD],
                }
                params = JSON.stringify(params)
                console.log(params)
                this.$Progress.start()
                let res = await axios.post('/user/login', params);
                console.log(res.data.status)
                if (res.data.status === 200) {
                    this.$Progress.finish()
                    localStorage.setItem("token", res.data.token);
                    await Toast.fire({
                        icon: 'success',
                        title: strings.successSignIn
                    })
                    await this.$router.push('/questionare/listOfQuestionares')
                } else {
                    this.$Progress.fail()
                    await Toast.fire({
                        icon: 'error',
                        title: strings.failSignIn
                    })
                }
            },
            gotoSignUp() {
                this.$router.push('/sign/signUp')
            }

        },
        name: "FormSignIn",
        components: {
            InputSignIn,
            CheckSign,
            ButtonSign
        },

    }
</script>

<style scoped>
    .statusButton {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>