import style from './Content.module.css';
import { postData } from '../../../../../data';

export const Content = () => {
  const { title, author } = postData;

  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href='#post'>
          {title}
        </a>
      </h2>
      <a className={style.linkAuthor} href='#author'>
        {author}
      </a>
    </div>
  );
};
