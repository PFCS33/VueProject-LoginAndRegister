<template>
  <InitialBackground>
    <BaseCard class="box">
      <h1>注册</h1>
      <SignupComponent></SignupComponent>
      <BaseButton mode="transparent" @click="switchPage('LoginPage')"
        >已经注册？去登陆</BaseButton
      >
    </BaseCard>
  </InitialBackground>
</template>

<script scoped>
import SignupComponent from "./SignupComponent.vue";

export default {
  components: {
    SignupComponent,
  },
  inject: ["switchPage"],
};
</script>

<style scoped>
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 80%;

  background-image: linear-gradient(
    rgba(200, 200, 200, 0.55),
    rgba(200, 200, 200, 0.5)
  );

  display: flex;
  flex-direction: column;

  padding: 42px 36px;
}

h1 {
  align-self: center;

  font-size: 3rem;
}
</style>
