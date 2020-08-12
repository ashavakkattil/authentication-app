<template>
  <q-page class="flex flex-center" style="background: #eee">
    <q-btn @click="activateAccount">Activate Account</q-btn>
  </q-page>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route);
  },
  methods: {
    activateAccount() {}
  }
};
</script>
