<template>
  <KeepAlive>
    <component :is="activePage"> </component>
  </KeepAlive>
</template>

<script>
import LoginComponent from "./Login/LoginComponent.vue";
import LoginPage from "./Login/LoginPage.vue";
import SignupPage from "./Signup/SignupPage.vue";

export default {
  components: { LoginComponent, LoginPage, SignupPage },
  data() {
    return {
      activePage: "LoginPage",
    };
  },
  methods: {
    switchPage(target) {
      this.activePage = target;
    },
  },
  provide() {
    return {
      switchPage: this.switchPage,
    };
  },
};
</script>

<style scoped></style>
