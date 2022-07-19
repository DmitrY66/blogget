import style from './BtnDelete.module.css';
import { ReactComponent as ImgDelete } from './img/delete.svg';

export const BtnDelete = () => {
  return (
    <button className={style.delete} aria-label='Удалить'>
      <ImgDelete />
    </button>
  );
};
