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

  const errHandling = function (error: any) {
    console.log('error', error);
    return { error: error };
  };

  const resHandling = (response: any) => ({ response: response.data });

  return {
    get: (url: string, params?: any) => client.get(url, params).then(resHandling).catch(errHandling),
    patch: (url: string, params: any) => client.patch(url, params.data, params).then(resHandling).catch(errHandling),
  };
})();

export default apiClient;
