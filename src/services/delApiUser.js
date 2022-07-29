import { URL } from '../store/URL';

export const delApiUser = async (id) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('something wrong!');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
