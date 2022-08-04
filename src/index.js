import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');
// const countryList = document.querySelector('.country-list');

searchInput.addEventListener('input', debounce(handleSearch, DEBOUNCE_DELAY));

function handleSearch() {
  const countryName = searchInput.value;
  if (countryName === '') {
  }
  //   console.log(countryName);
  const countryInfo = fetchCountries(countryName);
  console.log(countryInfo);
  //   countryList.insertAdjacentHTML(countryInfo);
}
