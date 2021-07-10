import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        name: '',
        email: '',
        password: '',
        newPassword: '',
        newPasswordConfirm: '',
        confirmPassword: '',
        allQuestionnaire: Array,
        allQuestions: Array,
        counterQuestions: 0,
        currentQuestion: Object,
        headerName: 'لیست پرسشنامه ها'
    },
    getters,
    mutations,
    actions,

});