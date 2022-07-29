import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { getToken } from '../api/token';
// import { tokenContext } from '../context/tokenContext';

export const usePosts = () => {
  // const { token } = useContext(tokenContext);
  const [posts, setPosts] = useState([]);

  const token = getToken();

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best?limit=8`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(response => {
        setPosts(response.data.children);
      })
      .catch(err => {
        console.error('произошла ошибка', err);
      });
  }, [token]);

  // console.log(posts);

  return posts;
};
