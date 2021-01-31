import Vue from 'vue';
import VueRouter from 'vue-router';
import vTodo from '../components/v-todo';
import vTodoList from '../components/v-todo-list';

Vue.use(VueRouter);

let router = new VueRouter ({
    routes: [
        {
            path: '/', //указываем пути до компонентов
            name: 'todo',
            component: vTodo
        },
        {
            path: '/todolist', //указываем пути до компонентов
            name: 'todolist',
            component: vTodoList
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});

export default router;