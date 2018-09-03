<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'BaseContainer'
}
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
