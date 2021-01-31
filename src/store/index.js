import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
// подключил библиотеку для сохранения данных после перезагрузки
// https://github.com/robinvdvleuten/vuex-persistedstate
Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createPersistedState()],

    state: {
        todoList: [],
    },

    getters: {
        //обращаемся к state через геттеры
        todoList: (state) => state.todoList,
    },
    
    mutations: {
        // пушим в массив данные
        addTask (state, todo) {
            state.todoList.push(todo);
        },

        // вырезаем из массива 1 элемент по индексу i
        deleteTask (state, i) {
            state.todoList.splice(i, 1);
        },

        
        changeTask (state, payload) { // в payload лежит index newText
            //обращаемся к массиву по индексу и берем у него поля text и присваеваем ему новое значение(newText)
            state.todoList[payload.index].text = payload.newText;  
        },
    }
});

export default store;