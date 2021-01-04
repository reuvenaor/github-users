
import assignAll from 'lodash/fp/assignAll';
import axios from 'axios';
import parseLinkHeader from 'parse-link-header';

export const PER_PAGE = 4;

const defaultParams = {
  per_page: PER_PAGE,
};

function addPagination(response) {
  const { data, headers } = response;
  const pagination = parseLinkHeader(headers.link);
  return assignAll([
    data,
    { pagination },
  ]);
}

export default async (req, res) => {
  const {query, page} = req.body;
  try {
    const github = axios.create({
      baseURL: 'https://api.github.com/',
    });

    const token = process.env.GITHUB_TOKEN;
    if (token) {
      github.defaults.headers.common.Authorization = `token ${token}`;
    }

    const gitRes = await github.get('/search/users', {
      params: assignAll([defaultParams, { page: page, q: query || 'reuven' }]),
    });

    const paging = addPagination(gitRes);

    res.status(200).json({ page: paging });

  } catch (error) {
    console.log('error in github.js api,', error)
  }
}
