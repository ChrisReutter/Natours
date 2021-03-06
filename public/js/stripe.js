/* eslint-disable */
import axios from 'axios';
import {
  showAlert
} from './alerts';
const stripe = Stripe('pk_test_51HBpMuGlszH4RPz6RZX97lYwsWXhnTGEZ08m0AhEqjvPWGsovTud7xCWjfZ0rZEpPDQNHZ7vEd1kMzBqfrgB63XN00zqLUxGWN');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      // `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
      `/api/v1/bookings/checkout-session/${tourId}`
    );


    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};