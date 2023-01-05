import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '31450425-dd548763c25a86c415896ab3e';

export const fetchPictures = async (value, page = 1) => {
  try {
    const options = {
      key: KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: 12,
    };

    const response = await axios.get(URL, {
      params: options,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};