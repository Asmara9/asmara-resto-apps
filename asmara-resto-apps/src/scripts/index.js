import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// Ambil data dari file JSON
// fetch('data/DATA.json')
//   .then(response => response.json())
//   .then(data => {
//     // Dapatkan elemen div tempat kita akan menampilkan daftar restoran
//     const restaurantList = document.getElementById('restaurantList');

//     // Loop melalui setiap restoran dalam data
//     data.restaurants.forEach(restaurant => {
//       // Buat elemen div untuk setiap restoran
//       const restaurantDiv = document.createElement('div');
//       restaurantDiv.classList.add('restaurant');

//       // Tambahkan informasi restoran ke dalam elemen div
//       restaurantDiv.innerHTML = `
//         <h2>${restaurant.name}</h2>
//         <img src="${restaurant.pictureId}" alt="${restaurant.name}">
//         <p class="Kota">Kota: ${restaurant.city}</p>
//         <p>Rating: ${restaurant.rating}</p>
//         <p>Deskripsi: ${restaurant.description}</p>
//       `;

//       // Tambahkan elemen div restoran ke dalam div daftar restoran
//       restaurantList.appendChild(restaurantDiv);
//     });
//   })
//   .catch(error => console.error('Error:', error));
