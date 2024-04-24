import axios from 'axios';

const apiClient = (() => {
  const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // It still not yet to define the type of error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errHandling = function (error: any) {
    return { error: error };
  };

  // It still not yet to define the type of response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resHandling = (response: any) => ({ response: response.data });

  return {
    get: (url: string) => client.get(url).then(resHandling).catch(errHandling),
    // It still not yet to define the type of params
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    patch: (url: string, params: any) => client.patch(url, params.data, params).then(resHandling).catch(errHandling),
  };
})();

export default apiClient;
