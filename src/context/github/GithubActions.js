import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `${GITHUB_TOKEN}` },
});

// Get search results
export const searchUsers = async (text) => {
  const pararms = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${pararms}`);
  return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/search/users?${login}`),
    github.get(`/search/users?${login}/repos`),
  ]);

  if (user.status === 404) {
    window.location = '/not-found';
    return;
  }

  console.log(user.data, repos.data)
  return {
    user: user.data,
    repos: repos.data,
  };
};

