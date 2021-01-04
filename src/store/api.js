import axios from 'axios';

export const githubApi = async (body) => {
  return axios.post('api/github', body);
}
