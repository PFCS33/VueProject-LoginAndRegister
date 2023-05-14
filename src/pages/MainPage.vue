<template>
  <MainBackground>
    <ul>
      <ProjectItem></ProjectItem>
    </ul>
  </MainBackground>
</template>

<script>
import ProjectItem from "../components/project/ProjectItem.vue";
export default {
  components: {
    ProjectItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
