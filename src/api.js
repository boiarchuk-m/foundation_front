import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/app';

export const getRequests = () => axios.get(`${API_BASE_URL}/requests/`);
export const createRequest = (data) => axios.post(`${API_BASE_URL}/requests/`, data);
export const editRequest = (id, data) =>
  axios.patch(`${API_BASE_URL}/requests/${id}/`, data);
export const deleteRequest = (id) =>
  axios.delete(`${API_BASE_URL}/requests/${id}/`);
export const manageRequest = (id, data) =>
  axios.patch(`${API_BASE_URL}/requests/${id}/manage_request/`, data);