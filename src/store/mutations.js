import * as types from './types';

export default {
    SET_Q_HEADER(state , title){
        state.headerName = title;
      },
    [types.MUTATE_UPDATE_NAME]: (state, payload) => {
        state.name = payload;
    },
    [types.MUTATE_UPDATE_EMAIL]: (state, payload) => {
        state.email = payload;
    },
    [types.MUTATE_UPDATE_PASSWORD]: (state, payload) => {
        state.password = payload;
    },
    [types.MUTATE_UPDATE_CONFIRM_PASSWORD]: (state, payload) => {
        state.confirmPassword = payload;
    },
    [types.MUTATE_UPDATE_ALL_QUESTIONNAIRE]: (state, payload) => {
        state.allQuestionnaire = payload;
    },
    [types.MUTATE_UPDATE_ALL_QUESTIONS]: (state, payload) => {
        state.allQuestions = payload;
    },
    [types.MUTATE_UPDATE_COUNTER_QUESTIONS]: (state, payload) => {
        state.counterQuestions = payload;
    },
    [types.MUTATE_UPDATE_CURRENT_QUESTION]: (state, payload) => {
        state.currentQuestion = payload;
    },
    [types.MUTATE_UPDATE_NEW_PASSWORD]: (state, payload) => {
        state.newPassword = payload;
    },
    [types.MUTATE_UPDATE_NEW_PASSWORD_CONFIRM]: (state, payload) => {
        state.newPasswordConfirm = payload;
    },
};