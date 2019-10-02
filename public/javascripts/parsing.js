
import symbols from './stocksymbols.json';

export const autocomplete = (e) => {
  const input = e.target;
  const minChars = 1;
  const list = document.getElementById('autolist');
  if (input.value.length < minChars) {
    return;
  } else {
    list.innerHTML = '';
    symbols.forEach(function(symbol) {
      if (list.children.length > 10) {
        return;
      }
      if (symbol.Symbol.includes(input.value.toUpperCase())) {
        // Create a new <option> element.
        const option = document.createElement('option');
        option.value = symbol.Symbol;
        option.innerHTML = symbol.Description;
        // attach the option to the datalist element
        list.appendChild(option);
      }
    });
  }
};


