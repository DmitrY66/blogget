// import PropTypes from 'prop-types';
import style from './Auth.module.css';
import { URL_HOME } from '../../../api/const';
import { ReactComponent as ImgLogin } from './img/login.svg';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../api/auth';
import { useState, useContext } from 'react';
// import { tokenContext } from '../../../context/tokenContext';
import { authContext } from '../../../context/authContext';

import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store';

export const Auth = () => {
  // const { delToken } = useContext(tokenContext);
  let [showHideBtn, setshowHideBtn] = useState(style.hidden);

  const dispatch = useDispatch();

  const { auth, clearAuth } = useContext(authContext);
  // const { auth } = useContext(authContext);
  // console.log('auth: ', auth);

  const handleDelToken = () => {
    dispatch(deleteToken());
    location = URL_HOME;
  };

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
              // delToken();
              handleDelToken();
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

// Auth.propTypes = {
//   token: PropTypes.string,
//   delToken: PropTypes.func,
// };
