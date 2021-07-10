import Vue from 'vue'
import VueRouter from 'vue-router'
import Sign from '../views/Sign.vue'
import QuestionPageComponent from '@/components/Questionares/QuestionPageComponent'
import listOfQuestionares from "@/components/Questionares/QuestionareList/listOfQuestionares";
import noQuestionare from "@/components/Questionares/QuestionareList/noQuestionare";
import AllTypeQuestion from "@/components/Questionares/Questions/AllTypeQuestion";
import FormVerifyEmail from "../components/Sign/VerifyEmail/FormVerifyEmail";
import FormForgetPassword from "../components/Sign/ForgetPassword/FormForgetPassword";
import FormSignIn from "../components/Sign/SignIn/FormSignIn";
import FormSignUp from "../components/Sign/SignUp/FormSignUp";
Vue.use(VueRouter)
const routes = [
  {
    path: '/questionare',
    name: 'QuestionPageComponent',
    component: QuestionPageComponent,
    children: [
      {
        path: 'listOfQuestionares',
        name: 'listOfQuestionares',
        component: listOfQuestionares
      },
      {
        path: 'noQuestionare',
        component: noQuestionare
      },
      {
        path: 'AllTypeQuestion',
        name: 'AllTypeQuestion',
        component: AllTypeQuestion
      },
    ]
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign,
    children: [
      {
        path: 'signin',
        component: FormSignIn
      },
      {
        path: 'signup',
        component: FormSignUp
      },
      {
        path: 'forgetPassword',
        name: 'ForgetPassword',
        component: FormForgetPassword,
      },

    ]
  },
  {
    path: '/verifyEmail',
    name: 'VerifyEmail',
    component: FormVerifyEmail,
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
