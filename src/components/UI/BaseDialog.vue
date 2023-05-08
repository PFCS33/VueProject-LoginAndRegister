<template>
  <Teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="header"></slot>
        <h2>{{ title }}</h2>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="'action'"></slot>
        <BaseButton @click="$emit('close')">关闭</BaseButton>
      </menu>
    </dialog>
  </Teleport>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  padding: 12px;
  top: 50%;
  left: 50%;
  width: 30%;
  transform: translate(-50%, -50%);

  z-index: 100;
  border-radius: 6px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 24px;
}

header {
  color: #000;
}
section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #495057;
}
menu {
  display: flex;
  justify-content: flex-end;
}
</style>
