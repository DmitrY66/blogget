import style from './Content.module.css';
import { postData } from '../../../../../data';
import { Text } from '../../../../../UI/Text';

export const Content = () => {
  const { title, author } = postData;

  return (
    <div className={style.content}>
      {/* <h2 className={style.title}> */}
      <Text As='h2' className={style.title}>
        <Text As='a' size={18} tsize={24} className={style.linkPost} href='#post'>
          {title}
        </Text>
      </Text>
      {/* <a className={style.linkAuthor} href='#author'>
        {author}
      </a> */}
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
    </div>
  );
};
