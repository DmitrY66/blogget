import PropTypes from 'prop-types';
import style from './Auth.module.css';
import { ReactComponent as ImgLogin } from './img/login.svg';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../api/auth';
import { useState, useContext } from 'react';
import { tokenContext } from '../../../context/tokenContext';
import { authContext } from '../../../context/authContext';

export const Auth = () => {
  const { delToken } = useContext(tokenContext);
  let [showHideBtn, setshowHideBtn] = useState(style.hidden);
  const { auth, clearAuth } = useContext(authContext);

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
              clearAuth();
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
