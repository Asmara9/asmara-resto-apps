import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/templates-creator';
import '../../data/restaurantDetail';

const Detail = {
  async render() {
    return `
      <div id="detailRestaurant" class="detailRestaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      if (!restaurant || Object.keys(restaurant).length === 0) {
        throw new Error('Restaurant data is empty or undefined');
      }

      const restaurantsContainer = document.querySelector('#detailRestaurant');
      restaurantsContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
    } catch (error) {
      console.error('Failed to fetch restaurant details:', error);
      const restaurantsContainer = document.querySelector('#detailRestaurant');
      restaurantsContainer.innerHTML = '<p>Failed to load restaurant details. Please try again later.</p>';
    }
  },
};

export default Detail;
