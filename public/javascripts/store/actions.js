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
  addShare(context, payload) {
    context.commit('addShare', payload);
  },
  updateShares(context, payload) {
    context.commit('updateShare', payload);
  },
  minusShare(context, payload) {
    context.commit('minusShare', payload);
  },
  closeModal(context) {
    context.commit('closeModal');
  },
  updateTicker(context, payload) {
    context.commit('updateTicker', payload);
  },
};
