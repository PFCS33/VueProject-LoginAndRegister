<template>
  <li>
    <img alt="项目图片" :src="imgUrl" />
    <span>项目名</span>
    <div>
      <p>负责人：</p>
      <p>{{ leaderName }}</p>
    </div>
    <div></div>
    <div>
      <button></button>
      <button></button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["imgUrl", "leaderName"],
  data() {
    return {};
  },
};
</script>

<style scoped></style>
