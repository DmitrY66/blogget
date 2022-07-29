import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { getToken } from '../api/token';
// import { tokenContext } from '../context/tokenContext';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  // const { token, delToken } = useContext(tokenContext);

  const token = getToken();
  // console.log('token: ', token);


  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      }).catch(err => {
        console.error('произошла ошибка', err);
        // delToken();
        setAuth({});
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  // console.log('auth: ', auth);
  return [auth, clearAuth];
};
