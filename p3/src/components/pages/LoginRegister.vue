<template>
  <div>
    <p v-if="successfulLogin">
      You've successfully logged in! Visit the home page to read about cats or
      write your own post about your cats.
    </p>
    <div v-else class="account">
      <div>
        <h2>Login</h2>
        <div>
          <label
            >Email:
            <input
              required
              type="text"
              data-test="email-input"
              v-model="data.email"
          /></label>
        </div>
        <div>
          <label
            >Password:
            <input
              required
              type="password"
              data-test="password-input"
              v-model="data.password"
          /></label>
        </div>

        <button @click="login" data-test="login-button">
          Login
        </button>

        <ul v-if="loginErrors">
          <li class="error" v-for="(error, index) in loginErrors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div>
        <h2>Or Register</h2>
        <label
          >Name Please:
          <input
            required
            type="text"
            data-test="register-name-input"
            v-model="registration.name"
            @blur="validate()"
        /></label>
        <ul v-if="registryErrors">
          <li
            class="error"
            v-for="(error, index) in registryErrors.name"
            :key="index"
          >
            {{ error }}
          </li>
        </ul>
        <label
          >Set an Email:
          <input
            required
            type="text"
            data-test="register-email-input"
            v-model="registration.email"
            @blur="validate()"
        /></label>
        <ul v-if="registryErrors">
          <li
            class="error"
            v-for="(error, index) in registryErrors.email"
            :key="index"
          >
            {{ error }}
          </li>
        </ul>
        <label
          >Set Your Password:
          <input
            required
            type="password"
            data-test="register-password-input"
            v-model="registration.password"
            @blur="validate()"
        /></label>
        <ul v-if="registryErrors">
          <li
            class="error"
            v-for="(error, index) in registryErrors.password"
            :key="index"
          >
            {{ error }}
          </li>
        </ul>
        <button @click="register" data-test="register-button">Register</button>
        <p v-if="successfulRegistry">
          You've successfully registered. Now log in and start drawing comics of
          your cats!!
        </p>
        
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from "validatorjs";

export default {
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
      registration: {
        name: "",
        email: "",
        password: "",
      },
      successfulRegistry: false,
      successfulLogin: false,
      registryErrors: null,
      loginErrors: null,
      showConfirmationMessage: false,
    };
  },
  computed: {
    // Get our user state from the Vuex store
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      axios.post("login", this.data).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
          this.successfulLogin = true;
        } else {
          this.loginErrors = response.data.errors;
        }
      });
    },
    register() {
      axios.post("register", this.registration).then((response) => {
        if (response.data.errors) {
          this.registryErrors = response.data.errors;
        } else {
          this.$store.dispatch("authUser");
          this.successfulRegistry = true;
        }
      });
    },
    logout() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", null);
        }
      });
    },
    validate() {
      let validator = new Validator(this.registration, {
        name: "required",
        email: "required",
        password: "required",
      });
      this.registryErrors = validator.errors.all();

      return validator.passes();
    },
  },
};
</script>

<style scoped>
.error {
    color: red; 
}
.account {
  display: flex;
  flex-direction: row;
}
h2,
p,
label,
button {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h2 {
  font-family: "Pacifico", cursive;
}
canvas {
  width: 200px;
  height: 150px;
  margin: 0 auto;
}
div {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
input,
button,
textarea {
  border-radius: 1rem;
  border: 1px solid #ffd9d9;
}
textarea {
  padding: 1rem;
}
label {
  margin: 1rem;
  text-align: left;
}
button {
  padding: 1rem;
  background-color: #ffd9d9;
  font-size: 1.2rem;
  margin: 1rem;
}
button:hover {
  background-color: lightpink;
}
cite {
  margin-left: 16px;
}
</style>
