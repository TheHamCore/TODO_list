<template>
    <div class="navbar">
        <ul class="navbar-menu">
            <!-- указываем пути перехода по ссылкам согласно router -->
            <!-- exact для отображения активного класса -->
            <li><router-link exact :to="{name:'todo'}">
                Добавить задачу
            </router-link></li>
            <li><router-link :to="{name:'todolist'}">
                К списку задач
            </router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'v-navbar',        
}
</script>

<style scoped>

</style>