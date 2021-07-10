import * as types from './types';

export default {

    [types.GET_NAME]: state => {
        return state.name;
    },
    [types.GET_EMAIL]: state => {
        return state.email;
    },
    [types.GET_PASSWORD]: state => {
        return state.password;
    },
    [types.GET_CONFIRM_PASSWORD]: state => {
        return state.confirmPassword;
    },
    [types.GET_ALL_QUESTIONNAIRE]: state => {
        return state.allQuestionnaire;
    },
    [types.GET_ALL_QUESTIONS]: state => {
        return state.allQuestions;
    },
    [types.GET_COUNTER_QUESTIONS]: state => {
        return state.counterQuestions;
    },
    [types.GET_CURRENT_QUESTION]: state => {
        return state.currentQuestion;
    },
    [types.GET_NEW_PASSWORD]: state => {
        return state.newPassword;
    },
    [types.GET_NEW_PASSWORD_CONFIRM]: state => {
        return state.newPasswordConfirm;
    },
    title: state => state.headerName
    // getHeader() {
    //     return state.headerName;
    //   }
};