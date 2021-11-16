<template>
  <div>
    <div v-for="user in users" :key="user.name">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.user.users
    },
  },
  mounted() {
    this.getAllUsers()
  },
  methods: {
    async getAllUsers() {
      await this.$store.dispatch('user/getAllUsers')
    },
  },
}
</script>

<style lang="scss" scoped></style>
