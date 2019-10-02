import {addCompanyInfo} from './api-calls';
import {autocomplete} from './parsing';
document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('search');
  search.addEventListener('keyup', (e) => {
    autocomplete(e);
  });
  addCompanyInfo('AAPL')
      .then((res) => {
        console.log(res);
        const sym = document.getElementById('sym');
        const cName = document.getElementById('cName');
        const web = document.getElementById('web');
        const ceo = document.getElementById('ceo');
        const sec = document.getElementById('sec');
        const emp = document.getElementById('emp');
        const add = document.getElementById('add');
        const st = document.getElementById('st');
        const cty = document.getElementById('cty');
        const des = document.getElementById('des');

        sym.innerHTML = res.symbol;
        cName.innerHTML = res.companyName;
        web.innerHTML = res.website;
        web.href = res.website;
        ceo.innerHTML = res.CEO;
        sec.innerHTML = res.sector;
        emp.innerHTML = res.employees;
        add.innerHTML = res.address;
        st.innerHTML = res.state;
        cty.innerHTML = res.city;
        des.innerHTML = res.description;
      });
});
