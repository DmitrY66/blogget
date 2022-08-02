import { URL_HOME } from '../../../api/const';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import { ReactComponent as ImgLogin } from './img/login.svg';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../api/auth';
import { useState } from 'react';
// import { authContext } from '../../../context/authContext';
import { delToken } from '../../../store/tokenReducer';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { PreLoader } from '../../../UI/PreLoader/PreLoader';

export const Auth = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispatch(delToken());
    location = URL_HOME;
    clearAuth();
  };

  return (
    <div className={style.container}>

      {loading ? (
        <PreLoader />
      ) : auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
            <Text>{auth.name}</Text>
          </button>
          {showLogout && (
            <button
              className={style.logout}
              onClick={logOut}
            >Выйти</button>
          )}
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
