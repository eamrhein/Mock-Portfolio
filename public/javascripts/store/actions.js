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
  minusShare(context, payload) {
    context.commit('minusShare', payload);
  },
  closeModal(context) {
    context.commit('closeModal');
  },
};
