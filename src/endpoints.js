const allCountries = 'https://restcountries.eu/rest/v2/all';
const universitiesForCountry = (country) =>
  `http://universities.hipolabs.com/search?country=${country}`;
const allUniversities = `http://universities.hipolabs.com/search`;

export { allCountries, allUniversities, universitiesForCountry };
