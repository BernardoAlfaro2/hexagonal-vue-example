<script setup lang="ts">
import { createUser } from '@/application/user.repository/create/CreateUser';
import { type CreateUserInterface, type User } from '@/domain';
import { CreateUserRepository } from '@/infraestructure/user/UserRepository';
import { onMounted, reactive, ref, toRefs } from 'vue';

const users = ref<User[]>()

const user = reactive<CreateUserInterface>({
    address: "",
    id: 0,
    lastname: "",
    name: ""
})

const userRepository = CreateUserRepository()

onMounted(async () => {
    //users.value = await userRepository.getAll()
})

const handleSubmit = () => {
    createUser(userRepository, user).catch(error => console.error(error))
}

</script>

<template>
    <main>

        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="user.name">
            <button type="submit">Create</button>
        </form>
        {{ user }}
        <div v-for="item in users" :key="item.id">
            {{ item.name.firstname }}
        </div>
    </main>
</template>
