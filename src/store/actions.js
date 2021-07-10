import * as types from './types';

export default {
    [types.UPDATE_NAME]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_NAME, payload)
    },
    [types.UPDATE_EMAIL]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_EMAIL, payload)
    },
    [types.UPDATE_PASSWORD]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_PASSWORD, payload)
    },
    [types.UPDATE_CONFIRM_PASSWORD]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_CONFIRM_PASSWORD, payload)
    },
    [types.UPDATE_ALL_QUESTIONNAIRE]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_ALL_QUESTIONNAIRE, payload)
    },
    [types.UPDATE_ALL_QUESTIONS]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_ALL_QUESTIONS, payload)
    },
    [types.UPDATE_COUNTER_QUESTIONS]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_COUNTER_QUESTIONS, payload)
    },
    [types.UPDATE_CURRENT_QUESTION]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_CURRENT_QUESTION, payload)
    },
    [types.UPDATE_NEW_PASSWORD]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_NEW_PASSWORD, payload)
    },
    [types.UPDATE_NEW_PASSWORD_CONFIRM]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_NEW_PASSWORD_CONFIRM, payload)
    },
};