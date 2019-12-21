
const API_BASE = 'http://pb-api.herokuapp.com';

export const fetchBarsData = async () => {
  const response = await fetch(`${API_BASE}/bars`);
  return response.json();
};

export default fetchBarsData;
