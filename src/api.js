import logger from './logger';
import { allCountries, allUniversities, universitiesForCountry } from './endpoints';
import { ERROR_FETCH_ALL_COUNTRIES, ERROR_FETCH_UNIVERSITIES } from './errors';

const delay = async () => new Promise((resolve) => setTimeout(resolve, 2000));
const get = async (url, errorMessage) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // Error response from the server (e.g.: 401, 404, 500, ...)
      throw new Error({ errorMessage, statusCode: response.status });
    }
    return response.json();
  } catch (error) {
    // Network error (e.g.: CORS)
    logger.error(error);
    throw error;
  }
};

const getAllCountries = async () => {
  return get(allCountries, ERROR_FETCH_ALL_COUNTRIES);
};

const getUniversitiesForCountry = async (country) => {
  // Add a delay to simulate slow network requests
  await delay(3000);
  return get(universitiesForCountry(country), ERROR_FETCH_UNIVERSITIES);
};

const getAllUniversities = async () => {
  // Add a delay to simulate slow network requests
  await delay(3000);
  return get(allUniversities, ERROR_FETCH_UNIVERSITIES);
};

export { getAllCountries, getUniversitiesForCountry, getAllUniversities };
