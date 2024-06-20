import RestaurantApiSource from '../../data/restaurantdb-sources';
import API_ENDPOINT from '../../globals/api-endpoint';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
        <h2 class="home-page-header">Ini Cabang Cabangnya</h2>
      <!-- Search Bar -->
      <div class="search-container">
        <input type="text" id="search-input" placeholder="Yuk cari cabangnya...">
        <button id="search-button">Cari</button>
    </div>
      <!-- Restaurant Container -->
      <div class="restaurants" id="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.getElementById('restaurants');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    const displayRestaurants = (restaurants) => {
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('div');
        restaurantItem.classList.add('restaurant-item');
        restaurantItem.innerHTML = createRestaurantItemTemplate(restaurant);
        restaurantsContainer.appendChild(restaurantItem);
      });
    };

    const searchRestaurants = async (query) => {
      try {
        const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query));
        const data = await response.json();
        displayRestaurants(data.restaurants);
      } catch (error) {
        console.error('Error searching restaurants:', error);
      }
    };

    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        searchRestaurants(query);
      } else {
        alert('Please enter a search query');
      }
    });

    // Listen for Enter key press in the search input field
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          searchRestaurants(query);
        } else {
          alert('Please enter a search query');
        }
      }
    });

    // Initial render without search query
    const initialRestaurants = await RestaurantApiSource.getListOfRestaurants();
    displayRestaurants(initialRestaurants);
  },
};

export default Home;
