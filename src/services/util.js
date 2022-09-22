
export const filterCountries = (arrOfCountries, findQuery) => {
  if (findQuery) {
    return arrOfCountries.filter(country => country.name.common.toLowerCase().includes(findQuery.toLowerCase()))
  }
  return arrOfCountries;
};