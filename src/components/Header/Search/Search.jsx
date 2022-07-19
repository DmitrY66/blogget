import style from './Search.module.css';
import { ReactComponent as ImgSearch } from './img/search.svg';

export const Search = () => {
  return (
    <form className={style.form}>
      <input className={style.search} type="search" />
      <button className={style.button}>
        <ImgSearch className={style.svg} />
      </button>
    </form>
  );
};
