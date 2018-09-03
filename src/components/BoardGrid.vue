<template>
  <div>
    <h2 v-if="!$store.state.winner">
      Your move, {{ $store.state.turn }}
    </h2>

    <div class="board-grid">
      <slot/>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'BoardGrid'
}
</script>

<style lang="scss" scoped>
.board-grid {
  display: grid;
  grid-gap: 2em;
  grid-template: repeat(3, min-content) / repeat(3, min-content);
  margin: 2em;
}
</style>
