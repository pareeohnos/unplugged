import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unpluggedcanada.com',
  headers: {
    'Authorization': process.env.REACT_APP_API_KEY || 'missing_api_key'
  }
});

export default api;
