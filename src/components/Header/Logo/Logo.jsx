import style from './Logo.module.css';
import { ReactComponent as ImgLogo } from './img/logo.svg';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className={style.link}
      onClick={() => {
        navigate('/');
      }}
    >
      <ImgLogo />
    </div>
  );
};
