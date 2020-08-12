<template>
  <q-page class="flex flex-center" style="background: #eee">
    <q-btn @click="goToLoginPage">Login</q-btn>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {};
  },
  methods: {
    goToLoginPage() {
      this.$router.replace('/login')
    }
  }
};
</script>
<style scoped>
</style>
