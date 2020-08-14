<template>
  <q-page class="flex flex-center" style="background: #eee">
    <q-card flat bordered class="q-pa-xl" :style="$q.screen.lt.lg ? '85%': '35%'">
      <q-form @submit="register">
        <div class="text-h4 text-weight-bold text-center">Register</div>
        <q-card-section class="q-pb-xs q-gutter-y-md">
          <div class="text-red" v-show="error.length">
            <span>{{error}}</span>
            <span class="float-right">
              <q-btn flat color="red" size="xs" icon="mdi-close" @click="error = ''"></q-btn>
            </span>
          </div>
          <q-input dense placeholder="Name" v-model="item.name" required>
            <template v-slot:prepend>
              <q-icon name="mdi-account-outline" size="xs"></q-icon>
            </template>
          </q-input>
          <q-input dense placeholder="Email ID" v-model="item.email" required>
            <template v-slot:prepend>
              <q-icon name="mdi-email" size="xs"></q-icon>
            </template>
          </q-input>
          <q-input
            dense
            placeholder="Password"
            :type="isPwd ? 'password' : 'text'"
            v-model="item.password"
            required
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
          <q-input
            dense
            placeholder="Confirm Password"
            :type="isPwdOk ? 'password' : 'text'"
            v-model="confirmedPassword"
            required
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock-outline" size="xs"></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwdOk ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwdOk = !isPwdOk"
                size="xs"
              />
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions class="justify-center q-gutter-y-xs q-mt-md">
          <q-btn class="login-btn text-weight-bolder" rounded type="submit">Register</q-btn>
        </q-card-actions>
        <div class="text-right">
          <span>Already have an account ?</span>
          <q-btn flat class="q-mr-xs text-capitalize text-subtitle2" @click="goToLogin">Login</q-btn>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      isPwd: true,
      isPwdOk: true,
      users: [],
      item: {
        name: "",
        email: "",
        password: ""
      },
      confirmedPassword: "",
      error: ""
    };
  },
  methods: {
    goToLogin() {
      this.$router.replace("/login");
    },
    register() {
      if (this.item.password === this.confirmedPassword) {
        this.$axios
          .post("/users", this.item)
          .then(response => {
            if (response.data.success === true) {
              this.$q.notify({
                message: response.data.message,
                color: "positive"
              });
            } else if (response && response.data.warning.length) {
              this.error = response.data.warning;
            }
          })
          .catch(e => {
            console.log(e.message);
          });
      } else {
        this.error = "Passwords don't match";
      }
    }
  }
};
</script>
<style scoped>
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
.error-alert {
  height: 20px;
  padding: 0px 5px;
}
</style>
