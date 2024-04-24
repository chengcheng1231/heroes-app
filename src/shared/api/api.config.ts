import axios from 'axios';
// import appConfig from './app.config';

const apiClient = (() => {
  const client = axios.create({
    // baseURL: appConfig.API_DOMAIN,
    headers: {
      'Content-Type': 'application/json',
      // 'Auth-Scope': appConfig.AUTH_SCOPE,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errHandling = function (error: any) {
    return { error: error };
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resHandling = (response: any) => ({ response: response.data });

  return {
    get: (url: string) => client.get(url).then(resHandling).catch(errHandling),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    patch: (url: string, params: any) => client.patch(url, params.data, params).then(resHandling).catch(errHandling),
  };
})();

export default apiClient;
