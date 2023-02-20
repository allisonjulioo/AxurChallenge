import axios from 'axios';

const internalApiUrl = process.env.REACT_APP_INTERNAL_API_URL;

const externalApiUrl = process.env.REACT_APP_EXTERNAL_API_URL;

const internalInstance = axios.create({
  baseURL: `${internalApiUrl}/crawl/`,
  timeout: 1000,
});

const externalInstance = axios.create({
  baseURL: `${externalApiUrl}/crawl`,
  timeout: 1000,
});

internalInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    alert(`Houve um erro ${JSON.stringify(error)}`);
    return Promise.reject(error);
  },
);

externalInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    
    alert(`Houve um erro ${JSON.stringify(error?.response?.data?.message)}`);
    return Promise.reject(error);
  },
);

export { internalInstance, externalInstance };
