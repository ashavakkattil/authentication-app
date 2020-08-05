<template>
  <q-page class="flex flex-center" style="background: #eee">
    <q-card flat bordered class="q-pa-xl login-card">
      <q-form>
        <div class="text-h4 text-weight-bold text-center">Login</div>
        <q-card-section class="q-pb-xs q-gutter-y-md">
          <q-input dense placeholder="Username or email">
            <template v-slot:prepend>
              <q-icon name="mdi-account-outline" size="xs"></q-icon>
            </template>
          </q-input>
          <q-input
            dense
            placeholder="Password"
            :type="isPwd ? 'password' : 'text'"
            v-model="password"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock-outline" size="xs"></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
                size="xs"
              />
            </template>
          </q-input>
          <div class="text-right text-caption">Forgot password ?</div>
        </q-card-section>
        <q-card-actions class="justify-center q-gutter-y-xs q-mt-md">
          <q-btn class="login-btn text-weight-bolder" rounded>Login</q-btn>
        </q-card-actions>
        <div class="text-right">
          <span>Don't have an account yet ?</span>
          <q-btn flat class="q-mr-xs text-capitalize text-subtitle2">Create</q-btn>
        </div>
      </q-form>
      <div class="q-mt-xl text-center text-body2">
        <span>---------------</span>
        Sign In using
        <span>---------------</span>
      </div>
      <div class="row justify-center q-gutter-x-md q-mt-sm items-baseline q-mb-xl">
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
  name: "PageIndex",
  data() {
    return {
      isPwd: true,
      password: ""
    };
  }
};
</script>
<style scoped>
.login-card {
  width: 25%;
}
.login-btn {
  width: 98%;
  color: white;
  background-image: linear-gradient(
    45deg,
    /* #cee21c 20%,
    rgb(0, 255, 157) 51%,
    #cee21c 100% */ #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e13063
  );
}
.login-btn:hover {
  background-position: right center; /* change the direction of the change here */
}
</style>
