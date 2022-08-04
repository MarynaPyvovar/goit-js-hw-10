import Notiflix from 'notiflix';

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export const fetchCountries = name => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      console.log(data);

      if (data.length < 10) {
        return renderList(data);
      }
      if (data.length === 1) {
        return renderCountryInfo(data[0]);
      }
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
};

function renderCountryInfo({
  name: { official },
  capital,
  population,
  flags: { svg },
  languages,
}) {}

function renderList({ name: { official }, flags: { svg } }) {
  const list = data
    .map(item => `<li><svg><use src=${svg}></use></svg><p>${official}</p></li>`)
    .join('');
  countryList.insertAdjacentHTML(list);
}
