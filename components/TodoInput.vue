<template>
  <div class="container">
    <c-input w="30%" m="2vh" v-model="input" placeholder="Enter Todo Item" />
    <c-button w="30%" m="2vh" bg="blue.400" color="white" @click="addTodo">
      Add New
    </c-button>
    <div v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </div>
  </div>
</template>

<script>
import { CInput, CButton } from '@chakra-ui/vue'
export default {
  computed: {
    length() {
      return this.$store.state.todo.todoLength
    },
    todos() {
      return this.$store.state.todo.todos
    },
  },
  data() {
    return {
      num: 0,
      input: '',
    }
  },
  components: {
    CInput,
    CButton,
  },
  methods: {
    addTodo() {
      this.$store.commit('todo/addTodo', this.input)
      this.input = ''
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
