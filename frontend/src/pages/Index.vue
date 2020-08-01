<template>
  <q-page class="flex flex-center" style="background: #eee">
    <q-card flat bordered class="q-pa-xl login-card">
      <q-form>
        <div class="text-h5 text-weight-bold text-center">Login</div>
        <q-card-section class="q-pb-xs">
          <q-input dense placeholder="Username or email" class="q-my-md">
            <template v-slot:prepend>
              <q-icon name="mdi-account-outline" size="xs"></q-icon>
            </template>
          </q-input>
          <q-input dense placeholder="Password" class="q-my-sm">
            <template v-slot:prepend>
              <q-icon name="mdi-lock-outline" size="xs"></q-icon>
            </template>
          </q-input>
          <div class="text-right text-caption">Forgot password ?</div>
        </q-card-section>
        <q-card-actions class="justify-center">
          <q-btn class="login-btn" color="primary" rounded>Login</q-btn>
        </q-card-actions>
      </q-form>
      <div class="q-mt-lg text-center">Or Sign Up using</div>
      <div class="row justify-center q-gutter-x-md q-mt-sm items-baseline">
        <div class="col-auto">
          <q-img src="../assets/fb.png" style="height:45px;width:45px"></q-img>
        </div>
        <div class="col-auto">
          <q-img src="../assets/google.png" style="height:35px;width:35px"></q-img>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>
<style scoped>
.login-card {
  width: 25%;
}
.login-btn {
  width: 98%;
}
</style>
