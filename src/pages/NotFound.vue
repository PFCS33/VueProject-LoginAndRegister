<template>
  <BaseCard class="card">
    <h1>页面不存在</h1>
    <p>
      抱歉，页面不存在，可能您是想访问我们的<router-link to="/"
        >主页</router-link
      >
    </p>
  </BaseCard>
</template>

<style scoped>
.card {
  position: fixed;
  top: 20vh;
  width: 30%;
  height: 30%;
  left: 35%;
  padding: 3.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
}
p {
  font-size: 1.6rem;
}
</style>
