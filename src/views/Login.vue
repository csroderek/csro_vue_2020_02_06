<template>
  <div class="main">
    <v-alert type="error" v-if="showAlert">账号或密码错误</v-alert>
    <v-row style="height: 100%">
      <v-col xs="0" sm="0" md="0" lg="6" xl="6" style="padding: 0"></v-col>
      <v-col xs="12" sm="12" md="12" lg="6" xl="6" class="right">
        <div class>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container class="form_title">
              <img src="../assets/image/login/logo.png" alt />
              <!--                            CSRO 壹品慧居-->
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
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      color: "#00aebc",
      valid: true,
      name: "demo",
      nameRules: [
        v => !!v || "请您输入用户名",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      password: "ddeemmoo",
      show1: false,
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
      window.console.log("login");
      this.$store.dispatch("LOGIN", {
        username: this.name,
        password: this.password
      });
    }
  },
  mounted() {},
  computed: {}
};
</script>

<style scoped>
.main {
  /*background: linear-gradient(to bottom, #bbdefb, #1e88e5);*/
  height: 100%;
  width: 100%;
  background-image: url("../assets/image/login/background.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
}
.right {
  /*width: 100%;*/
  height: 100%;
  /*background: #00aebc;*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.formContainer {
  box-sizing: border-box;
  /*margin: 300px;*/
  padding: 32px;
  background: white;
  width: 610px;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*border-radius: 32px;*/
  /*border: 1px solid gray;*/
  /*box-shadow: 0 0 10px gray;*/
}
.form_title {
  color: #00abbe;
  font-size: 35px;
  margin-top: 24px;
  margin-bottom: 24px;
}
.form_input_item {
  display: flex;
  padding: 0;
}
</style>