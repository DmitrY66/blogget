import PropTypes from 'prop-types';
import style from './Auth.module.css';
import { ReactComponent as ImgLogin } from './img/login.svg';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../api/auth';
import { useEffect, useState } from 'react';
import { URL_API } from '../../../api/const';

export const Auth = ({ token, delToken }) => {
  const [auth, setAuth] = useState({});
  let [showHideBtn, setshowHideBtn] = useState(style.hidden);

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
        delToken();
        setAuth({});
      });
  }, [token]);


  return (
    <div className={style.container}>

      {auth.name ? (
        <>
          <button className={style.btn}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
              onClick={() => {
                if (showHideBtn === style.hidden) {
                  setshowHideBtn(showHideBtn = style.logout);
                } else if (showHideBtn === style.logout) {
                  setshowHideBtn(showHideBtn = style.hidden);
                }
              }} />
            <Text>{auth.name}</Text>
          </button>
          <button
            className={showHideBtn}
            onClick={() => {
              delToken();
            }
            }>Выйти</button>
        </>
      ) : (

        <Text className={style.authLink} As='a' href={urlAuth}>
          <ImgLogin className={style.svg} />
        </Text>

      )}

    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
