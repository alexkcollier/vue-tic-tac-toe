import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = () => ({
  players: ['X', 'O'],
  turn: 'X',
  winner: '',
  cells: [
    /* eslint-disable */
    { name: 1, value: '' }, { name: 2, value: '' }, { name: 3, value: '' },
    { name: 4, value: '' }, { name: 5, value: '' }, { name: 6, value: '' },
    { name: 7, value: '' }, { name: 8, value: '' }, { name: 9, value: '' }
    /* eslint-enable */
  ]
})

export default new Vuex.Store({
  state: initialState,

  mutations: {
    setValue: (s, { name }) => {
      s.cells.find(c => c.name === name).value = s.turn
    },
    changeTurn: s => (s.turn = s.players.find(p => p !== s.turn)),
    setWinner: (state, { winner }) => (state.winner = winner),
    resetGame: state => {
      const initial = initialState()
      state = Object.keys(initial).forEach(key => (state[key] = initial[key]))
    }
  },

  actions: {
    makeMove: ({ state, commit, dispatch }, { name }) => {
      commit('setValue', { name })
      dispatch('validateGame')
      if (!state.winner) commit('changeTurn')
    },

    validateGame: ({ state: { cells, players }, commit }) => {
      // it's possible for no one to win
      if (cells.every(cell => cell.value)) {
        return commit('setWinner', { winner: 'No one' })
      }

      const rows = [cells.slice(0, 3), cells.slice(3, 6), cells.slice(6)]

      const columns = [
        [cells[0], cells[3], cells[6]],
        [cells[1], cells[4], cells[7]],
        [cells[2], cells[5], cells[8]]
      ]

      const diagonals = [
        /* eslint-disable */
        [cells[0], cells[4], cells[8]],
        [cells[2], cells[4], cells[6]]
        /* eslint-enable */
      ]

      players.forEach(player => {
        return [...rows, ...columns, ...diagonals].map(set => {
          if (set.every(({ value }) => value === player)) {
            commit('setWinner', { winner: player })
          }
        })
      })
    }
  }
})
