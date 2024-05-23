import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/templates-creator';
import '../../data/restaurantList'; // Import the web component

const NowResto = {
  async render() {
    return `
      <main id="mainContent">
        <h2>Welcome to Asmara Resto</h2>
        <p>Anda lapar kami siap kenyangkan</p>
      </main>

      <img src="./images/heros/hero-image_2.jpg" width="450" alt="" />
      <h1 class="title-rest">Explore Restoran</h1>
      <div id="restaurantList">
        <!-- Tempat untuk menampilkan daftar restoran -->
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurantList');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default NowResto;
