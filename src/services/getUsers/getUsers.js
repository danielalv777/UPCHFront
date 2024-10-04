import axios from 'axios';

import { url, paramsStatic } from '../constants';

export const getUsers = async ({pageParam = 1} = {}) => {
    
    const params = new URLSearchParams(paramsStatic);
    params.append("page", pageParam);

    const urlFetchInit = `${url}`;
    
    try {
        const response = await axios.get(urlFetchInit, {params});
        if (response.status === 200) {
            return response.data.results;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
};