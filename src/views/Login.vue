<template>
  <v-img src="../assets/image/login/background.png" height="100%" width="100%">
    <v-container fluid fill-height>
      <v-row class="fill-height ma-auto" align="center" justify-sm="center" justify-lg="end">
        <v-col xs="12" sm="10" md="6" lg="4" xl="3">
          <v-card>
            <v-toolbar color="#00abbe" flat>
              <v-icon color="white">mdi-home</v-icon>
              <v-card-text class="headline font-weight-light text-center white--text">壹品慧居</v-card-text>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="rules.valid">
                <v-text-field
                  v-model="user.username"
                  label="Username"
                  prepend-inner-icon="mdi-account-circle"
                  type="text"
                  :rules="rules.nameRules"
                />
                <v-text-field
                  v-model="user.password"
                  label="Password"
                  prepend-inner-icon="mdi-lock"
                  :rules="rules.passRules"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                :disabled="!rules.valid"
                block
                color="#00abbe"
                class="white--text"
                @click="login"
                :loading="loading"
              >Login</v-btn>
            </v-card-actions>
            <v-alert
              v-model="error.show"
              dismissible
              :type="error.type"
              class="mt-0"
            >{{ error.content }}</v-alert>
          </v-card>
        </v-col>
        <v-col md="0" lg="1" class="hidden-md-and-down"></v-col>
      </v-row>
      <v-snackbar :color="snackbar.color" top v-model="snackbar.show" :timeout="2500">
        {{ snackbar.content }}
        <v-btn color="white" text @click="snackbar.show = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      user: { username: "", password: "" },
      rules: {
        valid: false,
        nameRules: [value => !!value || "请输入用户名"],
        passRules: [v => v.length >= 8 || "请输入8位以上密码"]
      },
      error: {
        type: "error",
        show: false,
        content: ""
      },
      loading: false,
      snackbar: {
        show: true,
        content: "",
        color: "green"
      }
    };
  },

  methods: {
    async login() {
      this.loading = true;
      this.error.show = false;
      try {
        await this.$store.dispatch("User/login", this.user);
        this.loading = false;
        this.$router.push("/");
      } catch (err) {
        this.error.show = true;
        this.loading = false;
        if (err.base == "invalid_auth") {
          this.error.type = "warning";
          this.error.content = "用户名或密码错误";
        } else {
          console.log(err);
          this.error.type = "error";
          this.error.content = "登录访问错误";
        }
      }
    }
  },
  mounted: function() {
    this.$store
      .dispatch("User/check_server")
      .then(result => console.log(result))
      .catch(error => {
        if (error.toString() === "Error: Request failed with status code 401") {
          this.snackbar.color = "#00abbe";
          this.snackbar.show = true;
          this.snackbar.content = "服务器运行中";
        } else {
          this.snackbar.color = "red";
          this.snackbar.show = true;
          this.snackbar.content = "请检查服务器";
        }
      });
  }
};
</script>

<style scoped></style>
