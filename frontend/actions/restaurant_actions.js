import * as RestaurantAPIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants 
});

export const receiveRestaurant = restaurant => ({
    type: RECEIVE_RESTAURANT,
    restaurant
});

export const fetchRestaurants = () => dispatch => (
    RestaurantAPIUtil.fetchRestaurants().then(restaurants => dispatch(receiveRestaurants(restaurants)))
);

export const fetchRestaurant = (id) => dispatch => (
    RestaurantAPIUtil.fetchRestaurant(id).then(restaurant => dispatch(receiveRestaurant(restaurant)))
)