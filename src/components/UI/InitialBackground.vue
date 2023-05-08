<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  height: 100vh;
  position: relative;
  background-image: linear-gradient(
      rgba(34, 34, 34, 0.55),
      rgb(34, 34, 34, 0.5)
    ),
    url("../../assets/backgournd.jpg");
  background-size: cover;
  color: #fff;
}
</style>
