import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>👍<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__container">
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <h3>Information</h3>
  <h4 class="city"><i class="fa fa-map-marker"></i> City</h4>
  <p>${restaurant.city}</p>
  <h4 class="address"><i class="fa fa-address-card"></i> Address</h4>
  <p>${restaurant.address}</p>
  <h4 class="rating"><i class="fa fa-star"></i> Rating</h4>
  <p>${restaurant.rating}</p>
</div>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menu">
    <h3>Menu</h3>
    <h4>Food</h4>
    <ul>
      <p>${restaurant.menus.foods.map((food) => `- ${food.name}`).join('<br>')}</p>
    </ul>
    <h4>Drinks</h4>
    <ul>
      <p>${restaurant.menus.drinks.map((drink) => `- ${drink.name}`).join('<br>')}</p>
    </ul>
  </div>
  <div class="restaurant__reviews"></div> <!-- Container for reviews -->
`;

export function createRestaurantReviewsTemplate(reviews) {
  let reviewsHtml = '';
  reviews.forEach((review) => {
    reviewsHtml += `
      <div class="review">
        <p>${review.name}</p>
        <p>${review.review}</p>
      </div>
    `;
  });
  return reviewsHtml;
}

const createRestoLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createRestoLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate,
  createRestoLikeButtonTemplate, createRestoLikedButtonTemplate,
};
