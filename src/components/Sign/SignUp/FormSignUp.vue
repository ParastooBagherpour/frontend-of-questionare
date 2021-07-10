<template>
    <div class="form">

        <InputSignUp></InputSignUp>
        <CheckSign></CheckSign>
        <div class="statusButton">
            <ButtonSign color="gray" signVal="signIn" v-on:click.native="gotoSignIn"></ButtonSign>
            <ButtonSign color="blue" signVal="signUp" v-on:click.native="updateElementAndInsertRow"></ButtonSign>
        </div>
    </div>
</template>

<script>
    import InputSignUp from "./InputSignUp";
    import CheckSign from "../Common/CheckSign";
    import ButtonSign from "../Common/ButtonSign";
    import {mapActions, mapGetters} from "vuex";
    import * as types from "../../../store/types";
    import strings from "../../../assets/stirngs/strings";

    const Swal = require('sweetalert2')
    const axios = require('axios');
    const string = require('../../../assets/stirngs/strings')
    export default {
        name: "FormSignUp",
        components: {
            InputSignUp,
            CheckSign,
            ButtonSign
        }
        ,
        methods: {
            ...mapActions({
                updateName: types.UPDATE_NAME,
                updateEmail: types.UPDATE_EMAIL,
                updatePassword: types.UPDATE_PASSWORD,
                updateConfirmPassword: types.UPDATE_CONFIRM_PASSWORD
            }),
            ...mapGetters({
                email: types.GET_EMAIL,
                password: types.GET_PASSWORD
            }),
            updateElementAndInsertRow() {
                this.updateName(document.getElementById('name').value)
                this.updateEmail(document.getElementById('email').value)
                this.updatePassword(document.getElementById('password').value)
                this.updateConfirmPassword(document.getElementById('confirmPassword').value)
                this.InsertRowUser()
            },
            async InsertRowUser() {
                let params = {
                    password: this.$store.getters[types.GET_PASSWORD],
                    email: this.$store.getters[types.GET_EMAIL],
                    name: this.$store.getters[types.GET_NAME],
                    role: string.USER
                }
                params = JSON.stringify(params)
                this.$Progress.start()
                let res = await axios.post('/user/signUp', params);
                if (res.data.status === 200) {
                    this.$Progress.finish()
                    Swal.fire(
                        strings.SUCCESS,
                        string.successSignUp,
                        'success'
                    )
                } else {
                    this.$Progress.fail()
                    Swal.fire({
                        icon: 'error',
                        title: strings.ERROR,
                        text:   string.notMachParams
                    })

                }
            },
            gotoSignIn() {
                this.$router.push('/sign/signin')

            }

        },
    }
</script>

<style scoped>
    .statusButton {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: space-between;
    }
</style>