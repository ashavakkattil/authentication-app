<template>
  <q-page class="flex flex-center" style="background: #eee">
    <q-btn @click="activateAccount">Activate Account</q-btn>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      token: ""
    };
  },
  mounted() {
    this.token = this.$route.params.token;
  },
  methods: {
    activateAccount() {
      this.$axios
        .get("/users/authenticate/" + this.token)
        .then(response => {
          if (response && response.status === 200) {
            this.$router.replace("/login");
          }
        })
        .catch(e => console.log(e.message));
    }
  }
};
</script>
