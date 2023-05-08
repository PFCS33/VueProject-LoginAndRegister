<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #8ce99a;
  border: 1px solid #8ce99a;
  color: #484848;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #40c057;
  border-color: #40c057;
  color: #fff;
}

.transparent {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #8ce99a;
}
.transparent:hover,
.transparent:active {
  background-color: transparent;
  color: #40c057;
}

.flat {
  background-color: transparent;
  color: #8ce99a;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #c3fae8;
}
</style>
