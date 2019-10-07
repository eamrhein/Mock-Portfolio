/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
export const autocomplete = (inp, arr) => {
  inp.addEventListener('input', function(e) {
    const val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    const a = document.getElementById('autolist');
    a.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
      if (a.children.length > 20) return;
      if (
        arr[i]['Symbol']
            .substr(0, val.length)
            .toUpperCase() ==
        val.toUpperCase()) {
        const b = document.createElement('option');
        b.setAttribute('class', 'autocomplete-items');
        b.value = arr[i]['Symbol'];
        b.innerHTML = '<strong>' + arr[i]['Company Name'].substr(0, val.length) + '</strong>';
        b.innerHTML += arr[i]['Company Name'].substr(val.length);
        b.addEventListener('click', function(e) {
          inp.value = this.getElementsByTagName('input')[0].value;
          closeAllLists();
        });
        if (a.children) {
          a.appendChild(b);
        }
      }
    }
  });
  const closeAllLists = (elmnt) => {
    const x = document.getElementsByClassName('autocomplete-items');
    for (let i = 0; i < x.length; i++) {
      x[i].parentNode.removeChild(x[i]);
    }
  };
  document.addEventListener('click', function(e) {
    closeAllLists(e.target);
  });
};
