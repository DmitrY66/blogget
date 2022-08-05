import style from './NotFound.module.css';
import ImgError from './img/404.svg';

export const NotFound = () => {
  return (
    <div className={style.notFound}>
      <img className={style.notFound__img} src={ImgError} alt="" />
    </div>
  );
};
