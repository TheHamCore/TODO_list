<template>
    <div class="card">

        <div class="center">
            <h3 class="task_descr">Напиши задачу, которую необходимо выполнить</h3>
        </div>

        <div class="form-control">
            <!-- Связываем input c inputText -->
            <input
                v-model="inputText"
                class="input_text" 
                type="text" id="task" 
                placeholder="Напиши свой план..."
            >
            <!-- Вещаем событие по клику и описываем его в методах -->
            <button
                @click="addTodo"
                class="btn"
                :disabled="isLength"
            >
                Добавить задачу
            </button>
        </div>
       
    </div>
</template>

<script>
// импортируем mapMutations для короткого обращения к VUEX
import {mapMutations} from 'vuex'

export default {
    name: 'v-todo',
    data () {
        return {
            inputText: ''
        }
    },
    methods: {
        ...mapMutations(['addTask']),
        
        addTodo () {
            // переходим во VUEX и пушим в массив то, что написали в input
            this.addTask({
                text: this.inputText,
            });
            // очищаем форму
            this.inputText = ''
        }
    },
    
    computed: {
        // минимальная валидация для формы, чтобы не отправлять в массив пустые строчки
        isLength: (vm) => vm.inputText.trim().length < 3
    }
}
</script>

<style scoped>
    
</style>