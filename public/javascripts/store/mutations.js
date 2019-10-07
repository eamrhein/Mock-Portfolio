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
};
