import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}search?q=${encodeURIComponent(query)}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
