<template>
  <v-img src="../assets/image/login/background.png" height="100%" width="100%">
    <v-container fluid fill-height>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify-sm="center"
        justify-md="center"
        justify-lg="end"
      >
        <v-col cols="12" xs="12" sm="8" md="4" lg="3">
          <v-card class="elevation-12">
            <v-toolbar color="#00abbe" flat d-flex>
              <!-- <v-img contain src="../assets/image/login/logo.png" width="30%" /> -->
              <v-icon color="white">mdi-home</v-icon>
              <v-card-text class="headline font-weight-normal text-center white--text">壹品慧居</v-card-text>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  v-model="username"
                  label="Username"
                  name="uasename"
                  prepend-inner-icon="mdi-account-circle"
                  type="text"
                  :rules="nameRules"
                />

                <v-text-field
                  v-model="password"
                  label="Password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  :rules="passRules"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                :disabled="!valid"
                block
                color="#00abbe"
                class="white--text"
                @click="login"
              >Login</v-btn>
              <v-overlay :value="overlay">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
              </v-overlay>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="0" lg="1" class="hidden-md-and-down"></v-col>
      </v-row>
    </v-container>
  </v-img>

  <!-- <div class="login_page" style="height:100%; width:100%">
    <v-alert type="error" v-if="showAlert">账号或密码错误</v-alert>
    <v-row style="height: 100%">
      <v-col xs="0" sm="0" md="0" lg="6" xl="6" style="padding: 0"></v-col>
      <v-col xs="12" sm="12" md="12" lg="6" xl="6" class="right">
        <div class>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container class="form_title">
              <img src="../assets/image/login/logo.png" alt />
            </v-container>
            <v-container class="form_input_item">
              <v-icon :color="color" style="margin-right: 8px">mdi-account-circle</v-icon>
              <v-text-field v-model="name" :rules="nameRules" label="用户名" required :color="color" />
            </v-container>

            <v-container class="form_input_item">
              <v-icon :color="color" style="margin-right: 8px">mdi-lock</v-icon>
              <v-text-field
                v-model="password"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                label="密码"
                :color="color"
                @click:append="show1 = !show1"
              />
            </v-container>

            <v-btn
              :disabled="!valid"
              class="mr-4"
              @click="login"
              block
              dark
              :color="color"
              style="margin-top: 32px"
            >登录</v-btn>

            <v-overlay :absolute="true" :value="overlay">
              <v-progress-circular :size="70" :width="7" :color="color" indeterminate />
            </v-overlay>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </div>-->
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      color: "#00aebc",
      valid: true,
      // nameRules: [
      //   v => !!v || "请您输入用户名",
      //   v => (v && v.length <= 10) || "Name must be less than 10 characters"
      // ],
      username: "",
      password: "",
      show1: false,
      nameRules: [value => !!value || "Required."],
      passRules: [v => v.length >= 8 || "Min 8 characters"],

      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      },
      checkbox: false,
      overlay: false,
      flowId: null,
      showAlert: false,
      result: null,
      ws: null,
      clearMsg: null,
      clearRefresh: null
    };
  },

  methods: {
    login() {
      this.overlay = true;
      this.$store
        .dispatch("USER_LOGIN", {
          username: this.username,
          password: this.password
        })
        .then(result => {
          this.overlay = false;
          console.log(result);
        })
        .catch(err => {
          this.overlay = false;
          console.log(err);
        });
    }
  },
  mounted() {},
  computed: {}
};
</script>

<style scoped>
</style>