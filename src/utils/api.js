import axios from 'axios';

export function getApi(url) {
  return axios.get(url);
}

export function postApi(url, data) {
  return axios.post(url, data);
}

export function putApi(url, data) {
  return axios.put(url, data);
}

export function deleteApi(url) {
  return axios.delete(url);
}