import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { getToken } from '../api/token';
// import { tokenContext } from '../context/tokenContext';

export const useCommentsData = (id) => {
  // const { token } = useContext(tokenContext);
  const token = getToken();
  // console.log('token: ', token);

  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);

          setCommentsData([post, comments]);
        },
      )
      .catch((err) => {
        console.error('ошибище!!!', err);
      });
  }, [token]);


  // console.log('commentsData: ', commentsData);
  return commentsData;
};
