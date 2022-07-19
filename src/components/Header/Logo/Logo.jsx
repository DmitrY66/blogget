import style from './Logo.module.css';
import { ReactComponent as ImgLogo } from './img/logo.svg';

export const Logo = () => {
  return (
    <a className={style.link} href='/'>
      <ImgLogo />
    </a>
  );
};
