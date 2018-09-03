<template>
  <div 
    :class="{ 'active': !value }"
    class="board-cell">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'BoardCell',

  props: {
    value: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.board-cell {
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.05),
    0.125rem 0.125rem 1rem 0.125rem hsla(0, 0%, 0%, 0.1);
  display: flex;
  font-size: 2em;
  font-weight: bold;
  height: 6rem;
  justify-content: center;
  transition: all 75ms ease-out;
  width: 6rem;
}

.active {
  &:hover {
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.05),
      0.125em 0.125em 1em 0.25em hsla(0, 0%, 0%, 0.1);
    cursor: pointer;
    transform: scale(1.05);
  }
}
</style>
