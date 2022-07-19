import PropTypes from 'prop-types';
import style from './Auth.module.css';
import { ReactComponent as ImgLogin } from './img/login.svg';

export const Auth = ({ auth }) => {
  return (
    <button className={style.button}>

      {auth ? auth : <ImgLogin className={style.svg} />}

    </button>
  );
};

Auth.propTypes = {
  auth: PropTypes.bool,
};
