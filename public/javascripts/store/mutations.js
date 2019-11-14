export default {
  fetchAllStockSymbols(state, payload) {
    state.symbols = payload;
    return state;
  },
  fetchAllinfo(state, payload) {
    state.company = payload;
    return state;
  },
  fetchAllhistory(state, payload) {
    state.history = payload;
    return state;
  },
  addShare(state, payload) {
    state.company[payload].shares += 1;
    return state;
  },
  minusShare(state, payload) {
    if (state.company[payload].shares > 0) {
      state.company[payload].shares -= 1;
    }
    return state;
  },
  updateShare(state, payload) {
    if (state.company[payload.sym].shares > 0) {
      state.company[payload.sym].shares = payload.num;
    }
  },
  closeModal(state) {
    state.modal = false;
    return state;
  },
  updateTicker(state, payload) {
    state.ticker = payload;
    return state;
  },
};
