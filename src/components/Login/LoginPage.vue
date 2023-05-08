<template>
  <InitialBackground>
    <BaseCard class="box">
      <img alt="Logo" src="../../assets/card-pic.jpg" />
      <div class="content">
        <h1>BIT JUMP 项目管理系统</h1>
        <LoginComponent></LoginComponent>
        <BaseButton mode="transparent" @click="switchPage('SignupPage')">
          还没有账号?去注册
        </BaseButton>
      </div>
    </BaseCard>
  </InitialBackground>
</template>

<script>
import InitialBackground from "../UI/InitialBackground.vue";
import LoginComponent from "./LoginComponent.vue";

export default {
  components: { LoginComponent, InitialBackground },
  inject: ["switchPage"],
};
</script>

<style scoped>
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-30%, -50%);
  width: 55%;
  height: 60%;

  display: flex;
  gap: 10px;
  justify-content: space-between;

  border: 1px solid #fff;

  background-image: linear-gradient(
    rgba(125, 125, 125, 0.55),
    rgba(125, 125, 125, 0.5)
  );
}

img {
  border-radius: 12px 0 0 12px;
}
.content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  padding: 36px;
  justify-content: space-between;
  align-items: stretch;
}
h1 {
  font-size: 3rem;
  align-self: center;
  margin-bottom: 32px;
  margin-top: 16px;
}
</style>
