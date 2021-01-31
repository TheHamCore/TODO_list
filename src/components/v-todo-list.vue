<template>
    <div>
        <!-- Если не добалили дел, то будет блок, который подсказывает о функционале -->
        <div v-if="!todoList.length" class="card-todo" >
            <div class="center">
                <h3 class="task_descr">Вы пока не добавили задач, перейдите во вкладку "добавить задачу"</h3>
            </div>
        </div>
        <!-- Если добавили дела, то появляется этот блок, в котором мы перебираем массив, состоящих из добавленных дел -->
        <div v-else v-for="(todo, i) in todoList" :key="todo.id" class="card-todo">

            <div class="center">
                <!-- Выводим индекс задачи и текст задачу -->
                <h3 class="task_descr">{{i+1}}. {{todo.text}}</h3>
            </div>
            
            <div class="all_btn">
                <!-- вешаем событие на удаление по индексу элемента-->
                <button
                    @click="deleteTodo(i)" 
                    class="btn list-btn danger"
                >
                    Удалить задачу
                </button>

                <!-- вешаем событие, которое будет открывать блок на 36 строчке -->
                <button
                    @click="editTask(i)" 
                    class="btn list-btn"
                >
                    Открыть редактирование
                </button>
            </div>
            
            <!-- показываем это блок если текущий индекс равен итерируемому -->
            <div v-if="i === currentIndex" class="center">
                <input
                    v-model="currentText"   
                    type="text"
                    class="input_text task"
                    placeholder="Напишите изменения в задаче"
                    id="task"
                >

                <!-- вешаем событие и передаем ему индекс, по которому изменяем старый значения input на новые данные -->
                <button
                    @click="changeTodo(i)"
                    class="btn"
                    :disabled="isLength"
                >
                    Изменить
                </button>
            </div>
            
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
// импортируем mapMutations и mapGetters для короткого обращения к VUEX

export default {
    name: 'v-todo-list',
    data () {
        return {
            currentText: '',
            // переменная куда записываем значение из input
            currentIndex: ''
            // переменная куда кладем индекс, чтобы сравнить выбранный элемент с итерируемым
        }
    },
    methods: {
        ...mapMutations(['deleteTask', 'changeTask']),


        // передаем VUEX индекс i и выполняем метод deleteTask
        deleteTodo (i) {
            this.deleteTask(i)
        },

        
        editTask (i) {
                // присваем curentIndex(текущему) индекс итерируемого объекта 
                this.currentIndex = i
                // присваем значению из dat`ы => текст из выбранного объекта 
                this.currentText = this.todoList[i].text;
        },
        

        changeTodo (i) {
            //вызываем метод ChangeTask и передаем ему объект с параметрами index, newText
            this.changeTask({
                index: i,
                newText: this.currentText
            })
            this.currentText = ""; //очищаем форму
            this.currentIndex = ""; //очищаем индекс (соответственно очищается присваивание индекса в методе editTask)
        },
    },

    computed: {
        ...mapGetters (['todoList']), //импортируем из vuex массив
        isLength: (vm) => vm.currentText.trim().length < 3, // минимальная валидация для формы, чтобы не отправлять в массив пустые строчки
    }
}
</script>

<style scoped>
    
</style>