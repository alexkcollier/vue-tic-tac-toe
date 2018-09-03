<template>
  <div id="app">
    <h1>
      <img 
        alt="Vue logo" 
        src="./assets/logo.png">
      Tic-Tac-Toe
    </h1>
    <BaseContainer>

      <BoardGrid v-if="!$store.state.winner">
        <BoardCell 
          v-for="{ name, value } in cells"
          :key="name"
          :value="value"
          @click.native="makeMove({ name })"/>
      </BoardGrid>

      <div v-else>
        <h2 >Game Over</h2>

        <div class="winner">
          <h1>{{ $store.state.winner }} wins!</h1>
        </div>
      </div>

      <button @click="$store.commit('resetGame')">Reset</button>
    </BaseContainer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BaseContainer from './components/BaseContainer'
import BoardGrid from './components/BoardGrid'
import BoardCell from './components/BoardCell'

export default {
  name: 'App',

  components: {
    BaseContainer,
    BoardGrid,
    BoardCell
  },

  computed: {
    ...mapState(['cells'])
  },

  methods: {
    ...mapActions(['makeMove'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  display: block;
  margin: 0 auto;
}

.winner {
  align-items: center;
  display: flex;
  flex-direction: column;
  /* magic number based on BoardGrid (col * 3 + colGap * 2) */
  height: 22em;
  justify-content: center;
  margin: 2em;
  /* magic number based on BoardGrid (row * 3 + rowGap * 2) */
  width: 22em;
}

.reset-button {
  background: white;
  border: none;
  border-radius: 0.25em;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 10%);
  color: rgba(0, 0, 0, 60%);
  cursor: pointer;
  font-size: 1.25em;
  margin-top: 4rem;
  outline: none;
  padding: 0.5em 1em;
  transition: all 75ms ease-out;

  &:hover {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 5%),
      0.125rem 0.125rem 1rem 0.25rem rgba(0, 0, 0, 10%);
    transform: scale(1.025);
  }
}
</style>
