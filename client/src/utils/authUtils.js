// src/utils/auth.js
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export const getDecodedToken = () => {
  const token = Cookies.get('access_token'); // Access the token from cookies
  if (token) {
    try {
      return jwt_decode(token); // Decode the token
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null; // Return null if decoding fails
    }
  }
  return null; // Return null if no token exists
};
