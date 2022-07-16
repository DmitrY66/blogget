import style from './Image.module.css';
import notphoto from '../img/notphoto.jpg';
import { postData } from '../../../../../data';

export const Image = () => {
  const { title } = postData;

  return (
    <img className={style.img} src={notphoto} alt={title} />
  );
};
