import RestaurantSource from '../../data/restaurantdb-sources';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, createRestaurantReviewsTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
      <div id="addReviewForm" class="add-review-form">
        <h3>Add a Review</h3>
        <form id="reviewForm">
          <div class="form-group">
            <label for="reviewerName">Your Name</label>
            <input type="text" id="reviewerName" name="reviewerName" required>
          </div>
          <div class="form-group">
            <label for="reviewContent">Your Review</label>
            <textarea id="reviewContent" name="reviewContent" required></textarea>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const reviewTemplate = createRestaurantReviewsTemplate(restaurant.customerReviews);
    restaurantsContainer.insertAdjacentHTML('beforeend', reviewTemplate);

    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: restaurant.id,
    //     name: restaurant.name,
    //     description: restaurant.description,
    //     pictureId: restaurant.pictureId,
    //     rating: restaurant.rating,
    //     city: restaurant.city,
    //   },
    // });

    // const form = document.getElementById('reviewForm');
    // form.addEventListener('submit', async (event) => {
    //   event.preventDefault(); // Prevent default form submission

    //   // Get reviewer name and review content from the form
    //   const reviewerName = document.getElementById('reviewerName').value;
    //   const reviewContent = document.getElementById('reviewContent').value;

    //   // Save the review to the server
    //   try {
    //     const newReview = {
    //       id: restaurant.id,
    //       name: reviewerName,
    //       review: reviewContent,
    //     };

    //     const savedReviews = await RestaurantSource.addReview(newReview);
    //     // Update the UI with the new review
    //     appendReviewToDOM(savedReviews);

    //     // Clear the form after adding the review
    //     form.reset();
    //   } catch (error) {
    //     console.error('Error saving review:', error);
    //     alert('Failed to save review. Please try again.');
    //   }
    // });
  },
};

export default Detail;
