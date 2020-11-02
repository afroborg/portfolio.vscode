export const config = {
  API_URL:
    process.env.NODE_ENV !== 'production'
      ? 'https://axel-portfolio-api.azurewebsites.net/api/'
      : 'http://localhost:5000/api/',
};
