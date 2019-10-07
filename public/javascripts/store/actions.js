export default {
  fetchAllStockSymbols(context, payload) {
    context.commit('fetchAllStockSymbols', payload);
  },
  fetchAllinfo(context, payload) {
    context.commit('fetchAllinfo', payload);
  },
  fetchAllhistory(context, payload) {
    context.commit('fetchAllhistory', payload);
  },
};
