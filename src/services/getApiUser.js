import { URL } from '../store/URL';

export const getApiUser = async (url = URL) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('something wrong!');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
