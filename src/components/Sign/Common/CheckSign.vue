<template>
    <div class="checkbox">
        <a v-on:click="showDialogSendEmail" href="#">رمز عبور را فراموش کرده اید؟</a>
        <label for="remember">
            <span>مرا بخاطر داشته باش</span><input type="checkbox" id="remember">
        </label>
    </div>
</template>

<script>
    import strings from "../../../assets/stirngs/strings";


    const Swal = require('sweetalert2')
    const axios = require('axios')
    export default {
        name: "CheckSign",
        methods: {
            async showDialogSendEmail() {
                let responseData = {}
                Swal.fire({
                    title: 'فراموش کردن رمز عبور',
                    input: 'text',
                    inputPlaceholder: 'ایمیل خود را وارد کنید',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'ارسال ایمیل',
                    showLoaderOnConfirm: true,
                    preConfirm: (email) => {
                        console.log(email)
                        let param = {
                            email: email
                        }
                        return axios.post('/user/forgotPassword', param)
                            .then(response => {
                                if (response.status !== 200) {
                                    throw new Error(strings.failForgetPassword)
                                }
                                responseData = response
                                return response.body
                            })
                            .catch(error => {
                                Swal.showValidationMessage(
                                    `Request failed: ${error}`
                                )
                            })
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                }).then(() => {
                    console.log(responseData)
                    if (responseData.data.status === 200) {
                        Swal.fire(
                            strings.SUCCESS,
                            strings.SUCCESS_SEND_EMAIL,
                            'success'
                        )
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: strings.ERROR,
                            text: strings.failForgetPassword
                        })

                    }
                })
            }
        }
    }
</script>

<style scoped>
    .checkbox {
        display: flex;
        justify-content: space-between;
        margin: 36px 0;
    }

    .checkbox span {
        margin-right: 5px;
        font-size: 15px;
        color: #7f86aa;
        font-weight: bold;
    }

    .checkbox a {
        font-size: 16px;
        color: #7f86aa;
        font-weight: bold;
    }

    @media only screen and (max-width: 500px) {

        .checkbox a {
            font-size: 12px;
            color: #7f86aa;
            font-weight: bold;
        }

        .checkbox span {
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 400px) {
        .checkbox {
            display: flex;
            flex-direction: column;
            margin: 26px 0;
        }

        .checkbox span {
            margin-right: 5px;
            font-size: 10px;
            color: #7f86aa;
            font-weight: bold;
        }

        .checkbox label {
            margin-top: 10px;
        }

        .checkbox a {
            font-size: 12px;
            color: #7f86aa;
            font-weight: bold;
        }
    }

</style>