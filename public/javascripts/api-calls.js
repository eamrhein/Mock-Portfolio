
export const addCompanyInfo = (sym) => {
  return fetch(`/companyinfo/${sym}`)
      .then((res) => res.json());
};
